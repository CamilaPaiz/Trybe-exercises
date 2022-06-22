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
