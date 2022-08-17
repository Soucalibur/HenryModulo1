'use strict'

function BinarioADecimal(num) {
  //tu codigo aca
  
  //Codigos del profe
  //function BinarioADecimal(num){
  //  let resultado = 0;
  //  num = num.split("").reverse();
  //  for(let i=0; i<num.length;i++){
  //    resultado = resultado + num[i]*2**i;
  //  }
  //  return resultado;
  //}

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
 //Codigo del profe
 //function DecimalABinario(num){
 // let binary = [];
 // while (num <0){
 //   let resto= num%2;
 //   binary = unshift(rest);
 //   num = Math.floor(num/2);
 // }
 // return binary.join("");
 //}
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
  
