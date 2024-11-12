'use strict';
/* declarar las variables usando var(descontinuado) - let - const
let user
let age
let isStudent */

/* asignacion
user = 'Pepe'
age = 22
isStudent = true */

//EL ESTANDAR ES: DECLARACIÓN + ASIGNACIÓN
let user = 'Pepe';
let age = 22;
//ejemplo de camelCase, se usa por CONVENIO
let isStudent = true;

//Los LET se pueden REASIGNAR, no se pueden volver a declarar dentro del mismo módulo
user = ' Jose ';

//CONST: No se pueden reasignar, se tienen que asignar al inicio sí o sí

const course = 'JavaScript';

/* Esto daría un error, ya que los CONST NO se pueden reasignar
course = 'Python'*/

//EJEMPLO DE VARIBALE EN LA CONSOLA
let emotionalState = '👺';
console.log(emotionalState);

let score = 5 + 4;

let newScore = 3 * score;
let otherScore = newScore;
newScore = 54;

console.log(newScore); //54
console.log(otherScore); //27

const foo = newScore > otherScore;
console.log(foo); //true

console.log(newScore == otherScore); //false

console.log(2 == '2'); //false? NO, da true por los castings internos que nadie sabe en realidad, por ello se recomienda el operador de igualdad estricto: '==='
//Con '==='
console.log(2 === '2'); // false
console.log(Number(2) === Number('2')); //true!!

// CONCATENACIÓN

const firstName = 'Pablo';
const surname = 'Gonzalez';
const fullName = firstName + ' ' + surname;
console.log(fullName); // Pablo Gonzalez

// TEMPLATE STRING, para interpolar variables
console.log(`Hola, soy ${firstName} ${surname}`);

// '+' esta sobrecargada, normalmente suele predominar una concatenación
const a = 2;
const b = '2';
console.log(a * b); //4
console.log(a + b); //22
//Para ello siempre se debe de fijarse que las variables tengan datos numericos a la hora de realizar operaciones matemáticas con ello
console.log(Number(a) + +b); //4
console.log((Number(a) + +b) * 2); //8

console.log(3 ** 3);

let e = 23;

console.log(e++); //23
console.log(e); //24

e = 23;
console.log(++e); //24

//OPERADORES LOGICOS
//coercion
let v1 = 3;
let v2 = '4';
//coercion a number de la variable v2
console.log(v1 * v2);
console.log(typeof v2); //string
// coercion a string de la variable v1
console.log(v1 + v2); //'34'
console.log(typeof v1); // number
// casting a number de la variable v2
console.log(v1 + Number(v2)); //7
console.log(true + false); // 1

// Booleans
// if califica lo que coloques entre parentesis como si fuera un boolean

//Falsies: Cuando se encuentran en IF/boolean evaluan a FALSE
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n)); //BIGin
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
