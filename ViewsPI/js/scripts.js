const claseSelect = document.getElementById("clase");
const tipoSelect = document.getElementById("tipo");
const form = document.querySelector("form");

// Define un objeto que mapea clases a tipos
const tiposPorClase = {
    Guerrero: ["Tanque", "Armas"],
    Mago: ["Fuego", "Hielo"],
    Pícaro: ["Veneno", "Machete"]
};

// Función para actualizar las opciones del select de tipo
function actualizarTipos() {
    const claseSeleccionada = claseSelect.value;
    tipoSelect.innerHTML = ""; // Borra todas las opciones actuales

    // Agrega las opciones correspondientes a la clase seleccionada
    const tipos = tiposPorClase[claseSeleccionada] || [];
    tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo;
        tipoSelect.appendChild(option);
    });

    // Limpiar mensaje de error si lo hubiera
    const errorMensaje = document.getElementById("error-mensaje");
    if (errorMensaje) {
        errorMensaje.remove();
    }
}

// Agrega un listener al select de clase para actualizar los tipos cuando cambie
claseSelect.addEventListener("change", actualizarTipos);

// Llama a la función inicialmente para cargar los tipos basados en la opción inicial
actualizarTipos();

// Agrega un listener al formulario para verificar la combinación de clase y tipo antes de enviar
form.addEventListener("submit", function (event) {
    const claseSeleccionada = claseSelect.value;
    const tipoSeleccionado = tipoSelect.value;

    // Define las combinaciones inválidas
    const combinacionesInvalidas = {
        Guerrero: ["Fuego", "Hielo", "Veneno", "Machete"],
        Mago: ["Tanque", "Armas", "Veneno", "Machete"],
        Pícaro: ["Tanque", "Armas", "Fuego", "Hielo"]
    };

    // Verifica si la combinación es inválida y muestra un mensaje de error si es así
    if (combinacionesInvalidas[claseSeleccionada] && combinacionesInvalidas[claseSeleccionada].includes(tipoSeleccionado)) {
        event.preventDefault(); // Evita que se envíe el formulario
        const errorMensaje = document.createElement("p");
        errorMensaje.id = "error-mensaje";
        errorMensaje.textContent = "Combinación de clase y tipo inválida.";
        errorMensaje.style.color = "red";
        tipoSelect.insertAdjacentElement("afterend", errorMensaje);
    }
});