const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
   return arrays.reduce((acc,curr)=>acc.concat(curr),[])
  }


function flatten(){
    return arrays.reduce((acc,curr)=>{
        return acc.concat(curr)
    },[]);
}
  console.log(flatten(arrays))