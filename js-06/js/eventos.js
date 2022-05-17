// const saludar = () => console.log('Hola');

let btnClick = document.querySelector('#btn-click');

// btnClick.onmouseover = saludar;

btnClick.addEventListener('click', () => console.log('Click'));
// btnClick.addEventListener('contextmenu', () => console.log('Menu'));

let enlace = document.querySelector('a');

enlace.addEventListener('click', (event) => {
    event.preventDefault();

    console.log('Click en Google');
})

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = document.querySelector('#nombre');

    // console.log(nombre.value);

    if (nombre.value == '') {
        let error = document.querySelector('#error-nombre');
        error.textContent = 'El nombre es obligatorio';
    } else {
        form.submit();
    }
});