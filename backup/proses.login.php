<?php
session_start();
$_SESSION['u'] = $_POST['username'];
$data = array();
$data['u'] = $_SESSION['u'];
if($_SESSION['u']){
	$data['is'] = '1';
	header('content-type:application/json');
	echo json_encode($data);
}
	
//header("location:user.php");
?>