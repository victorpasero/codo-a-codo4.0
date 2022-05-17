const numeros = [4, 7, 1, 9, 3, 1];

// map

// const nums = numeros.map( function(num) { return num; });

const nums = numeros.map( function(num) { 
    if (num % 2 == 1) {
        return num * 3;
    }
    return num;
});

// const pokemons = [
//     {
//         "name": "bulbasaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/1/"
//     },
//     {
//         "name": "ivysaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/2/"
//     },
//     {
//         "name": "venusaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/3/"
//     }
// ];

// let poke = pokemons.find( function(el) {
//     if (el.name == 'ivysaur') {
//         return true;
//     }
// } )

// console.log(poke);

// filter

// const filtrados = numeros.filter( function(num) {
//     if (num <= 4) {
//         return true;
//     } else {
//         return false;
//     }
// } );

// const filtrados = numeros.filter( function(num) {
//     return num <= 4 ? true : false;
// } );

// const filtrados = numeros.filter( function(num) {
//     return num <= 4;
// } );

// const filtrados = numeros.filter( num => num <= 4 );

// console.log(filtrados);

// find

// let num = numeros.find( value => value == 3 );
// console.log(num);

// for

// for (let i = 0; i < numeros.length; i++) { // i = 0
//     console.log(numeros[i]);
// }

// numeros.forEach( function(num) {
//     console.log(num);
// } );

// forEach

// numeros.forEach( num => console.log(num) );