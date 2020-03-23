<?php

$userName =$_POST['userName'];
$userPhone =$_POST['userPhone'];
$userEmail =$_POST['userEmail'];
$userQuestion =$_POST['userQuestion'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'repdesignmailer@gmail.com';                     // SMTP username
    $mail->Password   = 'MailerBOt';                               // SMTP password
    $mail->SMTPSecure = "SSL";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('repdesignmailer@gmail.com', 'Игорь');
    $mail->addAddress('RadroachJohny@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Имя пользователя: ${userName}, Телефон: ${userPhone}, Почта: ${userEmail}, Мой вопрос: ${userQuestion}";

    if ($mail->send()){
      echo "ok";
    }else {
      echo "Письмо не отправленою Код ошибки: {$mail->ErrorInfo}";
    };
    
    
   
} catch (Exception $e) {
    echo "Письмо не отправленою Код ошибки: {$mail->ErrorInfo}";
}



