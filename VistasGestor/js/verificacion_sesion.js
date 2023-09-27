function validar() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value;

    var contrasenaInput = document.getElementById('contrasena');
    var contrasena = contrasenaInput.value;

    var regex = /^[A-Za-z\s]+$/;
    var mensajeError = document.getElementById('mensajeError');

    var nombreValido = regex.test(nombre);
    var contrasenaValida = contrasena.length >= 8;

    if (!nombreValido) {
        mensajeError.textContent = "El nombre no puede contener caracteres especiales.";
        return false;
    }

    if (!contrasenaValida) {
        mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    }

    return true;
}