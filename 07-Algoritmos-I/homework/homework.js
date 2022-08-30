'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:



}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=0;i<array.length;i++){
    for(let x=0;x<array.length;x++){
      var uno = 0
      var dos = 0
      
      if(array[x]>array[x+1]){
        let uno = array[x];
        let dos = array[x+1];
        array[x] = dos;
        array[x+1] = uno; 
      }

    } 
    
  }
  return array;

}
console.log(bubbleSort([3,2,5,7,1]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=0;i<array.length;i++){
    for(let i=0;i<array.length;i++){
      var uno = 0
      var dos = 0

      if(array[i]<array[i-1]){
        let uno = array[i];
        let dos = array[i-1];
        array[i] = dos;
        array[i-1] = uno; 
      }
      
    } 
  }
  
  return array;
}
console.log(insertionSort([3,2,5,7,1]))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
