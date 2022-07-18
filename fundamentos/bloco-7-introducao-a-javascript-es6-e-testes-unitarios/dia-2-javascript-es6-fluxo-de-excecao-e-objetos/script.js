//exemplos da teoria!

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

// Object.Keys= retorna as chaves do objeto

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`
    );
  }
};

console.log("Estudante 1");
listSkills(student1);

console.log("Estudante 2");
listSkills(student2);

//
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}

//Object.values= retorna os valores das chaves

const student = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkill: "Ótimo",
};

const listSkillsValuesWithValues = (student) => Object.values(student);

console.log(listSkillsValuesWithValues(student));

//Object.entries=retorna chave e valor,retorna no formato array com cada chave/valor dentro de outro array
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

//
const países = {
  França: "Paris",
  Brasil: "Brasília",
  Espanha: "Madrid",
  Portugal: "Lisboa",
};
const pairKeyValue = Object.entries(países);
//console.log(pairKeyValue);
// Object.entries retorna um array onde o[0] será a chave e o[1] será o valor dessa chave!

for (index in pairKeyValue) {
  console.log("--------");
  console.log("País:", pairKeyValue[index][0]);
  console.log("Capital:", pairKeyValue[index][1]);
}

/*Object.assign=Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos 
  para um objeto destino. Sua estrutura é:

    Object.assign(destino, objeto1);
    Object.assign(destino, objeto1, objeto2);
    Object.assign(destino, objeto1, objeto2, objeto3, objeto4);*/

const person = {
  name: "Alberto",
  lastName: "Gomes",
  age: 20,
};

const info = {
  age: 23,
  job: "engenheiro",
};

const family = {
  children: ["Maria", "João"],
  wife: "Ana",
};

Object.assign(person, info, family);
console.log(person);

/* Output
        { name: 'Alberto',
        lastName: 'Gomes',
        age: 23,
        job: 'engenheiro',
        children: [ 'Maria', 'João' ],
        wife: 'Ana'
        } */

//

const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);

//exercícios de fixação

/*const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

    const customerInfo = (order) => {
    const address = 'address'; 
    const deliveryPerson = order.order.delivery.deliveryPerson; 
    const customerName = order.name; 
    const customerPhone = order.phoneNumber; 
    const street = order.address.street; 
    const number = order.address.number; 
    const apartment = order.address.apartment; 
  
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  }
  
  customerInfo(order);
  
  customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = order.name = 'Luiz Silva'
  const newTotal = order.payment.total = 50;
  const pizza = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log(`Olá, ${newCustomer}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} é R$ ${newTotal}.`)

};

orderModifier(order);*/
//
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1-adicionar turno da noite em lesson2

  const newLesson =(objeto,key,Keyvalue) =>{
    objeto[key]=Keyvalue;

  }
  newLesson(lesson2,'turno','noite');
  console.log(lesson2)

  //2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  const listOfKey = (objeto) =>
    Object.keys(objeto);
  
  console.log(listOfKey(lesson2));

  //3-Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

  const objectLength = (objeto) => 
    Object.keys(objeto).length;
  
    console.log(objectLength(lesson2));

    //4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

    const objectValue = (objeto) => Object.values(objeto);
    console.log(objectValue(lesson2));

    //5-Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
    //Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
    
    const allLessons = Object.assign({},{lesson1,lesson2,lesson3});
    console.log(allLessons);

    //6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

    const totalStuddent = (objeto) => {
        
        const keys =Object.keys(objeto);
        let total =0;
        for(let i =0; i< keys.length; i +=1){
           const currentKeys =keys[i];
            total += objeto[currentKeys].numeroEstudantes
        }
        return total;
    }

    console.log(totalStuddent(allLessons));

    //7-Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
    const keyIndex = (objeto,number) => Object.values(objeto)[number];
    console.log(keyIndex(lesson1,2));

    //8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, 
    //sendo eles: o objeto, o nome da chave e o valor da chave.

        const keyValue =(objeto,key,value)=>{
            const valores = Object.entries(objeto);
            let verifique = false;
            for(let i in valores){
                if(valores[i][0] === key && valores[i][1] === value) 
                verifique = true;
            }
            return verifique;
        }
        console.log(keyValue(lesson2,'professor','Carlos'));