//exercicios de fixação//
const myName = "Camila";

const birthCity = "Sta";

const birthYear = 1987;

console.log(myName);

console.log(birthCity);
console.log(birthYear);
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
} else if (nota < 80 && nota > 60) {
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

if(ang1 + ang2 + ang3 <= 180){
    console.log('true');
}else{
    console.log('false');
}