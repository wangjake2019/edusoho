<?php

namespace ApiBundle\Api\Resource\MultiClass;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Assistant\Service\AssistantStudentService;
use Biz\Course\CourseException;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\MemberService;
use Biz\MultiClass\MultiClassException;
use Biz\MultiClass\Service\MultiClassService;

class MultiClassStudent extends AbstractResource
{
    const MAX_ASSISTANT_NUM = 20;

    public function add(ApiRequest $request, $multiClassId)
    {
        $studentData = $request->request->all();
        if (!ArrayToolkit::requireds($studentData, ['userInfo', 'price'])) {
            throw MultiClassException::MULTI_CLASS_DATA_FIELDS_MISSING();
        }

        $multiClass = $this->getMultiClassService()->getMultiClass($multiClassId);
        if (empty($multiClass)) {
            throw MultiClassException::MULTI_CLASS_NOT_EXIST();
        }

        if (!$this->getCourseService()->hasCourseManagerRole($multiClass['courseId'], 'course_member_create')) {
            throw CourseException::FORBIDDEN_MANAGE_COURSE();
        }

        $courseId = $multiClass['courseId'];
        $studentData['source'] = 'outside';
        $operateUser = $this->getCurrentUser();
        $studentData['remark'] = empty($studentData['remark']) ? $operateUser['nickname'].'添加' : $studentData['remark'];
        $user = $this->getUserService()->getUserByLoginField($studentData['userInfo'], true);

        $this->getCourseMemberService()->becomeStudentAndCreateOrder($user['id'], $courseId, $studentData);

        return ['success' => true];
    }

    public function search(ApiRequest $request, $id)
    {
        $multiClass = $this->getMultiClassService()->getMultiClass($id);

        if (!$this->getCourseService()->hasCourseManagerRole($multiClass['courseId'])) {
            throw CourseException::FORBIDDEN_MANAGE_COURSE();
        }

        $conditions = $request->query->all();
        $conditions['courseId'] = $multiClass['courseId'];
        $conditions['role'] = 'student';

        if (!empty($conditions['keyword'])) {
            $conditions['userIds'] = $this->getUserService()->getUserIdsByKeyword($conditions['keyword']);
            unset($conditions['keyword']);
        }

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $members = $this->getCourseMemberService()->searchMembers(
            $conditions,
            ['createdTime' => 'DESC'],
            $offset,
            $limit
        );

        $total = $this->getCourseMemberService()->countMembers($conditions);

        $this->getOCUtil()->multiple($members, ['userId'], 'user', 'user', true);
        $this->getOCUtil()->multiple($members, ['userId'], 'profile', 'profile', true);

        $members = $this->getLearningDataAnalysisService()->fillCourseProgress($members);

        $assistantMembers = $this->getCourseMemberService()->searchMembers(['courseId' => $multiClass['courseId'], 'role' => 'assistant'], [], 0, self::MAX_ASSISTANT_NUM);
        $assistantIds = ArrayToolkit::column($assistantMembers, 'userId');

        $assistants = $this->getUserService()->findUsersByIds($assistantIds);
        $assistantInfos = ArrayToolkit::thin(array_values($assistants), ['id', 'nickname']);

        $members = $this->getThreadService()->fillThreadCounts(['courseId' => $multiClass['courseId'], 'type' => 'question'], $members);

        $homeworkCount = $this->getActivityService()->count(
            ['mediaType' => 'homework', 'fromCourseId' => $multiClass['courseId']]
        );
        $testpaperCount = $this->getActivityService()->count(
            ['mediaType' => 'testpaper', 'fromCourseId' => $multiClass['courseId']]
        );

        $assistantStudents = $this->getAssistantStudentService()->findByMultiClassId($id);
        $assistantStudents = ArrayToolkit::index($assistantStudents, 'studentId');

        $this->getOCUtil()->multiple($assistantStudents, ['assistantId']);

        $userHomeworkCount = $this->findUserTaskCount($multiClass['courseId'], 'homework');
        $userTestpaperCount = $this->findUserTaskCount($multiClass['courseId'], 'testpaper');
        foreach ($members as &$member) {
            $member['finishedHomeworkCount'] = 0;
            $member['homeworkCount'] = $homeworkCount;
            if (!empty($userHomeworkCount[$member['userId']])) {
                $member['finishedHomeworkCount'] = $userHomeworkCount[$member['userId']];
            }

            $member['assistant'] = [];
            if (!empty($assistantStudents[$member['userId']])) {
                $member['assistant'] = $assistantStudents[$member['userId']]['assistant'];
            }

            $member['finishedTestpaperCount'] = 0;
            $member['testpaperCount'] = $testpaperCount;
            if (!empty($userTestpaperCount[$member['userId']])) {
                $member['finishedTestpaperCount'] = $userTestpaperCount[$member['userId']];
            }
        }

        $members = $this->filterFields($members);
        $member = $this->appendStudentAssistant($multiClass, $members, $assistantInfos);

        return $this->makePagingObject($members, $total, $offset, $limit);
    }

    protected function appendStudentAssistant($multiClass, $members, $assistantInfos)
    {
        $assistantInfos = ArrayToolkit::index($assistantInfos, 'id');
        $assistantStudentRefs = $this->getAssistantStudentService()->findRelationsByMultiClassIdAndStudentIds($multiClass['id'], ArrayToolkit::column($members, 'userId'));
        $assistantStudentRefs = ArrayToolkit::index($assistantStudentRefs, 'studentId');
        foreach ($members as &$member) {
            if (empty($assistantStudentRefs[$member['userId']])) {
                $member['assistant'] = [];
                continue;
            }

            $assistantStudentRef = $assistantStudentRefs[$member['userId']];
            if (empty($assistantInfos[$assistantStudentRef['assistantId']])) {
                $member['assistant'] = [];
                continue;
            }

            $member['assistant'] = $assistantInfos[$assistantStudentRef['assistantId']];
        }

        return $members;
    }

    public function remove(ApiRequest $request, $id, $userId)
    {
        $multiClass = $this->getMultiClassService()->getMultiClass($id);
        if (empty($multiClass)) {
            throw MultiClassException::MULTI_CLASS_NOT_EXIST();
        }

        if (!$this->getCourseService()->hasCourseManagerRole($multiClass['courseId'], 'course_member_delete')) {
            throw CourseException::FORBIDDEN_MANAGE_COURSE();
        }

        $courseId = $multiClass['courseId'];

        $this->getCourseMemberService()->removeCourseStudent($courseId, $userId);

        return ['success' => true];
    }

    private function findUserTaskCount($courseId, $type)
    {
        $activities = $this->getActivityService()->findActivitiesByCourseIdAndType($courseId, $type, true);

        $userTaskCount = [];
        foreach ($activities as $activity) {
            if (empty($activity['ext']['answerSceneId'])) {
                continue;
            }

            $answerReports = $this->getAnswerReportService()->search(
                ['answer_scene_id' => $activity['ext']['answerSceneId']],
                [],
                0,
                $this->getAnswerReportService()->count(['answer_scene_id' => $activity['ext']['answerSceneId']])
            );

            $answerReports = ArrayToolkit::group($answerReports, 'user_id');

            foreach ($answerReports as $userId => $answerReport) {
                if (empty($userTaskCount[$userId])) {
                    $userTaskCount[$userId] = 0;
                }

                ++$userTaskCount[$userId];
            }
        }

        return $userTaskCount;
    }

    private function filterFields($members)
    {
        $results = [];
        foreach ($members as $member) {
            $filteredFields = ArrayToolkit::parts($member, [
                'id',
                'learningProgressPercent',
                'threadCount',
                'homeworkCount',
                'finishedHomeworkCount',
                'testpaperCount',
                'finishedTestpaperCount',
                'deadline',
                'createdTime',
                'assistant',
            ]);

            $filteredFields['user'] = [
                'id' => $member['userId'],
                'nickname' => $member['user']['nickname'],
                'verifiedMobile' => $member['user']['verifiedMobile'],
                'weixin' => $member['profile']['weixin'],
                'truename' => $member['profile']['truename'],
            ];

            if (!empty($member['assistant'])) {
                $filteredFields['assistant'] = [
                    'id' => $member['assistant']['id'],
                    'nickname' => $member['assistant']['nickname'],
                ];
            }

            $results[] = $filteredFields;
        }

        return $results;
    }

    /**
     * @return MemberService
     */
    private function getCourseMemberService()
    {
        return $this->service('Course:MemberService');
    }

    private function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }

    private function getAnswerReportService()
    {
        return $this->service('ItemBank:Answer:AnswerReportService');
    }

    private function getUserService()
    {
        return $this->service('User:UserService');
    }

    private function getThreadService()
    {
        return $this->service('Course:ThreadService');
    }

    private function getLearningDataAnalysisService()
    {
        return $this->service('Course:LearningDataAnalysisService');
    }

    /**
     * @return MultiClassService
     */
    private function getMultiClassService()
    {
        return $this->service('MultiClass:MultiClassService');
    }

    /**
     * @return CourseService
     */
    private function getCourseService()
    {
        return $this->service('Course:CourseService');
    }

    /**
     * @return AssistantStudentService
     */
    private function getAssistantStudentService()
    {
        return $this->service('Assistant:AssistantStudentService');
    }
}
