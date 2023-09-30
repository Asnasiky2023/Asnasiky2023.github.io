<!DOCTYPE html>
<html>

<head>
    <title>Contacto</title>
</head>
<body>
    <h1>Contacto</h1>
    <form id="contactForm">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        
        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea><br><br>
        
        <input type="submit" value="Enviar">
    </form>

    <div id="respuesta"></div>

    <script>
       // JavaScript para manejar el formulario
    window.addEventListener("load", function() {
        var form = document.getElementById("contactForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Aquí puedes agregar tu lógica para procesar el formulario, como enviarlo a un servidor.
            // Por ejemplo, aquí simulamos un envío exitoso:
            setTimeout(function() {
                alert("Mensaje enviado con éxito");
                form.reset(); // Limpia el formulario después de mostrar el mensaje
            }, 1000); // Mostrar el mensaje durante 1 segundo (ajusta el tiempo según lo necesario)
        });
    });
    </script>
</body>
</html>