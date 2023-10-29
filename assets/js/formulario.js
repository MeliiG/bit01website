'use strict';

window.addEventListener('load', function() {
    const expresiones = {
        Nombres: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
        Apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        Celular: /^\d{10,13}$/
    };

    const formulario = {
        nombres: "",
        apellidos: "",
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
            const datos = {
                nombres: formulario.nombres,
                apellidos: formulario.apellidos,
                correo: formulario.correo,
                celular: formulario.celular,
                especialistas: formulario.especialistas,
                fecha: formulario.fecha
            };
    
            // Almacenar datos en localStorage como JSON
            localStorage.setItem('programacionDatos', JSON.stringify(datos));
    
            // Redirigir a la página calendario.html
            window.location.href = 'calendario.html';
        }
    };

    const manejarInput = (campo, key) => {
        campo.addEventListener('input', (e) => {
            formulario[key] = e.target.value.toLowerCase();
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
