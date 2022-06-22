//exercícios de fixação dia-2-arrayas
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices= menu[1];
console.log(menuServices);

let indexOfPortifolio = menu.indexOf('Portifólio');
console.log(indexOfPortifolio);

menu.push('Contato');
console.log(menu);


//exercícios de fixação -for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index =0 ;index < groceryList.length ; index += 1){
    console.log(groceryList[index]);
}

//exercícios de for/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for( let name of names){
    console.log(name);
}