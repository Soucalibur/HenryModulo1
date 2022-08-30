'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  
  var value = [value];
  var right= [];
  var left = [];
  

  ////// pbot ///////////
  console.log(array[0])
  var pbot = [array[0]]
  console.log(pbot)
  ///////////////////////

  for(let i=0;i<array.length;i++){
    console.log(array[i])
    console.log(pbot)

    if(array[i]<pbot){
      left.push(array[i])
      console.log(left)
      console.log(pbot)
    }
    
    if(array[i]>pbot){
      right.push(array[i])
      
      console.log(right)
    }
    if(array[i]===pbot.value){
      continue;
    }

    
    console.log(right)
    console.log(left)

  }


  if(right.length>1){
    right = quickSort(right);
  }
  if(left.length>1){
    left = quickSort(left);
  }

  console.log(pbot)
  console.log(right)
  console.log(left)

  return left.concat(pbot).concat(right);
  
}



console.log(quickSort([4,7,2,3,1,9,5]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
