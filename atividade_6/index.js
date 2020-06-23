let rs=require('readline-sync');

let nome1= rs.question('Digite seu nome: ');
let dado1 = rs.question('Escreva alguma coisa:');
let caract1 =dado1.length;

let nome2= rs.question('Digite seu nome: ');
let dado2 = rs.question('Escreva alguma coisa:');
let caract2 =dado2.length;


let compare = caract1>caract2 ? (nome1+' escreveu mais caracters'):(nome2+' escreveu mais caracters');
console.log(compare)