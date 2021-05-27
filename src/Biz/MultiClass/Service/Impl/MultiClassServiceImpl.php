<?php

namespace Biz\MultiClass\Service\Impl;

use Biz\BaseService;
use Biz\Course\CourseException;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\MemberService;
use Biz\MultiClass\Dao\MultiClassDao;
use Biz\MultiClass\MultiClassException;
use Biz\MultiClass\Service\MultiClassProductService;
use Biz\MultiClass\Service\MultiClassService;
use Biz\System\Service\LogService;

class MultiClassServiceImpl extends BaseService implements MultiClassService
{
    public function findByProductIds(array $productIds)
    {
        return $this->getMultiClassDao()->findByProductIds($productIds);
    }

    public function findByProductId($productId)
    {
        return $this->getMultiClassDao()->findByProductId($productId);
    }

    public function getMultiClass($id)
    {
        return $this->getMultiClassDao()->get($id);
    }

    public function countMultiClassCopyEd($id)
    {
        return $this->getMultiClassDao()->count(['copyId' => $id]);
    }

    public function createMultiClass($fields)
    {
        $teacherId = [
            [
                'id' => $fields['teacherId'],
                'isVisable' => 1,
            ],
        ];
        $assistantIds = $fields['assistantIds'];
        $fields = $this->filterMultiClassFields($fields);

        $this->beginTransaction();
        try {
            $multiClass = $this->getMultiClassDao()->create($fields);
            $this->getCourseMemberService()->setCourseTeachers($fields['courseId'], $teacherId, $multiClass['id']);
            $this->getCourseMemberService()->setCourseAssistants($fields['courseId'], $assistantIds, $multiClass['id']);

            $this->getLogService()->info(
                'multi_class',
                'create_multi_class',
                "创建班课#{$multiClass['id']}《{$fields['title']}》",
                $fields
            );

            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw $e;
        }

        return $multiClass;
    }

    public function updateMultiClass($id, $fields)
    {
        $multiClassExisted = $this->getMultiClassDao()->get($id);
        if (empty($multiClassExisted)) {
            throw MultiClassException::MULTI_CLASS_NOT_EXIST();
        }

        $teacherId = [
            [
                'id' => $fields['teacherId'],
                'isVisable' => 1,
            ],
        ];
        $assistantIds = $fields['assistantIds'];

        $fields = $this->filterMultiClassFields($fields);

        $this->beginTransaction();
        try {
            $multiClass = $this->getMultiClassDao()->update($id, $fields);
            $this->getCourseMemberService()->setCourseTeachers($fields['courseId'], $teacherId, $multiClass['id']);
            $this->getCourseMemberService()->setCourseAssistants($fields['courseId'], $assistantIds, $multiClass['id']);
            $this->getLogService()->info(
                'multi_class',
                'update_multi_class',
                "更新班课#{$multiClass['id']}《{$fields['title']}》",
                $fields
            );

            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw $e;
        }

        return $multiClass;
    }

    public function deleteMultiClass($id)
    {
        $multiClassExisted = $this->getMultiClassDao()->get($id);
        if (empty($multiClassExisted)) {
            throw MultiClassException::MULTI_CLASS_NOT_EXIST();
        }

        $this->beginTransaction();
        try {
            $this->getCourseMemberService()->releaseMultiClassMember($multiClassExisted['courseId'], $multiClassExisted['id']);
            $this->getMultiClassDao()->delete($id);

            $this->getLogService()->info(
                'multi_class',
                'delete_multi_class',
                "删除班课#{$id}《{$multiClassExisted['title']}》"
            );

            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw $e;
        }
    }

    public function searchMultiClass($conditions, $orderBys, $start, $limit)
    {
        $conditions = $this->filterConditions($conditions);

        return $this->getMultiClassDao()->searchMultiClassJoinCourse($conditions, $orderBys, $start, $limit);
    }

    public function countMultiClass($conditions)
    {
        $conditions = $this->filterConditions($conditions);

        return $this->getMultiClassDao()->count($conditions);
    }

    public function cloneMultiClass($id)
    {
        $multiClass = $this->getMultiClassDao()->get($id);
        $number = $this->countMultiClassCopyEd($id);
        $defaultProduct = $this->getMultiClassProductService()->getDefaultProduct();
        $number = 0 == $number ? '' : $number;
        $newMultiClass = $this->biz['multi_class_copy']->copy($multiClass, [
            'number' => $number,
            'productId' => $defaultProduct ? $defaultProduct['id'] : 1,
            ]);
        $newMultiClass['number'] = $number;

        $this->getLogService()->info(
            'multi_class',
            'clone_multi_class',
            "复制班课 - {$multiClass['title']}(#{$id}) 成功",
            ['multiClassId' => $id]);

        return  $newMultiClass;
    }

    public function getMultiClassByTitle($title)
    {
        return $this->getMultiClassDao()->getByTitle($title);
    }

    private function filterConditions($conditions)
    {
        if (empty($conditions)) {
            return [];
        }
        if (isset($conditions['ids']) && empty($conditions['ids'])) {
            $conditions['ids'] = [-1];
        }
        if (isset($conditions['courseIds']) && empty($conditions['courseIds'])) {
            $conditions['courseIds'] = [-1];
        }

        return $conditions;
    }

    private function filterMultiClassFields($fields)
    {
        if (isset($fields['teacherId'])) {
            unset($fields['teacherId']);
        }
        if (isset($fields['assistantIds'])) {
            unset($fields['assistantIds']);
        }

        if (isset($fields['courseId']) && !empty($fields['courseId'])) {
            $course = $this->getCourseService()->getCourse($fields['courseId']);
            if (empty($course)) {
                throw CourseException::NOTFOUND_COURSE();
            }
            $courseExisted = $this->getMultiClassDao()->getByCourseId($fields['courseId']);

            if ($courseExisted) {
                throw MultiClassException::MULTI_CLASS_COURSE_ALREADY();
            }
        }
        if (isset($fields['productId']) && !empty($fields['productId'])) {
            $course = $this->getMultiClassProductService()->getProduct($fields['productId']);
            if (empty($course)) {
                throw MultiClassException::PRODUCT_NOT_FOUND();
            }
        }

        return $fields;
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    /**
     * @return MultiClassProductService
     */
    protected function getMultiClassProductService()
    {
        return $this->createService('MultiClass:MultiClassProductService');
    }

    /**
     * @return MemberService
     */
    protected function getCourseMemberService()
    {
        return $this->createService('Course:MemberService');
    }

    /**
     * @return LogService
     */
    protected function getLogService()
    {
        return $this->createService('System:LogService');
    }

    /**
     * @return MultiClassDao
     */
    protected function getMultiClassDao()
    {
        return $this->createDao('MultiClass:MultiClassDao');
    }
}
