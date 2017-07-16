<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "fernando.madser@gmail.com";
$subject = "Mensaje de Sitio Web";

mail($to, $subject, $message, "Lo evnia: " . $name);
//mail(to, subject, message);

echo "Yor message has been sent."

?>