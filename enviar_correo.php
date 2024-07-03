<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

function loadEnv($path)
{
	if (!file_exists($path)) {
		throw new Exception("El archivo .env no existe: $path");
	}

	$lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
	foreach ($lines as $line) {
		if (strpos(trim($line), '#') === 0) {
			continue;
		}

		list($name, $value) = explode('=', $line, 2);
		$name = trim($name);
		$value = trim($value);

		if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
			putenv("$name=$value");
			$_ENV[$name] = $value;
			$_SERVER[$name] = $value;
		}
	}
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		loadEnv(__DIR__ . '/.env');

		try {
			$mail = new PHPMailer();

			$mailFrom = getenv('MAIL_FROM');

			$contact = $_POST['contact'];
			$project = $_POST['project'];
			$looking = $_POST['looking'];
			$other = $_POST['other'] ?? null;
			$share = $_POST['share'];

			//Server settings
			$mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
			$mail->isSMTP();                                            //Send using SMTP
			$mail->Host       = getenv('MAIL_HOST');                    //Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
			$mail->Username   = getenv('MAIL_USERNAME');                //SMTP username
			$mail->Password   = getenv('MAIL_PASSWORD');                //SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
			$mail->Port       = getenv('MAIL_PORT');                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

			//Recipients
			$mail->setFrom(getenv('MAIL_FROM_ADDRESS'), getenv('MAIL_FROM_NAME'));
			$mail->addAddress(getenv('MAIL_TO_ADDRESS'));

			//Content
			$mail->isHTML(true);                                        //Set email format to HTML
			$mail->Subject = "Partnerships, Integrations & Collaborations";

			$message = "A person left their information about Partnerships, Integrations & Collaborations: <br /><br />";
			$message .= "Contact: $contact <br />";
			$message .= "Project: $project <br />";
			$message .= "Looking for: $looking <br />";
			if ($other) $message .= "Write your answer about what you are looking for: $other <br />";
			$message .= "Share more context: $share <br />";

			$mail->Body = $message;

			if ($mail->send()) {
				http_response_code(200);
				echo json_encode(["message" => "Correo enviado exitosamente!"]);
			} else throw new Exception($mail->ErrorInfo);
		} catch (Exception $e) {
			http_response_code(500);
			echo json_encode(["message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
		}
	} else {
		http_response_code(400);
		echo json_encode(["message" => "Correo electrónico no válido.", "email" => $email]);
	}
} else {
	http_response_code(405); // Method Not Allowed
	echo json_encode(["message" => "Solicitud no válida."]);
}
