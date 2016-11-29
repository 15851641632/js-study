<?php
/**
 * Created by PhpStorm.
 * User: zm
 * Date: 2016/10/23
 * Time: 23:33
 */

$data = $_GET;
$arr=array('aaa','bbb');
if(in_array($_GET['username'],$arr)){
//判断数据中是否已经存在这个username,如果存在就返回该用户已经注册过了，如果不存在就返回可以注册
    $re=array('tip'=>'该用户名已被注册');
}else{
    $arr[]=$_GET['username'];
    $re=array('tip'=>'该用户名可以注册');
}

echo json_encode($re);

