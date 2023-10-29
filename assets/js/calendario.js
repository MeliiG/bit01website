document.addEventListener('DOMContentLoaded', function () {
    const diasMes = document.querySelector('.dias-mes');

    // Obtén el primer día del mes actual y el último día del mes actual
    const primerDia = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
    const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

    // Rellena los días vacíos al principio del mes
    for (let i = 0; i < primerDia; i++) {
        const diaVacio = document.createElement('div');
        diaVacio.classList.add('dia', 'vacio');
        diasMes.appendChild(diaVacio);
    }

    // Rellena los días del mes
    for (let i = 1; i <= ultimoDia; i++) {
        const dia = document.createElement('div');
        dia.classList.add('dia');
        dia.textContent = i;
        diasMes.appendChild(dia);
    }
});
