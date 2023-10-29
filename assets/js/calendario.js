const especialistas = [
    "Luis Alvarez",
    "Gisell Dominguez",
    "Jessica Maria Valbuena",
    "Isabella Torrez",
    "Oscar Arturo Gonzales",
    "Gustavo Alarcon vanegas",
    "Maribel Rosado Fernandez",
    "Isabella Torrez"
];

const clienteJSON = localStorage.getItem('programacionDatos');
const cliente = clienteJSON ? JSON.parse(clienteJSON) : null;

const form = document.getElementById("form");
const especialistasSelect = document.getElementById("especialistas");
const cronogramaDiv = document.getElementById("cronograma");

// Llenar el select con los especialistas
especialistas.forEach((especialista, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${index + 1} - ${especialista}`;
    especialistasSelect.appendChild(option);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedEspecialistaIndex = especialistasSelect.value;
    const selectedEspecialista = especialistas[selectedEspecialistaIndex];

    // Mostrar datos del cliente en la tabla
    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Especialista</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Fecha</th>
            
        </tr>
        <tr>
            <td>${selectedEspecialista}</td>
            <td>${cliente ? cliente.nombres + ' ' + cliente.apellidos : 'N/A'}</td>
            <td>${cliente ? cliente.correo : 'N/A'}</td>
            <td>${cliente ? cliente.celular : 'N/A'}</td>
            <td>${cliente ? cliente.fecha : 'N/A'}</td>
        </tr>
     
    `;

    cronogramaDiv.innerHTML = "";
    cronogramaDiv.appendChild(table);
});

