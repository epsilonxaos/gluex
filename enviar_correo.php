<?php


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

// Usar la función para cargar las variables de entorno


if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		loadEnv(__DIR__ . '/.env');

		$mailFrom = getenv('MAIL_FROM');

		$contact = $_POST['contact'];
		$project = $_POST['project'];
		$looking = $_POST['looking'];
		$other = $_POST['other'] ?? null;
		$share = $_POST['share'];

		$to = $email;
		$subject = "Partnerships, Integrations & Collaborations";
		$headers = "From: $mailFrom";

		$message = "A person left their information about Partnerships, Integrations & Collaborations: \n\n";
		$message .= "Contact: $contact \n";
		$message .= "Project: $project \n";
		$message .= "Looking for: $looking \n";
		if ($other) $message .= "Write your answer about what you are looking for: $other \n";
		$message .= "Share more context: $share \n";

		if (mail($to, $subject, $message, $headers)) {
			http_response_code(200);
			echo json_encode(["message" => "Correo enviado exitosamente!"]);
		} else {
			http_response_code(500);
			echo json_encode(["message" => "Error al enviar el correo."]);
		}
	} else {
		http_response_code(400);
		echo json_encode(["message" => "Correo electrónico no válido.", "email" => $email]);
	}
} else {
	http_response_code(405); // Method Not Allowed
	echo json_encode(["message" => "Solicitud no válida."]);
}
