<?php

namespace Biz\Util;

use AppBundle\Common\ArrayToolkit;
use Biz\CloudPlatform\CloudAPIFactory;

class EdusohoLiveClient
{
    const LIVE_STATUS_UNSTART = 'unstart';
    const LIVE_STATUS_LIVING = 'live';
    const LIVE_STATUS_PAUSE = 'pause';
    const LIVE_STATUS_CLOSED = 'closed';
    const OLD_ES_LIVE_PROVIDER = 8;
    const NEW_ES_LIVE_PROVIDER = 9;
    const SELF_ES_LIVE_PROVIDER = 13;
    const LIVE_ROOM_LARGE = 'large';
    const LIVE_ROOM_SMALL = 'small';

    const LIVE_REPLAY_STATUS_UNSTART = 'unstart';

    const LIVE_REPLAY_STATUS_GENERATING = 'generating';

    const LIVE_REPLAY_STATUS_FINISHED = 'finished';

    const LIVE_REPLAY_STATUS_NONE = 'finished';

    const LIVE_REPLAY_STATUS_ERROR = 'error';

    private $cloudApi;

    /**
     * 创建直播.
     *
     * @param array $args 直播参数，支持的参数有：title, speaker, startTime, endTime, authUrl, jumpUrl, errorJumpUrl, roomType
     *
     * @return [type] [description]
     */
    public function createLive(array $args)
    {
        return $this->createCloudApi('root')->post('/lives', $args);
    }

    public function batchCreateLiveGroups(array $args)
    {
        return $this->createCloudApi('root')->post('/lives/'.$args['liveId'].'/groups', $args);
    }

    public function createLiveGroup(array $args)
    {
        return $this->createCloudApi('root')->post('/lives/'.$args['liveId'].'/one_groups', $args);
    }

    public function createLiveCourseware(array $args)
    {
        return $this->createCloudApi('root')->post('/lives/'.$args['liveId'].'/courseware', $args['resources']);
    }

    public function deleteLiveCourseware(array $args)
    {
        return $this->createCloudApi('root')->delete('/lives/'.$args['liveId'].'/courseware/'.$args['coursewareId']);
    }

    public function updateLive(array $args)
    {
        return $this->createCloudApi('root')->patch('/lives/'.$args['liveId'], $args);
    }

    public function getCapacity()
    {
        $args = [
            'timestamp' => time().'',
        ];

        return $this->createCloudApi('leaf')->get('/lives/capacity', $args);
    }

    public function getRoomUrl($args, $server = 'leaf')
    {
        return $this->createCloudApi($server)->post('/lives/'.$args['liveId'].'/room_url', $args);
    }

    public function deleteLive($liveId)
    {
        $args = [
            'liveId' => $liveId,
        ];

        return $this->createCloudApi('root')->delete('/lives/'.$liveId, $args);
    }

    public function getMaxOnline($liveId)
    {
        $args = [
            'liveId' => $liveId,
        ];

        return $this->createCloudApi('leaf')->get('/lives/'.$liveId.'/max_online', $args);
    }

    public function entryLive($args)
    {
        return $this->createCloudApi('leaf')->post('/lives/'.$args['liveId'].'/entry_room', $args);
    }

    public function entryReplay($args, $server = 'leaf')
    {
        return $this->createCloudApi($server)->post('/lives/'.$args['liveId'].'/record_url', $args);
    }

    public function createReplayList($liveId, $title, $provider)
    {
        $args = [
            'liveId' => $liveId,
            'title' => $title,
            'provider' => $provider,
        ];

        return $this->createCloudApi('root')->post('/lives/'.$liveId.'/records', $args);
    }

    public function isAvailableRecord($liveId, $server = 'root')
    {
        $args = [
            'liveId' => $liveId,
        ];

        $response = $this->createCloudApi($server)->get('/lives/'.$liveId.'/available_record', $args);

        return isset($response['success']) ? true : false;
    }

    public function setLiveLogo($logoData)
    {
        $filter = [
            'logoPcUrl',
            'logoClientUrl',
            'logoGotoUrl',
        ];

        $logoData = ArrayToolkit::parts($logoData, $filter);

        return $this->createCloudApi('root')->post('/liveaccount/logo/set', $logoData);
    }

    /**
     * check live status
     *
     * @param [type] $lives array(liveProvider => array(liveId,liveId,...),...)
     *
     * @return array array(liveId => 'status',...) status：unstart|live|pause|closed
     */
    public function checkLiveStatus($lives)
    {
        $args = ['liveIds' => $lives];

        return $this->createCloudApi('leaf')->get('/lives/rooms_status', $args);
    }

    public function getLiveAccount()
    {
        return $this->createCloudApi('root')->get('/lives/account');
    }

    public function getLiveOverview()
    {
        return $this->createCloudApi('root')->get('/me/live/overview');
    }

    public static function isEsLive($liveProvider)
    {
        return in_array($liveProvider, [self::OLD_ES_LIVE_PROVIDER, self::NEW_ES_LIVE_PROVIDER]);
    }

    public function getLiveRoomCheckinList($liveId)
    {
        return $this->createCloudApi('leaf')->get("/lives/{$liveId}/checkin_list");
    }

    public function getLiveRoomHistory($liveId)
    {
        return $this->createCloudApi('leaf')->get("/lives/{$liveId}/history");
    }

    public function getLiveRoomMonitors($ids)
    {
        return $this->createCloudApi('root')->get('/liveCloud/room/monitors', ['ids' => $ids]);
    }

    public function uploadCallbackUrl($url)
    {
        return $this->createCloudApi('root')->post('/liveCloud/callbackUrl/update', ['callbackUrl' => $url]);
    }

    /**
     * @param $ids
     *
     * @return mixed|string[]
     *                        仅自研直播，不可扩充
     */
    public function batchGetReplayInfosForSelfLive($ids)
    {
        return $this->createCloudApi('root')->get('/liveCloud/room/replay/infos', ['ids' => implode(',', $ids)]);
    }

    /**
     * @param $liveId
     * @param $userId
     *
     * @return mixed|string[]
     *                        仅自研直播，不可扩充
     */
    public function downloadReplayForSelfLive($liveId, $userId)
    {
        return $this->createCloudApi('root')->get("/liveCloud/room/{$liveId}/replay/download", ['userId' => $userId]);
    }

    protected function createCloudApi($server)
    {
        if (empty($this->cloudApi[$server])) {
            $this->cloudApi[$server] = CloudAPIFactory::create($server);
        }

        return $this->cloudApi[$server];
    }

    /**
     * 仅给单元测试mock用。
     */
    public function setCloudApi($cloudApi, $server)
    {
        $this->cloudApi[$server] = $cloudApi;
    }
}
