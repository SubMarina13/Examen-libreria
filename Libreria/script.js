// Validación del formulario
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const password = document.getElementById('password').value;
    const interes = document.getElementById('interes').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const terminos = document.getElementById('terminos').checked;

    if (!/^\d{3} \d{2} \d{2} \d{2}$/.test(telefono)) {
        alert("El teléfono debe tener el formato xxx xx xx xx");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    if (!terminos) {
        alert("Debes aceptar los términos de protección de datos");
        return;
    }

    alert("Registro exitoso. Ahora selecciona un libro.");
    document.getElementById('seccionLibros').style.display = 'block';
});

// Cálculo del precio con IVA
function calcularTotal() {
    const precio = parseFloat(document.getElementById('precio').value);
    const iva = parseFloat(document.getElementById('iva').value);

    if (isNaN(precio)) {
        alert("Por favor, ingresa un precio válido.");
        return;
    }

    const total = precio * (1 + iva);
    document.getElementById('resultado').value = total.toFixed(2) + " €";
}
