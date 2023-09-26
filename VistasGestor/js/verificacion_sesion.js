function validarNombre() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value;

    // Expresión regular para validar que el nombre no contenga caracteres especiales
    var regex = /^[A-Za-z\s]+$/;

    var mensajeError = document.getElementById('mensajeError'); // Elemento para mostrar el mensaje de error

    if (!regex.test(nombre)) {
        mensajeError.textContent = "El nombre no puede contener caracteres especiales.";
        return false; // Evita el envío del formulario
    } else {
        mensajeError.textContent = ""; // Borra el mensaje de error si el nombre es válido
    }

    return true; // Permite el envío del formulario si el nombre es válido
}



