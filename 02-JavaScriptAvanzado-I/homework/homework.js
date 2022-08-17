//Pruebas

x = 1;
var a = 5;
var b = 15; //Cambié este valor para resolver confuciones por asignacion de mismos valores en otras funciones

var c = function(a, b, c) {
  var x = 10;
  console.log(x);   //10
  console.log(a);   //8
  
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  }

  f(a,b,c);
  console.log(b);   //9
  
}

c(8,9,10);

console.log(b);     //15
console.log(x);     //1

///////////////////////////////

console.log(bar);   //undefined
console.log(baz);   //undefined(error si no se coloca "var" delante de "baz". Cambié su valor para poder continuar procesos con quokka)
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
var baz = 2;

//////////////////////////////

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);    //Franco

//////////////////////////////

var instructor = "Tony";
console.log(instructor);    //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);  //Franco
   }
})();
console.log(instructor);    //Tony

//////////////////////////////

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);    //The flash
    console.log(pm);    //Reverse Flash
}
console.log(instructor);    //The Flash
console.log(pm);    //Franco

/////////////////////////////
//Nota: el alcance de una variable varia segun su posicion y asignacion. Si una variable se encuentra dentro de una funcion,
// y no se retorna como valor, entonces querer llamar esa variable fuera de la funcion no se permite, pero desde dentro hacia
// fuera si.
// Proceso de seleccion de valores dentro de una funcion: 1-busca valores dentro de la misma, sino 2-busca valores relacionados
// con su llamada, sino 3- busca valores fuera de la funcion, sino 4-undefined.
// La palabra reservada "let" tiene igual valor sin encontrarse esta en una funcion, por ejemplo en un "if", por lo que buscar
// su valor fuera del if no da resultado.
/////////////////////////////

var res1 = 6 / "3"          // 2
var res2 = "2" * "3"        // 6
var res3 = 4 + 5 + "px"     // error(mal), resultado: 9px (los primeros valores son num, luego un string y lo deja como tal)
                            // Si se le agregaran mas valores numericos posteriores al "px" estos se tomarían como strings
var res4 = "$" + 4 + 5      // $9(mal) resultado:$45(el primero valor es string, por lo tanto para 4 y 5 de la misma forma)
var res5 = "4" - 2          // 42(mal) resultado:2(al no ser suma el primer string no toma peso y pasa a ser numero)
var res6 ="4px" - 2         // 2px(mal) resultado:NaN (ya que mezlca numero con palabra en un mismo string, javascript no toma al 4
                            // como numero, por lo que esta resta la considera invalida, sin poder declararse el numero)
var res7 = 7 / 0            // undefined(mal, aunque este es el resultado de google) resultado: Infinity
var res8 = {}[0]            // undefined        
var res9 = parseInt("09")   // 9
var res10 = 5 && 2          // False(mal) resultado: 2 (al parecer toma el último numero)
var res11 = 2 && 5          // False(mal) resultado: 5
var res12 = 5 || 0          // True(mal) resultad: 5 (al parecer toma el primero numero verdadero. Si el primero es verdadero no 
                            // hace falta seguir con el segundo)
var res13 = 0 || 5          // True (mal) resultado: 5 (toma el numero que sea verdadero)
var res14 = [3]+[3]-[10]    // -4(mal) resultado:23 (hace un proceso donde todo array que tiende a sumarse se toma como string, pero
                            // si se resta se toma como numero y arroja un resultado diferente)
var res15 = 3>2>1           // True(mal) resultado: false (al hacer la comparacion con otro numero que no sea 1 en la tercera posicion
                            // arroja true encaso de seguir poniendo numeros inferiores a 2, a excepcion de 1)
var res16 = [] == ![]       // True

console.log(res16)

/////////////////////////////

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
 // Arroja undefined en el primer console.log(a) debido a que la "var a" está defidina abajo, por ende se guarda su valor pero al momento
 // de ejecutar su valor no se recibe porque no encuentra su valor en lineas superiores al mismo aunque tenga un espacio guardado.
 // Arroja 2 ya que en memoria se guarda la funcion entera, por lo que al hacer ese console.log(foo()) dará su return como resultado.
 
 /////////////////////////////

 var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// Aunque quokka no arroje datos, getFood(false) debería arrojar "undefined" ya que al ser la funcion false me devuelve "snack", pero 
// esta al estar asignada fuera de la funcion no devuelve valor, por lo que no hay valor definido.

//////////////////////////////

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// El primer console.log(obj.prop.getFullname()) da "Aurelio de Rosa" debido a que "this" hace referencia a la funcion "getFullname",
// por lo que "this.fullname" llamará a la primera propiedad fullname que encuentre inmediatamente, la cual es del "prop", sino dará
// undefined (en caso que no encuentre en prop)
// El segundo console.log(test()) da "undefined" debido a que test no es una funcion,por lo que da indefinido.......... (PREGUNTAR)

///////////////////////////////

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
printing();

// los console.log()iran del 1 al 4 en orden ya que el setTimeout da un tiempo de espera pero se procesa primero uno y luego los demas
// con diferencias de tiempo (mal)
// Se correrán los console.log() que no tengan un setTimeout para correr la funcion, luego se corren estos ultimos en funcion del tiempo
// que dispongan (uno lo corre en 0 ms y el otro en 1000 ms) por lo que 3 correrá antes que 2.
