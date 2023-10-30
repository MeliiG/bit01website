'use strict';

// Esperar a que se cargue el contenido de la ventana antes de ejecutar el código
window.addEventListener('load', function() {
    
    // Obtener el elemento select de especialistas, el botón y el contenedor del cronograma del HTML
    const especialistasSelect = document.getElementById("especialistas");
    const mostrarCronogramaBtn = document.getElementById("form").querySelector("button[type='submit']");
    const cronogramaDiv = document.getElementById("cronograma");

    // Agregar un evento click al botón "Mostrar Cronograma"
    mostrarCronogramaBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón

        // Obtener el índice del especialista seleccionado y su texto
        const selectedEspecialistaIndex = parseInt(especialistasSelect.value) - 1;
        const selectedEspecialista = especialistasSelect.options[especialistasSelect.selectedIndex].text; // Obtener el texto del elemento select

        // Obtener los datos del cliente del almacenamiento local (localStorage)
        const clienteJSON = localStorage.getItem('programacionDatos');

        // Verificar si hay datos del cliente en el localStorage
        if (clienteJSON) {
            // Parsear los datos del cliente desde JSON a un objeto JavaScript
            const cliente = JSON.parse(clienteJSON);
            const especialistaIndex = cliente.especialista - 1;

            // Verificar si el especialista seleccionado coincide con el especialista del cliente
            if (selectedEspecialistaIndex === especialistaIndex) {
                // Crear una tabla HTML para mostrar los datos del cliente y el especialista
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
                        <td>${cliente.nombres} ${cliente.apellidos}</td>
                        <td>${cliente.correo}</td>
                        <td>${cliente.celular}</td>
                        <td>${cliente.fecha}</td>
                    </tr>
                `;

                // Limpiar el contenido previo del contenedor del cronograma y agregar la nueva tabla
                cronogramaDiv.innerHTML = "";
                cronogramaDiv.appendChild(table);
            } else {
                // Mostrar un mensaje si el especialista seleccionado no coincide con el cliente
                cronogramaDiv.textContent = 'No se encontraron datos del cliente para el especialista seleccionado.';
            }
        } else {
            // Mostrar un mensaje si no hay datos del cliente en el localStorage
            cronogramaDiv.textContent = 'No se encontraron datos del cliente en el almacenamiento local.';
        }
    });
});
