/*const arrayfib=[] //Se declara un array que va a contener los numeros de fibonacci
function fibonacci(numero){ //Funcion recursiva que permite calcular fibonacci
  if (numero<=1){ //Caso base
    return numero;
  }
  return fibonacci(numero-1)+fibonacci(numero-2);//Llamada recursiva
}

for (let i =0;i<=20;i++){
  arrayfib.push(fibonacci(i)); // Llena el array con los numeros de fibonacci generados por la funcion 

}
const arrayPar=arrayfib.filter(element => element % 2 ==0); //Entrega un array con los valores pares 
const arrayImpar=arrayfib.filter(element => element % 2 !=0); //Entrega un array con los valores impares 
console.log(arrayfib);//Se muestran los arrays 
console.log(arrayPar);
console.log(arrayImpar);

let pokemon=[ 'Pikachu','Charmander','Bulbasaur','Squirtle']; //Array con los nombres de pokemones
const mayuscula=pokemon.map(element => element.toUpperCase()) //Se emplea map para que nos retorne un array con los elementos del array original en mayuscula
console.log (mayuscula);*/ //Se muestra por consola

let pokemon = [ //Objeto que contiene el nombre y tipo de los pokemones
  {
  nombre: 'Pikachu',
  tipo: 'Electrico'
  },
  {
  nombre: 'Charmander',
  tipo: 'Fuego',
  },
  {
  nombre: 'Bulbasaur',
  tipo: 'Planta'
  },
  {
  nombre: 'Squirtle',
  tipo: 'Agua'
  },
  {
  nombre: 'Charmeleon',
  tipo: 'Fuego'
  },
  {
  nombre: 'Weedle',
  tipo: 'bicho'
  },
  {
  nombre: 'Charizard',
  tipo: 'Fuego'
  }
 ];
function tipofuego(pokemon){ //Funcion la cual permite el filtro de los pokemones tipo fuego
  if (pokemon.tipo== "Fuego"){ //Si es tipo fuego, retorna un verdadero
    return true;
  }
}

const tipoFuegoArray= pokemon.filter(tipofuego); //Reliza un filtro empleando la funcion anterior y nos retorna los pokemones tipo fuego
console.log(tipoFuegoArray); //Se muestra por consola
