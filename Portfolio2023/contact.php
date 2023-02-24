<?php

require 'vendor/autoload.php';

// Récupère les données du formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Configuration du serveur de messagerie SMTP
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.example.com'; // Remplacez par l'adresse de votre serveur SMTP
$mail->SMTPAuth = true;
$mail->Username = 'your-username'; // Remplacez par votre nom d'utilisateur SMTP
$mail->Password = 'your-password'; // Remplacez par votre mot de passe SMTP
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// Adresse de l'expéditeur
$mail->setFrom($email, $name);

// Adresse du destinataire
$mail->addAddress('your-email@example.com'); // Remplacez par votre adresse e-mail

// Sujet et corps du message
$mail->Subject = 'Nouveau message de formulaire de contact';
$mail->Body = "Nom : $name\nE-mail : $email\nMessage : $message";

// Envoie de l'e-mail
if ($mail->send()) {
  echo 'Le formulaire a été envoyé avec succès !';
} else {
  echo 'Une erreur est survenue : ' . $mail->ErrorInfo;
}