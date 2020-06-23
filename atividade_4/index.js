let rs = require('readline-sync');
let mes = rs.questionInt('Que mes voce nasceu? '); 
let dia = rs.questionInt('Que dia voce nasceu? ');
let signo;
switch (mes) 
{
    case 1: signo = dia <= 19 ? 'Capricórnio' : 'Aquario'; break;
    case 2: signo = dia <= 18 ? 'Aquario' : 'Peixes'; break;
    case 3: signo = dia <= 20 ? 'Peixes' : 'Aries'; break;
    case 4: signo = dia <= 19 ? 'Aries' : 'Touro'; break;
    case 5: signo = dia <= 20 ? 'Touro' : 'Gemeos'; break;
    case 6: signo = dia <= 21 ? 'Gemeos' : 'Cancer'; break;
    case 7: signo = dia <= 22 ? 'Cancer' : 'Leao'; break;
    case 8: signo = dia <= 22 ? 'Leao' : 'Virgem'; break;
    case 9: signo = dia <= 20 ? 'Virgem' : 'Libra'; break;
    case 10: signo = dia <= 22 ? 'Libra' : 'Escorpiao'; break;
    case 11: signo = dia <= 21 ? 'Escorpiao' : 'Sagitario'; break;
    case 12: signo = dia <= 21 ? 'Sagitario' : 'Capricornio'; break;
    default: signo='Mes invalido';break;
}
console.log(signo)
