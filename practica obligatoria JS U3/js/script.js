let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let usuario = document.querySelector('#usuario');
    let clave = document.querySelector('#clave')
      if (usuario.value == "" || clave.value == "") {
          alert('El usuario y la clave no pueden estar vacios')
      } else {
          form.submit()
      }
})