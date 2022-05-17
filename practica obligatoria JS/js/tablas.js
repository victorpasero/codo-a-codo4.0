for (let i = 11; i >= 9; i--) {
    document.write("<h3>" + "La tabla del " + i + ":" + "</h3>");
    for (let j = 1; j <= 9; j++) {
    document.write(i + ' * ' + j + ' = ' + i * j + "<br>");
    }
}