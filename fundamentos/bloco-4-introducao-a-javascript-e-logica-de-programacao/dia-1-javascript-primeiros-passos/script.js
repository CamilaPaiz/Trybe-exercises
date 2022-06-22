//exercicios de fixação//
const myName = "Camila";

const birthCity = "Sta";

const birthYear = 1987;

console.log(myName);

console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
birthCity = 'Rita';
//
const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimeter = base + base + height + height;
console.log(perimeter);
//
const nota = 99;

if (nota >= 80) {
  console.log("Parabéns,você foi aprovado(a)");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
  console.log("Você foi reprovado");
}
//
let processoSeletivo = "Aprovada";

switch (processoSeletivo) {
  case "Aprovada":
    console.log("Sua nota foi maior que 80 e está aprovado");
    break;

  case "Lista":
    console.log("Sua nota foi menor que 80 e maior que 60 e está na lista");
    break;

  case "Reprovado":
    console.log("Sua nota foi inferior a 60 e está reprovado");
    break;

  default:
    console.log("não se aplica");
}
//Exercícios do dia01-bloco04-primeiros passos javascript// exercício01

const a = 100;
const b = 20;

console.log(a + b);

console.log(a -b );

console.log(a * b);

console.log(a / b);

console.log(a % b);

//exercício02
const num1 = 200;
const num2 = 100;

if(num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
}

//exercício03
const num01 = 5;
const num02 = 10;
const num03 = 20;

if( num01 > num02 && num01 > num03){
    console.log(num01);
} else if(num02 > num01 && num02 > num03){
    console.log(num02)
}else{
    console.log(num03);
}
//exercício04

const valor = 250;

if (valor > 0) {
    console.log('positive');
} else if (valor < 0){
    console.log('negative');
}else{
    console.log('zero');
}
//exercício05

const ang1 = 90;
const ang2 = 90;
const ang3 = 90;

if(ang1 + ang2 + ang3 = 180){
    console.log('true');

}else if(ang1 + ang2+ ang3 > 180 || ang1 +ang2 +ang3 < 180){
    console.log('false');

}else if (ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log('erro');
}
//exercício06
const xadrez = 'rainha';

switch(xadrez){
    case 'bispo':
        console.log('move em linha reta diagonalmente');
        break;

        case 'peao':
            console.log('movem para frente ');
            break;

            case 'torre':
                console.log('move em linha reta horizontalmente e verticalmente');
               break;

             case'cavalo':
             console.log('move por duas casas horizontalmente ou verticalmentee');
             break;

             case'rainha':
             console.log('move para qualquer direção');
             break;

             case 'rei':
                 console.log('move para qualquer casa adjacente');
                 break;

                 default:
                     console.log('erro')

}


//exercício07?

let notas = 110;

if(notas >= 90 ){
    console.log('A');
}else if (notas >= 80){
    console.log('B');
}else if (notas >= 70){
    console.loge('C');
}else if(notas >= 60){
    console.log('D');
}else if (notas >= 50){
    console.log('E');
}else if (notas < 50 ){
console.log(F)
}else if(notas < 0 || notas > 100){
    console.log('erro');
}
    


//exercício08

const numero = 10;
const numeros = 5;
const numeros1 = 36;

if(numero % 2 === 0 || numeros % 2 === 0 || numeros1 % 2 === 0){
console.log('true');
}else{
    console.log('false');
}

//exercício09

const c = 12;
const d = 22;
const e = 40;

if(c % 2 > 0 || d % 2 > 0 || e % 2 > 0){
    console.log('true');
}else{
    console.log('false');
}

//exercício10

const custoProduto = 800;
const valorVenda = 1600;

if(custoProduto * 1.2 < valorVenda)
console.log("Lucro:" + (valorVenda - custoProduto * 1.2)*1000);
else if (  custoProduto < 0 || valorVenda < 0){
    console.log('erro')
}
    
//exercício11

const salarioBruto = 1500.10;
let aliquotaIr;
let aliquotaInss;


if(salarioBruto<= 1556.94 ){
  aliquotaInss= salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
   aliquotaInss = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
    aliquotaInss = salarioBruto * 0.11;
}else {
    aliquotaInss = salarioBruto - 570.88;
}

const salarioComDescontoInss = salarioBruto - aliquotaInss

if(salarioBruto<= 1903.98){
    aliquotaIr = 0;
}else if(salarioComDescontoInss<= 2826.65){
    aliquotaIr =  (salarioComDescontoInss * 0.75) -142.80;
}else if ( salarioComDescontoInss <= 3751.05){
    aliquotaIr = (salarioComDescontoInss * 0.15) - 354.80;
}else if(salarioComDescontoInss <= 4664.68){
    aliquotaIr = (salarioComDescontoInss * 0.225) - 636.13;
}else{
    aliquotaIr = (salarioComDescontoInss * 0.275) - 869.36;
}

console.log("Salario Liquido: " +(salarioComDescontoInss - aliquotaIr));