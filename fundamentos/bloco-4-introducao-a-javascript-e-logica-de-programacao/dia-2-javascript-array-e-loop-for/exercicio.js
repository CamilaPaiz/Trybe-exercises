//exercícios de fixação dia-2-arrayas
let menu = ["Home", "Serviços", "Portfólio", "Links"];

let menuServices = menu[1];
console.log(menuServices);

let indexOfPortifolio = menu.indexOf("Portifólio");
console.log(indexOfPortifolio);

menu.push("Contato");
console.log(menu);

//exercícios de fixação -for

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

//exercícios de for/of

let names = ["João", "Maria", "Antônio", "Margarida"];
for (let elementos of names) {
  console.log(elementos);
}

//Exercícios do dia-1 ao 7//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;
for (index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
console.log(resultado);

//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for(index =0; index < numbers.length; index +=1){
  soma += numbers[index];
  media = soma / numbers.length;
}
 
console.log(media);

//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for(index =0; index < numbers.length; index +=1){
  soma += numbers[index];
  media = soma / numbers.length;
}
  if( media > 20){
    console.log('valor maior que 20')
  }else{
    console.log('valor menor ou igual a 20')
  }

//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(index = 0; index < numbers.length; index +=1){
  maiorNumero = Math.max(numbers[index]);
}

console.log(maiorNumero);


//Exemplo aula ao vivo!

let n1 = 55;
let n2 = 12;
let n3 = 60;
let n4 = 33;
let n5 = 17;
let n6 = 22;

let n1 = Math.floor(Math.randon() * 60) + 1;
let n2 = Math.floor(Math.randon() * 60) + 1;
//.... como colocar em um for e como fazer não repetir numeros
let numerosMega = [n1, n2, n3, n4, n5, n6];

let meusNumeros = [11, 31, 24, 7, 59, 33];

let numeroAcertos = 0;

for (let index = 0; index < numerosMega.length; index += 1) {
  //console.log(numerosMega[index]);
  for (let i = 0; i < meusNumeros.length; i += 1) {
    // console.log(meusNumeros[i]);
    if (numerosMega[index] === meusNumeros[i]) {
      numeroAcertos += 1;
      console.log("Acertou...", meusNumeros[i]);
    }
  }
}

Math.floor(Math.randon() * 60) + 1;
