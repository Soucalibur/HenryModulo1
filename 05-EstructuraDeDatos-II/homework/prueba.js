
function LinkedList() {
    this.length = 0;
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  
  }
  
  LinkedList.prototype.add = function(value){
   
    var node = new Node(value);
    
    var valorActual = this.head;
    console.log(valorActual);
  
    if(!valorActual){
      this.head = node;
      this.length++;
    
      return node;
    }
    
    console.log(valorActual)
    
    while (valorActual.next) {
      valorActual = valorActual.next;
    }
    valorActual.next = node;
    this.length++;
    console.log(valorActual)
    
    return node;
  
  }
  
  
  
  LinkedList.prototype.remove = function(){
  
    console.log(this)
    var valorActual = this.head
    var posicion = this.length
    
    console.log(valorActual)
    
    if (!valorActual){
      return null;
    }
  
    for (let i = 0;i<posicion-2;i++){
      valorActual = valorActual.next
    }
    
    
    console.log(valorActual)
    console.log(this.valorActual)
    console.log(this.head.valorActual)
    var guardado = valorActual.next;
    valorActual.next = null;
    
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
  
  
  
  
  LinkedList.prototype.search = function(valor){
    console.log(this.head)
    
    while (this.head.value !== valor)
      this.head.value = this.head.next;
      
      if (this.head.value === valor)
         return this.head.value
  }
  
  
  
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
  console.log(x.search(10))
  