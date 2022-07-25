const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  //1-Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.ff
  /*const author= (array,year) =>{
    const authorName = array.find((book) => book.author.birthYear === year)
    return authorName.author.name
  }
  console.log(author(books,1947));*/

  //ou
   const author =(book)=> {
     return books.find((book)=> book.author.birthYear === 1947).author.name;
   }
console.log(author(books));

  //2 - Retorne o nome do livro de menor nome.
  const bookName =(array) =>{
    let initialSmallName = array[0].name
    array.forEach((book)=>{
        if(initialSmallName.length > book.name.length) initialSmallName = book.name
         
    })
    return initialSmallName;
    }
    console.log(bookName(books));

   // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const bookNames =(array) =>{
    return books.find((book) => book.name.length === 26).name
}
console.log(bookNames(books));

//4 - Ordene os livros por data de lançamento em ordem decrescente.
 const releaseYear =(array) =>{
    return books.sort((booka,bookb) => bookb.releaseYear-booka.releaseYear)
 }
console.log(releaseYear(books))

//5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.ff
 const yearBirth =(array) =>{
    return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000)
 }
 console.log(yearBirth(books))

 //6-Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.ff

 const release = (array) =>{
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear  <= 1990)
 }
 console.log(release(books))

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const dayOfBirthday =(array) =>{
    return books.every((book) => book.author.birthYear)
}