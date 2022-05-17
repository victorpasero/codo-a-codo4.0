const titulo = document.querySelector('.title');

titulo.addEventListener('mouseover', () => {
    titulo.style.fontSize = '250%';
    titulo.style.color = 'blue'
})
titulo.addEventListener('mouseout', () => {
    titulo.style.fontSize = '200%';
    titulo.style.color = 'initial'
})