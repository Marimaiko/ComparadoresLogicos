
let rs=require('readline-sync');

let mascara =rs.question('Você está usando máscaara quando sai de casa?')==='sim';
let mao= rs.question('Você está lavando as mãos frequentemente?')==='sim';
let lavaMao;

switch(mascara)
{
    case true:
        lavaMao = mao ? 'Parabens! Voce ta bem protegido':'Mascara, ok! Lave as maos, pufavo';
        break;
    case false:
        lavaMao = mao ? 'Maos, ok! Use a mascara, pufavo':'Esse tá fodido';
        break;
}

console.log(lavaMao);
