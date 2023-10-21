'use strict';

window.addEventListener('load', function() {
    const expresiones = {
        Nombres: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
        Apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        Celular: /^\d{10,13}$/
    };

    const formulario = {
        nombre: "",
        apellido: "",
        correo: "",
        celular: "",
        especialistas: "",
        fecha: ""
    };

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
            validarCampo(campos.nombres, expresiones.Nombres, errores.nombres) &&
            validarCampo(campos.apellidos, expresiones.Apellidos, errores.apellidos) &&
            validarCampo(campos.correo, expresiones.Correo, errores.correo) &&
            validarCampo(campos.celular, expresiones.Celular, errores.celular) &&
            validarCampo(campos.especialistas, /^.+$/, errores.especialistas) &&
            validarCampo(campos.fecha, /^.+$/, errores.fecha)
        );
    };

    const mostrarDatos = () => {
        if (validarFormulario()) {
            const boxDashed = document.querySelector(".dashed");
            boxDashed.style.display = "block";
            const datos = Object.values(formulario);
            datos.forEach(dato => {
                const parrafo = document.createElement("p");
                parrafo.textContent = dato;
                boxDashed.appendChild(parrafo);
            });

            // Mostrar el elemento previamente oculto
            const programacionLista = document.querySelector(".box.dashed");
            programacionLista.classList.remove("oculto");
        }
    };

    const manejarInput = (campo, key) => {
        campo.addEventListener('input', (e) => {
            formulario[key] = e.target.value;
        });
    };

    Object.keys(campos).forEach(key => {
        manejarInput(campos[key], key);
    });

    const aceptar = document.getElementById('aceptar');
    aceptar.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarDatos();
    });
});
