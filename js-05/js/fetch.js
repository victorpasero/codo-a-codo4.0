// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( function(response) {
//         return response.json();
//     } )
//     .then( function(usuarios) {
//         usuarios.forEach( usuario => {
//             console.log(usuario, usuario.name, usuario.email);
//         });
//     } )
//     .catch( function(error) {
//         console.log(error)
//     } );

fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( usuarios => {
        usuarios.forEach( usuario => {
            console.log(usuario, usuario.name, usuario.email);
        } );
    } )
    .catch( error => console.log(error) );