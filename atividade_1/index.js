let readlineSync=require('readline-sync');

let voo=readlineSync.question('Olá, insira o número do seu vôo: ')
let assento=readlineSync.question('Indique qual a fileira que você gostaria de sentar (A, B, C, D ou F): ')
console.log('Okay, seu vôo é o '+voo+' e sua fileira é a '+assento+'. Boa viagem')


