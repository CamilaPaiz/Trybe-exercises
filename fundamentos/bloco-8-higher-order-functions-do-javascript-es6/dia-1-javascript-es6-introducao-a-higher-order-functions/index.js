/*Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console 
o resultado da execução das funções que você criou nos exemplos anteriores

const acordando =() => 'Acordando!!'
const boraCafe = () => 'Bora tomar café!!'
const dormir = () => 'Partiu dormir!!'

const doingThings =(string) =>{
    const result = string()
console.log(result);
}
doingThings(acordando);
doingThings(boraCafe);
doingThings(dormir);*/

/*Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente 
um email no formato nome_da_pessoa@trybe.com.

const newPerson = (name) => {
  return {
    nome: name,
    email: `${name.toLowerCase().split(" ").join("_")}@trybe.com`,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"),
    id2: callback("Luiza Drumond"),
    id3: callback("Carla Paiva"),
  };
  return employees;
};
console.log(newEmployees(newPerson));*/

/*Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio =(mynumber,callback)=>{
    const number = Math.floor(Math.random()* 5 +1);
    
    return callback(mynumber,number)
}


const numeroConfere =(mynumber,number) => {

    if(mynumber === number){
    
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente'
};

console.log(resultadoSorteio(2,numeroConfere));
*/


//Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. 
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultado =(rightanswers,studentanswers,callback) =>{

return callback(rightanswers,studentanswers);

}


const compara =(rightanswers,studentanswers) =>{
let result = [];
let respostas =[];
let pontos =0;

for(let nota of rightanswers){
result.push =nota;
}
for(let notas of studentanswers){
respostas.push = notas;
}
    if(rightanswers[nota] ===studentanswers[notas]){
    pontos +=
    }
    
    if(studentanswers[notas] === 'N.A'){
    pontos = pontos;
    }
    if(studentanswers !== rightanswers)
        pontos= pontos -0,5;
    
    return pontos;
}





    
console.log(resultado(RIGHT_ANSWERS,STUDENT_ANSWERS,compara))
 

 