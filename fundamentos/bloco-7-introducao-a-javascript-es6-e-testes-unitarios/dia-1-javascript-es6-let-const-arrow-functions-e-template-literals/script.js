

//aula1//
/*Altere as variáveis para respeitarem o escopo em que foram declaradas.
Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals.

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);





const testingScope=(escopo) =>{
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  };

  testingScope(true);
  
  Crie uma função que retorne um array em ordem crescente.

   Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
   Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
   Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
   Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
   
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // Seu código aqui.

    console.log(oddsAndEvens); // será necessário alterar essa linha 

    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    const sortArray =() => {
        oddsAndEvens[0] = 2;
        oddsAndEvens[1] = 3;
        oddsAndEvens[2] = 4;
        oddsAndEvens[3] = 7;
        oddsAndEvens[4] = 10;
        oddsAndEvens[5] = 13;

        return oddsAndEvens;
    }

   const sortedArray = sortArray();
   console.log(`Os números ${sortedArray} se encontram ordenados de forma decrescente!`);

   //usando o array.sort();

   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayComSort = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArray2 = sortArrayComSort(oddsAndEvens);
console.log(`Os números ${sortedArray2} se encontram ordenados de forma crescente!`);

Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (n)=>{
    let resultado = 1 ;
    for(let i = 2; i <= n; i+=1){
        resultado *= i
    }
    return resultado;
}

//recursiva

//const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
//console.log(factorial(5));????

// crie uma função que retome a maior palavra de uma frase

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));*/

  //Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
  //Função 2: nova função que recebe como parâmetro a primeira função +requisitos novos

  /*const substitui = (nome) =>{
    const frase = 'Tryber x aqui!';
    const frase2 = frase.split(' ');
    for(let i =0; i <frase2.length; i+=1){
        if(frase2[i] === 'x'){
            frase2[i]= nome;
        }
        
    }
    return frase2.join(' ');
};
console.log(substitui('camila'));

    const funcao2 = (resultado)=>{
        const skills =['JavaScripst','CSS','HTML'];
        let novaFrase = `
        ${resultado}
       Minhas três principais habilidades são:`;

       skills.forEach((skill) =>{
        novaFrase = `${novaFrase}
        ${skills}`;
       });
       return novaFrase;
        
    };
  
 console.log(funcao2(substitui('camila')));*/


 