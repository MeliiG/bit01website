'use strict';

window.addEventListener('load', function() {
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

    const campos = {
        nombres: document.getElementById('nombres'),
        apellidos: document.getElementById('apellidos'),
        correo: document.getElementById('correo'),
        celular: document.getElementById('celular'),
        especialistas: document.getElementById('especialistas'),
        fecha: document.getElementById('fecha')
    };

    const errores = {
        nombres: document.getElementById('error1'),
        apellidos: document.getElementById('error2'),
        correo: document.getElementById('error3'),
        celular: document.getElementById('error4'),
        especialistas: document.getElementById('error5'),
        fecha: document.getElementById('error6')
    };

    const validarCampo = (campo, expresion, error) => {
        const valorCampo = campo.value.trim();
        if (!valorCampo || !expresion.test(valorCampo)) {
            error.textContent = `Campo ${campo.name} vacío o mal escrito`;
            campo.style.boxShadow = "0 0 7px red";
            return false;
        } else {
            error.textContent = "";
            campo.style.boxShadow = "0 0 7px green";
            return true;
        }
    };

    const validarFormulario = () => {
        return (
            validarCampo(campos.nombres, /^[a-zA-ZÀ-ÿ\s]{4,40}$/, errores.nombres) &&
            validarCampo(campos.apellidos, /^[a-zA-ZÀ-ÿ\s]{5,40}$/, errores.apellidos) &&
            validarCampo(campos.correo, /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, errores.correo) &&
            validarCampo(campos.celular, /^\d{10,13}$/, errores.celular) &&
            validarCampo(campos.especialistas, /^.+$/, errores.especialistas) &&
            validarCampo(campos.fecha, /^.+$/, errores.fecha)
        );
    };

    const mostrarDatos = () => {
        if (validarFormulario()) {
            const especialistaIndex = campos.especialistas.value;
            const datos = {
                nombres: campos.nombres.value,
                apellidos: campos.apellidos.value,
                correo: campos.correo.value,
                celular: campos.celular.value,
                especialista: especialistas[especialistaIndex],
                fecha: campos.fecha.value
            };
            // Convertir especialistaIndex a número antes de guardarlo en el localStorage
            datos.especialista = parseInt(especialistaIndex);
            // Almacenar datos en localStorage como JSON
            localStorage.setItem('programacionDatos', JSON.stringify(datos));

            // Mostrar datos en el div oculto
            const divOculto = document.querySelector('.box.dashed.oculto');
            divOculto.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #31a033;"></i><h3>Programacion Lista</h3>`;
            for (const [key, value] of Object.entries(datos)) {
                divOculto.innerHTML += `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</p>`;
            }

            // Mostrar el div oculto
            divOculto.classList.remove('oculto');

            // Esperar 3 segundos antes de redirigir a la página calendario.html
            setTimeout(function() {
                window.location.href = 'cronograma.html';
            }, 3000);
        }
    };

    // Manejar evento click del botón
    const aceptar = document.getElementById('aceptar');
    aceptar.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarDatos();
    });
});
