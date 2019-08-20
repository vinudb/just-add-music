<?php
//this file is dummy file only for test purpose. Actual php file is hosted in https://piddling-worksheets.000webhostapp.com
$_POST = json_decode(file_get_contents('php://input'), true);
$id=$_POST['id'];

$url = 'https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8';
$function = $_POST['function'];
if(strcmp($function, "comment") == 0){
    $message = $_POST['message'];
    $type = $_POST['type'];
    $data = array('id' => $id, 'type' => $type, 'message' => $message);
}
else{
    $data = array('id' => $id);
}

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }
echo($result);
?>