<?php 
    
    $name= $_POST['name'];
    $subject= $_POST['subject'];
    $mail= $_POST['email'];
    $msg= $_POST['msg'];
    $destinatario = 'info@groverllanos.com';
    $header = "Enviado desde la página de groverllanos.com";
    //$mensajeCompleto = $msg . "\nAtentamente: " . $name;
    $mensajeCompleto ="Nombre: ".$name."\nCorreo: ".$mail."\nAsunto: ".$subject."\nMensaje: ".$msg;
    $mensajeExito = "Mensaje enviado";
    mail($destinatario, $subject, $mensajeCompleto, $header);            
    echo $mensajeExito;
?>