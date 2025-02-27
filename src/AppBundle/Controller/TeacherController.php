<?php

namespace AppBundle\Controller;

use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\Paginator;
use Symfony\Component\HttpFoundation\Request;

class TeacherController extends BaseController
{
    public function indexAction(Request $request)
    {
        $conditions = [
            'roles' => '|ROLE_TEACHER|',
            'locked' => 0,
        ];

        $paginator = new Paginator(
            $this->get('request'),
            $this->getUserService()->countUsers($conditions),
            20
        );
        $teachersCount = $this->getUserService()->countUsers($conditions);
        $teachers = $this->getUserService()->searchUsers(
            $conditions,
            [
                'promoted' => 'DESC',
                'promotedSeq' => 'ASC',
                'promotedTime' => 'DESC',
                'createdTime' => 'DESC',
            ],
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $user = $this->getCurrentUser();
        $teacherIds = ArrayToolkit::column($teachers, 'id');
        $profiles = $this->getUserService()->findUserProfilesByIds($teacherIds);
        $myFollowings = $this->getUserService()->filterFollowingIds($user['id'], $teacherIds);

        return $this->render('teacher/index.html.twig', [
            'teachers' => $teachers,
            'profiles' => $profiles,
            'paginator' => $paginator,
            'Myfollowings' => $myFollowings,
        ]);
    }

    public function searchAction($request, $keyword)
    {
        $conditions = [
            'roles' => '|ROLE_TEACHER|',
            'locked' => 0,
        ];

        if (!empty($keyword)) {
            $conditions['nickname'] = $keyword;
        }

        $teachers = $this->getUserService()->searchUsers($conditions, [
            'nickname' => 'ASC',
        ], 0, 1000);

        return $this->createJsonResponse($teachers);
    }

    public function qualificationAction()
    {
        return $this->render('teacher/qualification.html.twig');
    }
}
