<?php
session_start();

// Cabeceras de seguridad y tipo de contenido
header("Content-Type: application/json; charset=UTF-8");

// Manejo de preflight CORS (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Importar clases de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

// Solo aceptar peticiones POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// Leer el cuerpo de la petición JSON
$input = json_decode(file_get_contents('php://input'), true);

// ==========================================
// 1. Protección Anti-Spam Básica
// ==========================================
if (!empty($input['_honeypot'])) {
    echo json_encode(["success" => true, "message" => "Correo enviado"]);
    exit;
}

// Rate limiting sencillo (1 envío por minuto por sesión)
if (isset($_SESSION['last_submit']) && (time() - $_SESSION['last_submit'] < 60)) {
    http_response_code(429); // Too Many Requests
    echo json_encode(["success" => false, "message" => "Por favor, espera un minuto antes de enviar otro mensaje."]);
    exit;
}
$_SESSION['last_submit'] = time();

// ==========================================
// 2. Extracción y Sanitización de datos
// ==========================================
$nombre = htmlspecialchars(trim($input['nombre'] ?? ''), ENT_QUOTES, 'UTF-8');
$empresa = htmlspecialchars(trim($input['empresa'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars(trim($input['telefono'] ?? ''), ENT_QUOTES, 'UTF-8');
$tipoServicio = htmlspecialchars(trim($input['tipoServicio'] ?? ''), ENT_QUOTES, 'UTF-8');
$descripcion = htmlspecialchars(trim($input['descripcion'] ?? ''), ENT_QUOTES, 'UTF-8');
$esUrgente = $input['urgente'] ?? false;

// Validar campos obligatorios
if (!$nombre || !$email || !$tipoServicio || !$descripcion) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Faltan datos obligatorios"]);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Email no válido"]);
    exit;
}

// Limitar el tamaño del mensaje a 2000 caracteres
if (strlen($descripcion) > 2000) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El mensaje es demasiado largo. Máximo 2000 caracteres."]);
    exit;
}

// ==========================================
// 3. Configuración SMTP y Cuentas
// ==========================================
$email_notificaciones = "ingenieria@efinersas.com"; // Cuenta dedicada para envíos

// Cargar contraseña desde un archivo seguro fuera de public_html
// Devuelve la contraseña que esté en config.php
$password_smtp = require __DIR__ . '/../config.php';

$email_comercial = "ingenieria@efinersas.com"; // A dónde llega la notificación

// Crear instancias separadas de PHPMailer para evitar cruce de datos
$mailInterno = new PHPMailer(true);
$mailCliente = new PHPMailer(true);

try {
    // Configuración compartida del servidor SMTP
    $smtpHost = 'smtp.hostinger.com';
    $smtpAuth = true;
    $smtpUsername = $email_notificaciones;
    $smtpPassword = $password_smtp;
    $smtpSecure = PHPMailer::ENCRYPTION_SMTPS;
    $smtpPort = 465;

    // ==========================================
    // 4. Enviar correo al equipo de EFINER
    // ==========================================
    $mailInterno->isSMTP();
    $mailInterno->Host = $smtpHost;
    $mailInterno->SMTPAuth = $smtpAuth;
    $mailInterno->Username = $smtpUsername;
    $mailInterno->Password = $smtpPassword;
    $mailInterno->SMTPSecure = $smtpSecure;
    $mailInterno->Port = $smtpPort;
    $mailInterno->CharSet = 'UTF-8';

    $mailInterno->setFrom($email_notificaciones, 'Web EFINER');
    $mailInterno->addAddress($email_comercial, 'Equipo Comercial');
    $mailInterno->addReplyTo($email, $nombre); // Para poder responder directamente al cliente

    $asunto_efiner = "Nuevo Lead Web | $tipoServicio | $nombre";
    if ($esUrgente) {
        $asunto_efiner = "🚨 URGENTE | Nuevo Lead Web | $tipoServicio | $nombre";
    }

    $mailInterno->isHTML(false);
    $mailInterno->Subject = $asunto_efiner;

    $mensaje_efiner = "Has recibido una nueva solicitud desde la página web.\n\n";
    $mensaje_efiner .= "DATOS DEL CLIENTE:\n";
    $mensaje_efiner .= "Nombre: $nombre\n";
    $mensaje_efiner .= "Empresa: " . ($empresa ? $empresa : "No especificada") . "\n";
    $mensaje_efiner .= "Email: $email\n";
    $mensaje_efiner .= "Teléfono: " . ($telefono ? $telefono : "No especificado") . "\n";
    $mensaje_efiner .= "Servicio de interés: $tipoServicio\n";
    $mensaje_efiner .= "Urgente: " . ($esUrgente ? "SÍ" : "No") . "\n\n";
    $mensaje_efiner .= "MENSAJE / DESCRIPCIÓN:\n";
    $mensaje_efiner .= "$descripcion\n";

    $mailInterno->Body = $mensaje_efiner;
    $mailInterno->send();

    // ==========================================
    // 5. Enviar correo automático al CLIENTE
    // ==========================================
    $mailCliente->isSMTP();
    $mailCliente->Host = $smtpHost;
    $mailCliente->SMTPAuth = $smtpAuth;
    $mailCliente->Username = $smtpUsername;
    $mailCliente->Password = $smtpPassword;
    $mailCliente->SMTPSecure = $smtpSecure;
    $mailCliente->Port = $smtpPort;
    $mailCliente->CharSet = 'UTF-8';

    $mailCliente->setFrom($email_notificaciones, 'EFINER S.A.S.');
    $mailCliente->addAddress($email, $nombre);
    $mailCliente->addReplyTo($email_comercial, 'Comercial EFINER');

    $mailCliente->Subject = "EFINER S.A.S - Hemos recibido tu solicitud";

    $mensaje_cliente = "Hola $nombre,\n\n";
    $mensaje_cliente .= "Gracias por ponerte en contacto con EFINER S.A.S. Hemos recibido tu solicitud sobre '$tipoServicio' correctamente.\n\n";
    if ($esUrgente) {
        $mensaje_cliente .= "Hemos notado que has marcado tu solicitud como URGENTE. Nuestro equipo le dará prioridad y nos comunicaremos contigo lo más pronto posible.\n\n";
    } else {
        $mensaje_cliente .= "Nuestro equipo comercial revisará tus requerimientos y nos pondremos en contacto contigo en un plazo máximo de 24 horas hábiles.\n\n";
    }
    $mensaje_cliente .= "Si necesitas atención inmediata, puedes escribirnos a nuestro WhatsApp: +57 312 293 2695.\n\n";
    $mensaje_cliente .= "Atentamente,\n";
    $mensaje_cliente .= "El equipo de EFINER S.A.S.\n";
    $mensaje_cliente .= "www.efinersas.com\n";

    $mailCliente->Body = $mensaje_cliente;
    $mailCliente->send();

    echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);

} catch (Exception $e) {
    // Registrar el error internamente sin mostrárselo al usuario
    error_log("Error al enviar correo desde formulario web: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error en el servidor al enviar el correo."]);
}
?>