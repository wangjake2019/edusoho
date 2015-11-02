<?php

namespace Topxia\Service\SensitiveWord\Dao;

interface RecentPostNumDao
{
    public function getRecentPostNumByIpAndType($ip, $type);

    public function deleteRecentPostNum($id);

    public function getRecentPostNum($id);

    public function addRecentPostNum($fields);

    public function waveRecentPostNum($id, $field, $diff);
}