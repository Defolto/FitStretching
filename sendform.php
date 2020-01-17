<?php
$name = $_POST['name']; // input name
$phone = $_POST['phone']; // input phone
$email = $_POST['email']; // input phone

$message = "Новый заказ на сайте".PHP_EOL."Имя: ".$name.PHP_EOL."Телефон: ".$phone.PHP_EOL."Email: ".$email; //Обрабатываем данные из формы, для передачи их в письме PHP_EOL - это перенос на другую стороку

// send(43716603 ,$message); // id беседы с заказчиком

function send($id , $message) {
$url = 'https://api.vk.com/method/messages.send';
$params = array(
'user_id' => $id, // Кому отправляем
'message' => $message, // Что отправляем
'access_token' => '382003f2df143c366d8138c3819cf7ea74157c53a67c4b3bcc1bd89e96a446b26af8f918366154ff7f126',
'v' => '5.62',
);

$result = file_get_contents($url, false, stream_context_create(array(
'http' => array(
'method' => 'POST',
'header' => 'Content-type: application/x-www-form-urlencoded',
'content' => http_build_query($params)
)
)));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Отправка формы</title>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top px-5 py-3">
    <a class="navbar-brand" href="#">FIT STRETCHING</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto mt-1" id="menu">
            <a class="nav-link" href="index.html">О нас</a>
            <a class="nav-link" data-toggle="modal" data-target="#exampleModal">Расписание</a>
            <a class="nav-link" href="#price">Цены</a>
            <a class="nav-link" href="#map">Контакты</a>
        </ul>
        <div class="navbar-text">
            <span class="number mr-4">+7 (900) 540-49-08</span>
            <a href="https://vk.com/fit_stretching" target="blank"><img src="img/vk.png" alt="Vk" width="30px" height="30px" class="mx-1"></a>
            <a href="https://www.instagram.com/fit_stretching/" target="blank"><img src="img/insta.png" alt="Instagram" width="30px" height="30px" class="mx-1"></a>
            <a href="https://wa.me/79005404908" target="blank"><img src="img/watsup.png" alt="Instagram" width="30px" height="30px" class="mx-1"></a>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6 justify-content-center">
            <p>Спасибо за отправку заявки <br> мы скоро свяжемся с Вами</p>
        </div>
    </div>
</div>
</div>
</div>
<script src="jquery-1.11.0.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>