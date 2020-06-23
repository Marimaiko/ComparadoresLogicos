let readlineSync = require('readline-sync');

let quadrado = readlineSync.question('Eh a area de um quadrado? ') == 'sim';
let lado1;
let lado2;
let area;

switch (quadrado) {
    case true:
        lado1 = readlineSync.question('Informe a medida do lado: ');
        area = lado1 * lado1;
        break;
    case false:
        lado1 = readlineSync.question('Informe a medida do lado: ');
        lado2 = readlineSync.question('Informe a medida do outro lado: ');
        area = lado1 * lado2;
        break;
}
console.log('A area eh igual a= '+area);