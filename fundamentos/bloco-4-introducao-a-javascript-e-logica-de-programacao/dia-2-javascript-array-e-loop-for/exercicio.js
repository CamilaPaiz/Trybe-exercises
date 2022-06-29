//exercícios de fixação dia-2-arrayas
let menu = ["Home", "Serviços", "Portifólio", "Links"];

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

//2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;
for (index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
console.log(resultado);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for(index =0; index < numbers.length; index +=1){
  soma += numbers[index];
  media = soma / numbers.length;
}
 
console.log(media);

//4

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

//5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0 ;


 maiorNumero = Math.max(...numbers);


console.log(maiorNumero);


//usando for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for(index = 1; index < numbers.length; index +=1){
 if(numbers[index] > maiorNumero){
   maiorNumero = numbers[index]
 }
}

console.log(maiorNumero);

//6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;


for(index = 0; index< numbers.length; index +=1){
  if (numbers[index] % 2 > 0){
  impar += 1
  }
}
if(impar > 0){

  console.log(impar)
}
else{
  console.log('nenhum valor encontrado')
}

//7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero= numbers[0];

for (index=0; index < numbers.length; index+=1){
  if (numbers[index] < menorNumero){
    menorNumero =numbers[index]
  }
}
console.log(menorNumero);


// 8

let array =[];

for(let index = 1; index <= 25; index +=1){
 array.push(index);
}
console.log(array);

//9

let array =[1,  2,  3,  4,  5,  6,  7,  8,9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20, 21, 22, 23, 24,25];
  

for(index=0; index < array.length; index +=1){
 console.log( array[index] / 2)
}


//Exercicios bônus do dia 4.2--???????????????refazer

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordemcrescente = numbers[0];

for(index = 0; index< numbers.length; index+=1){
  if(numbers[index] < numbers[0])
  ordemcrescente = numbers[index]
}

while(ordemcrescente = numbers[index]){
ordemcrescente +=1


}console.log(ordemcrescente);

//




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


