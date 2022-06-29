// Nosso desafio aula ao vivo!
// Você deve criar um sistema que permita o cadastro de novos usuários nos sistemas da empresa.
// ,gerar senhas para todos os novos usuários.
// Inserir os novos usuários nos sistemas da empresa.
​
let novosUsuarios = [
  'Marcos',
  'Camila',
  'Adriana',
  'Karla',
  'José',
  'Márcia',
  'Michelle',
  'Michel',
];
​
let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];
​
// Requisitos
// 1 - O sistema deve fazer um controle de acesso e só liberar a execução das atividades 
//se a pessoa usuária fizer login no sistema 
//e tiver acesso liberado para realizar essas operações (Login: 'usuarioTrybe' com a senha: 'trybe2022');
// Se a pessoa usuária tiver acesso o sistema deve imprimir a mensagem "Acesso permitido!", 
//caso contrário a mensagem exibida será "Acesso negado!"
​
​
// O que fazer primeiro?
// Entender o problema e quebra-lo em pedaços menores
// - Precisamos saber onde guardar nosso login e senha?
// - Como podemos exibir a mensagem solicitada?
​
let login = "usuarioTrybe";
let senha = "trybe2022";
let temAcesso = false;
​
if (login === "usuarioTrybe" && senha === "trybe2022") {
  console.log("Acesso permitido!")
  temAcesso = true;
} else {
  console.log("Acesso negado!")
}
​
​
// 2 - O sistema deve criar senhas iniciais aleatórias para os novos usuários no padrão "nome" + "_" + numero aleatório 
// vezes o ano de 2022
// Obs. A operação só deve ser realizada se a pessoa usuária tiver acesso a ela!
​
 if (temAcesso === true) {
  console.log("--- Inicio gerador de senhas -----")
  for (let index = 0; index < novosUsuarios.length; index += 1) {
   let novaSenha = novosUsuarios[index] + "_" + Math.floor(Math.random() * 2022)
     console.log("Usuario:", novosUsuarios[index], "senha:", novaSenha)
   }
 } else {
   console.log("Você não tem acesso para realizar essa operação")
 }
​
​
// 3 - Inserir os novos usuários nos sistemas da empresa (Criar uma lista do sistema e o nome dos usuários cadastrados)
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
​
 if (temAcesso === true) {
  console.log("---Acesso Liberado para cadastrar novos usuarios ----")
   for (let index = 0; index < sistemas.length; index += 1) {
     console.log("Sistema:", sistemas[index])
   console.log("Usuarios:")
    for (let index1 = 0; index1 < novosUsuarios.length; index1 += 1) {
      console.log(index1, "-", novosUsuarios[index1])
   }
 }
​
 } else {
  console.log("Você não tem acesso para realizar essa operação")
 }
​
​
// 4 - O sistema deve permitir a exclusão de um usuário da lista sempre que for necessário
// Obs. A operação sé deve ser realizada se a pessoa usuária tiver acesso a ela!
// Pesquisar: remover elemento de um array javascript no Google
​
let usuarioParaExcluir = "Karla";
​
if (temAcesso === true) {
  for (let index = 0; index < novosUsuarios.length; index += 1) {
    if (novosUsuarios[index] === usuarioParaExcluir) {
      novosUsuarios.splice(index, 2)
    }
  }
} else {
  console.log("Você não tem acesso para realizar essa operação")
}
​
console.log(novosUsuarios)

//

/*1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
A soma de 35 a 105 é: X.
2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
“Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
Bônus: Crie a condição utilizando operador ternário.
5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
“Pessoa” é a mais nova.
*/

//Exercício 1-- dinâmica aula 4.3

let numeros =0;

for( index = 35; index <= 105; index+= 1){
    numeros += index
}
console.log('A soma do 35 ao 105 é :', numeros);


//Exercício 2--


let resultado=0;

for(index = 15; index <= 115; index+= 1){
 if(index % 2 > 0) {
      resultado +=1
    }
  }
console.log(resultado);

if(resultado >= 50){
  console.log('mensagem secreta');
}

//exercício 3--

let jogador1 ='pedra'
let jogador2 ='tesoura'

if(jogador1 == 'pedra' && jogador2 == 'tesoura'){
    console.log('jogador 1 ganha');
}else if (jogador1 == 'pedra' && jogador2 == 'papel'){
    console.log('jogador2 ganha');
}








//exercicio-1-fatorial de 10

let fatorial =1;

for(let i=1; i <= 10; i +=1){     // vai passar de 1 a 10,incluindo o 10

}


console.log(fatorial)


//exercicio-2-inverter palavra

let word ='trybe';

for(let i= 0; i<word.length; i+=1){
if(word[i]= word.length)


}

//exercicio-3 retorne a maior palavra em um array e a menor em outro
let array = ['java', 'javascript', 'python', 'html', 'css'];


//numero primo é um numero inteiro maior do que 1 que possui somente dois divisores, ele e 1.escreva um algoritmo que retorne o maior numero primo entre 2 e 50.
let numero =0;

for( let i=2; i<=50; i+=){
  if(numero[i] / 2 > 0  && numero[i] % 2 > 0)
}



//dia 4.4-parte I-1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

for(let mensagem in info){
  console.log('Bem-vinda,', info['personagem']);
}


//exer2(como acrescentar recorrente sem aparecer parenteses???)

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
 info.recorrente= {
  recorrente:'Sim',
 }
  

 
 console.log(info);

 //exer 3

 let info ={
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}


 for(let chave in info){
  console.log(chave);
 }

 //exer 4

 let info ={
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

for (let valores in info){
  console.log(info[valores]);
}

//exer 5(como nao imprimir sim e sim???)

let info ={
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
let info1 ={
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Moutain, Dells Four Color Comics # 178',
  nota: 'O último Mac Patinha ',
  recorrente: 'Sim'
}

for(mensagem in info){
  console.log(info[mensagem],  'e' , + info1[mensagem]);
} if (info === info1){
  console.log(info[mensagem]);
}

//exer 6 e 7

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

for(chave in leitor){
  console.log('O livro favorito de', leitor['nome'] , leitor['sobrenome'], 'se chama', leitor['livrosFavoritos'[0]]);
 }

 leitor.livrosFavoritos.push( {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};
 );
console.log(leitor);
//
let senha = 'Robot@t';

for(letra of senha){
  if(letra == '@')
    console.log('%');
  else{
    console.log(letra);
  }
}

//
let numeros = [3, 7,13,9,100,45,123,3,123];

//let indexOfMaiorNumero= numeros.indexOf(123);
//console.log(indexOfMaiorNumero);


//let contador=0;
let maiorNumero = Math.max.apply(null, numeros);
//console.log(maiorNumero);


for(let posicao in numeros){
  if(maiorNumero ==numeros[posicao]){
   console.log(posicao);
   contador+=1;
  }
}
console.log(contador);
//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//let contador =0;
let maiorNumero = numbers[0];
//ambos imprimem os valores do array numbers:

//for(i=0; i<numbers.length; i+=1){
  //console.log(numbers[i])
//}

//for(let n of numbers){
 // console.log(n)
//}

//let names = ['João', 'Maria', 'Antônio', 'Margarida'];

//for(let n of names){
//  console.log(n);
//}

//for(let i=0;i<numbers.length; i+=1){
//contador+=numbers[i]
//}
//console.log(contador);
//let media=contador / numbers.length;
//console.log(media);
//if (media >20){
  //console.log('valor maior que 20');
//}else{
  //console.log('valor menor ou igual a 20');
//}
for(let i=0; i<numbers.length; i+=1){
  if(numbers[i]>maiorNumero){
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero)

//
let numbers= [2, 4, 6, 7, 10, 0, -3];


function indiceMaior(numbers){
  let indiceMaior= 0;
for(let indice in numbers){
  if(numbers[indiceMaior] < numbers[indice]){
    indiceMaior = indice;
  }
}
return indiceMaior;
}
console.log(indiceMaior([]));

//
function indiceMenor(array){
  let indiceMenor= 0;
  for(let indice in array){
    if(array[indiceMenor] > array[indice]){
indiceMenor =indice;
    }
  }
return indiceMenor;
}
console.log(indiceMenor([2,4,6,7,10,0,-3]))
//
function maiorNome(array){
  let maiorNome = array[0];
  for( let nome in array){
    if(maiorNome.length < array[nome].length){
      maiorNome = array[nome];
    }
  }
  return maiorNome;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//??????
function maisRepete(array)
  

