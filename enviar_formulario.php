<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

</head>
<body>
    
</body>
</html>

<?php
// Recoger los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$pais = $_POST['pais'];
$estado = $_POST['estado'];
$mensaje = $_POST['mensaje'];

// Dirección de correo electrónico a donde se enviará el formulario
$destinatario = 'info@dbdbusiness.com';

// Asunto del correo electrónico
$asunto = 'Mensaje de contacto desde el formulario';

// Construir el cuerpo del correo electrónico
$cuerpoMensaje = "Nombre: $nombre\n";
$cuerpoMensaje .= "Correo Electrónico: $email\n";
$cuerpoMensaje .= "Teléfono: $telefono\n";
$cuerpoMensaje .= "País: $pais\n";
$cuerpoMensaje .= "Estado/Ciudad: $estado\n\n";
$cuerpoMensaje .= "Mensaje:\n$mensaje\n";

// Cabeceras del correo electrónico
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Enviar el correo electrónico
$enviado = mail($destinatario, $asunto, $cuerpoMensaje, $headers);

// Verificar si se envió correctamente
if ($enviado) {
    // Mostrar una alerta usando SweetAlert
    echo '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>';
    echo '<script>';
    echo 'Swal.fire({
                title: "¡Registro exitoso!",
                text: "Tu mensaje ha sido enviado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(function() {
                window.location.href = "index.php"; // Redirigir a la página principal
            });';
    echo '</script>';
} else {
    // Manejar el caso en que el envío falló
    echo '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>';
    echo '<script>';
    echo 'Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al enviar tu mensaje.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });';
    echo '</script>';
}
?>