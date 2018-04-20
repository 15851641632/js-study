<?php
/**
 * Created by PhpStorm.
 * User: zm
 * Date: 2018/4/12
 * Time: 21:01
 */

class  TalkController
{

    private static $pdo = null;

    public function __construct()
    {
//        if ($_GET['a'] != 'login' && !isset($_SESSION['nickname'])) {
//            header('Location:index.php?a=login');
//        }
        if (is_null(self::$pdo)) {
            try {
                $dsn = "mysql:host=127.0.0.1;dbname=talk";
                $pdo = new PDO($dsn, "root", "", array(PDO::ATTR_PERSISTENT => TRUE));
                $pdo->query("SET NAMES UTF8");
                self::$pdo = $pdo;
            } catch (Exception $e) {
                die("connect error");
            }
        }
    }

    public function get()
    {
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache'); // 建议不要缓存SSE数据
        header("Access-Control-Allow-Origin: http://a.com"); // 允许a.com发起的跨域请求
        //如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *
        header("Access-Control-Allow-Origin: *"); // 允许任意域名发起的跨域请求
        $sql = "select * from message order by stime asc";
        $result = self::$pdo->query($sql);
        $rows = $result->fetchAll(PDO::FETCH_ASSOC);
        foreach($rows as $k=>$v){
            $stime=date('Y-m-d',$v['stime']);
            echo "data:[$stime]<span style='color:red'>{$v['nickname']} : </span>{$v['content']}<br/>\n";

        }
        echo "\n\n";
        ob_flush();
        flush();
//        echo '<pre>';
//        print_r($rows);
//        echo '</pre>';
    }

    public function put(){
        $nickname=$_POST['nickname'];
        $content=$_POST['content'];
        $stime=time();

        $sql="INSERT INTO message (nickname,stime,content) VALUES ('{$nickname}',$stime,'{$content}')";
        self::$pdo->query($sql);
    }
    public function gettime(){

        echo time();
    }
    public function index()
    {
        include './show.html';
    }

    public function login()
    {
        if (!empty($_POST)) {
            $_SESSION['nickname'] = $_POST['nickname'];
            header("location:index.php");
        }
        include './login.html';
    }
}

session_start();
$controller = new TalkController();
$action = $_GET['a'] = isset($_GET['a']) ? $_GET['a'] : "index";
$controller->$action();
?>