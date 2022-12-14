"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.length = 0; //ok
  this.head = null; //ok
}

function Node(value) {
  this.value = value; //ok
  this.next = null; //ok

}

LinkedList.prototype.add = function(value){
 
  var node = new Node(value); // ok
  
  let valorActual = this.head; // ok

  console.log(valorActual);

  if(!valorActual){
    this.head = node; //ok
    this.length++; //ok
  
    return node; //ok
  }
  
  console.log(valorActual)
  
  while (valorActual.next) { //ok
    valorActual = valorActual.next; //ok
  }

  valorActual.next = node; //ok
  this.length++; //ok
  console.log(valorActual)
  
  return node; //ok

}




LinkedList.prototype.remove = function(){

  console.log(this)
  var valorActual = this.head
  var posicion = this.length
  
  console.log(valorActual)
  
  if (!valorActual){ //ok
    return null; //ok
  } //ok

  if (!valorActual.next){
    let guardado = this.head.value; //ok
    this.head = null; //ok
    this.length--; //ok
    return guardado; //ok
  }

  // for (let i = 0;i<posicion-2;i++){
  //   valorActual = valorActual.next
  // }
  // En vez de hacer esto se realizaria lo siguiente

  while(valorActual.next.next){ //ok
    valorActual = valorActual.next; //ok
  }//ok
  

  console.log(valorActual)
  
  
  let guardado = valorActual.next.value; //ok
  valorActual.next = null; //ok
  this.length--;
  
  console.log(this)
  
  console.log(guardado)
  console.log(this.head)
  
  
  /////////////////
  // var guardado = this.head.value
  // this.head = null
  // console.log(this.head)
  //////////////////////
  
  // var guardado = valorActual
  // console.log(guardado)
  // console.log()

  // valorActual = null;
  // console.log(valorActual)
  
   return guardado;
}




// LinkedList.prototype.search = function(input){
//   let valorActual = this.head;

//   while(valorActual){
    
//     if(typeof input === "function"){
      
//       if(valor(valorActual.value)=== true){
//         return valorActual.value;
//       }
//     }
    
//     else{
      
//     if(valorActual.value === input){
//       return valorActual.value;
//        }
//     }
//   }

//   return null;
// }



let x = new LinkedList();

x.add(5)
console.log(x)
x.add(10)
x.add(20)
x.add(40)
console.log(x.head)
console.log(x)
console.log(x.remove())
console.log(x)
console.log(x.remove())
console.log(x)
console.log(x.head)







/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

  this.numBuckets = 35; 
  this.buckets = [];
}

HashTable.prototype.hash = function(k){
  let acumulador = 0;
  
  for(const char of key){
    const num = char.charCodeAt();
    acumulador+= num;
  }

  return acumulador % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== "string") throw TypeError("Keys must be strings");
  
  const index = this.hash(key);
  // let bucket = this.buckets[index];
  if(!this.buckets[index]){
    this.buckets[index] = {};
  }
  this.buckets[index][key] = value;
}


HashTable.prototype.get = function(key){
  const index = this.hash(key);
  let bucket = this.buckets[index];
  
  if(bucket){
    return bucket[key]
    if(bucket.hasOwnProperty(key)){
      return bucket[key];
    }
  }
    
  
}

HashTable.prototype.hasKey = function(key){
  if(this.get(key)){
    return true;
  }
  else{
    return false;
  }
  
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
