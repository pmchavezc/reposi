function guardarNombre() {
    let nombre = document.getElementById("nameInput").value;
    if (nombre.trim() !== "") {
        document.getElementById("message").textContent = "Eres lo mejor " + nombre + " Te amo mucho❤️";
    } else {
        document.getElementById("message").textContent = "Por favor, ingresa tu nombre.";
    }
}
