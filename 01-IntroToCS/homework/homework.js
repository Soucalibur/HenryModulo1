'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = [];
  var resultado = 0;
  num = num.split("");

  var numInvert = num.reverse();

  for (let i=0; i<numInvert.length; i++){
    var res = numInvert[i]* Math.pow(2,i);
    
    array.push(res);
  }
  for(let i=0; i<array.length;i++){
    resultado += array[i];
     
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
 
  parseInt(num);

  var array = [];
  

  do{
    
      array.unshift(num%2);
      num = Math.floor(num/2)
      
     
  }
  while(num!==0);
      
    
    
  
  return array.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
  
