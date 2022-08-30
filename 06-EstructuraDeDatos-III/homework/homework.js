"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
this.value = value;
this.left = null;
this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
  //Primero pregunto si es mayor o menos o igual
  if(value < this.value){
    //Luego miro si hay algo, y luego se puede asignar
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    }
    //Solo en el true se hace la recursion
    if (this.left){
      this.left.insert(value);
      return value;
    }
  }
  if(value > this.value){
    
    if(this.right=== null){
      this.right = new BinarySearchTree(value);
    }
    if(this.right){
      this.right.insert(value);
      return value;
    }
  }
  else{
    return false;
  }
  

}



/////////////////////////////////////////////////////////////
BinarySearchTree.prototype.contains = function(value){
  
  console.log(this)
  
  
  ///////////////////////////////////////////////////////////////////////////
  
  // if(this.value === value){
  //   return true;
  // }
  // else{

  // }

  // else if(this.left && !this.right){
  //   if (this.value === value){
  //     return true;
  //   }
  //   return this.left.contains(value)
  // }
  // else if(!this.left && this.right){
  //   if (this.value === value){
  //     return true;
  //   }
  //   return this.right.contains(value)
  // }
  
  // else if(this.left && this.right){
  //   if(this.value === value){
  //     return true;
  //   }
  //   else{
  //     return this.left.contains(value) + this.right.contains(value);
  //   }

  
  // }
// HECHO POR PROFE //////////////////////////////////////////////////////////////////////////////////
//  if(this.value === value){
//   return true;
//  }
//  if(value<this.value && this.left){
//   if (this.left.contains(value)){
//     return true;
//   }
//  }
//  if(value>this.value && this.right){
//   if(this.right.contains(value)){
//     return true;
//   }
//  }
//  return false;
  
//  /* La idea es la misma que el size del profe nada mas que aseverando de que encuentre el valor que pido por parámetro.
//  Si mi valor es menor al this.value en el que se encuentra y tiene lugar a moverse, que entre, sino que siga.
//  Si el valor en el que se encuentra
//  es el del parametro que me devuelva true, sino que busque en left o right, si no hay ninguno de estos que me devuelva false. Si hay entonces que ejecute
//  el metodo contains de vuelta con el valor de asignacion (si es this.left o this.right) PERO SI NO USO UN RETURN ME PISA EL VALOR, por lo que debo colocarlo, 
//  PERO SI LO COLOCO SIN CONDICION DE QUE SOLO RETORNE SI ES TRUE ENTONCES ME VA A PISAR ESE VALOR SI ES FALSE, entonces hacemos condicion de que en caso de que
//  al hacer un this.left.contains(value)(por ejemplo) y este me retorna true, entonces retorname el valor y finalizá la ejecucion.
//   */
// ///////////////////////////////////////////////////////////////////////////////////


  
  ////////////////////////////////////////////////////////////

  // if(this.value === value){
  //   return true
  // }
  // if(this.left){
  //   this.left.contains(value)
  // }
  
  // if(this.right){
  //   this.right.contains(value);
  // }
  
  // return false;
  ////////////////////////////////////////////////////////////
}

var x = new BinarySearchTree(20)
console.log(x)
x.insert(2)
console.log(x)
x.insert(3)
x.insert(0)
x.insert(1)
x.insert(10)
x.insert(22)
console.log(x)
// console.log(x.size())

// console.log(x.contains(20))
// console.log(x.contains(2))
console.log(x.contains())



/////////////////////////////////////////////////////////////
BinarySearchTree.prototype.depthFirstForEach = function(cb,type){
  
  // //In-order: primero izquierda, luego nodo, despues derecha (I-N-D)
  // if(type === "in-order" || type===false){}

  // //Post-order: primero izquierda, luego derecha, despues nodo (I-D-N)
  // if(type === "post-order"){}

  // //Pre-order: primero en el nodo, despues en la izquierda, despues en la derecha (N-I-D)
  // if(type === "pre-order"){}
  //En vez de if, para hacer la ejecucion mas rapidamente, se utilizará el switch

  switch(type){
    case "pre-order":
      cb(this.value);
      if(this.left){this.left.depthFirstForEach(cb,type);}
      if(this.right){this.right.depthFirstForEach(cb,type);}
      break;

    case "post-order":
      
      if(this.left){this.left.depthFirstForEach(cb,type);}
      if(this.right){this.right.depthFirstForEach(cb,type);}
      cb(this.value);
      break;


    default: //Este es porque si no se pasa type o es in-order
      
      if(this.left){this.left.depthFirstForEach(cb,type);}
      cb(this.value);
      if(this.right){this.right.depthFirstForEach(cb,type);}
      break;
  }
} 


/////////////////////////////////////////////////////////////
BinarySearchTree.prototype.breadthFirstForEach = function(cb){
  /* Este metodo recorre por niveles, de izquierda a derecha(salta)
  */

  if(!pendiente){ //tambien se puede poner en el parametro y asignarle el pendiente = [] y seria lo mismo
    var pendiente =[]
  }
  
  cb(this.value);

  if(this.left)pendiente.push(this.left);
  if(this.right)pendiente.push(this.right);

  if(pendiente.length>0) pendiente.shift().breadthFirstForEach(cb, pendiente);



}


/////////////////////////////////////////////////////////////
BinarySearchTree.prototype.size = function(contador=[]){
  
  console.log(this.value);
  // contador.push(this.value) 
  
  // if(!this.left && !this.right){
  //   return 1;
  // }

  // if(this.left){
    
  //   console.log(contador)
  //   this.left.size(contador);
  // }
  
  
  // if(this.right){ 
  //   this.right.size(contador);
  // }
  
  // console.log(contador.length)
  
  // return contador.length;

  
  

  if(!this.left && !this.right){
    return 1;
  }

  else if(this.left && !this.right){
    return 1+ this.left.size()
  }
  else if(!this.left && this.right){
    return 1+ this.right.size()
  }
  else{
    return 1 + this.left.size() + this.right.size();
  }

  //  HECHO POR PROFE //////////////////////////////////////////////////////////////////////////
  // let count = 0;
  // count++;
  // if(this.left){
  //   count += this.left.size()
  // }
  // if(this.right){
  //   count += this.right.size()
  // }
  // return count;
  
  // /* La manera de verlo es que contador es +1 cuando pasa por cada nodo, Cuando hay algo a la izquierda que me sume los valores que tenga en el 
  // proximo this.left (por eso llama a la recursion) y dentro el contador pasa a ser 0 y luego 1, y luego se pregunta si hay algo en izquierda y derecha,
  // si hay algo se repite, sino retorna el contador con ese valor y al volver a la ejecucion de atras me retorna los valores que estuve guardando en ese
  // count (porque el return de this.right.size() va a ser un count) y al no tener nada me retorna el resultado final 
  // */
  // ////////////////////////////////////////////////////////////////////////////
  

}



// var x = new BinarySearchTree(20)
// console.log(x)
// x.insert(2)
// console.log(x)
// x.insert(3)
// x.insert(0)
// x.insert(1)
// x.insert(10)
// x.insert(22)
// console.log(x)
// console.log(x.size())

// // console.log(x.contains(20))
// // console.log(x.contains(2))
// console.log(x.contains(10))



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
