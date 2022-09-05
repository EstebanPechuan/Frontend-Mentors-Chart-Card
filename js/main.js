let respuesta = window.fetch('./js/data.json')
    .then(res => res.json())
    .then(datos => imprimirDatos(datos))


function imprimirDatos(datos) {
    const graficos = document.querySelector('.container__main__graph')
    datos.map(item => {
        let div = `
            <div class="container__day">
            <div class="container__day__graph" onclick="graphActive(this)" style="height: ${item.amount * 1.2}%">
                <div class="container__day__graph--hover">$${item.amount}</div>
            </div>
                ${item.day}
            </div>
        `
        graficos.innerHTML += div
    })
    
    document.getElementsByClassName('container__day__graph')[2].classList.add('container__day__graph--active')
}

function graphActive(el) {
    const days = document.querySelectorAll('.container__day__graph')

    days.forEach(item => {
        item.classList.remove('container__day__graph--active')
    });

    el.classList.add('container__day__graph--active')
}