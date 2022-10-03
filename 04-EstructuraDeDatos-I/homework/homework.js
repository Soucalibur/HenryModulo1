'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n===1||n===0){
    return 1;
  }
  return n * nFactorial(n-1);
}

////////// Otra forma de hacerlo ////////////////////
// function nFibonacci(n) {
//   var array = []
  
//   var a = 0;
//   var b = 1;
//   var c = a + b;
//   var array = [0,1];
  
//   for (let i=0;i<15;i++){
    
//     if (c<100){
      
//       array.push(c)
//       //console.log(a)
//       //console.log(b)
//       //console.log(c)
//       a = b
//       //console.log(a)
//       b = c
//       //console.log(b)
//       c = a + b
//       //console.log(c) 
        
//     }
      
//   }
// // console.log(array)
// // console.log(buscar(7))
// return array[n];
// }


////////////////////////////////////////////////////////
//Primera forma de hacerlo
//
// function buscar(n){
//   return array[n];
// }

// var a = 0;
// var b = 1;
// var c = a + b;
// var array = [0,1];
// for (let i=0;i<15;i++){
//   if (c<100){
//     array.push(c)
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     a = b
//     console.log(a)
//     b = c
//     console.log(b)
//     c = a + b
//     console.log(c) 
    
//   }
  
// }
// console.log(array)
// console.log(buscar(7))
// Con la recursividad podria poner el limite para cuando la posicion en el array aparezca, asi la sentencia fibonacci no se detiene hasta encontrar la posicion
// deseada
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//Hecho por profe
function nFibonacci(n){

  if (n<0){return false}
  if (n===0){return 0}
  if (n === 1){return 1}
  return nFibonacci(n-1) + nFibonacci(n-2)  

}
/////////////////////////////////////////////////////////




/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/


function Queue() {
  this.array = []
}

Queue.prototype.enqueue= function(arg){
  return this.array.unshift(arg);  // no hace falta el return en esta funcion
}

Queue.prototype.dequeue = function(){
  
  if (this.array.length===0){
    return undefined;              // Esta condicion no hace falta, ya que el return del this.array.pop() ya me retornaria unbdefined si está vacio
  }

  var borrar = this.array.pop()
  return borrar;
}

Queue.prototype.size = function(){
  return this.array.length;
} 

// var x = new Queue();

// x.enqueue("first")
// x.enqueue("second");
// x.enqueue("third")

// console.log(x)

// console.log(x.dequeue())
// console.log(x)

// x.enqueue("arg1")
// console.log(x)

// console.log(x.size())

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
