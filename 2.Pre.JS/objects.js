'use strict';
// OBJETOS LITERALES.- Referente a las colecciones de datos

// JSON es la declaración de los objetos (en este caso, user) con sus respectivas propiedades, que estarán entre comillas
const user = {
    userName: 'Pepe',
    age: 22,
};

// console.log(user.userName);

// NO PUEDO REASIGNAR VALORES A UN OBJETO DEBIDO A QUE SON INMUTABLES, POR ELLO LA SIGUIENTE LINEA NOS DARA TYPEERROR EN LA CONSOLA
// user = {};

// LO BUENO ES QUE SE PUEDE "REASIGNAR" VALORES A LAS PROPIEDADES DE UN OBJETO, HACIENDO REFERENCIAS A ELLAS, HASTA SE PUEDEN ELIMINAR. A ESTO SE LE LLAMA MUTACIÓN
// Siempre los objetos deben de ser declarados como un CONST, para evitar reasignacions no deseadas
const student = {
    userName: 'Diego',
    age: 12,
    color: 'white',
};
student.age = 13;
student.course = 'web';
delete student.color;
console.log(student);

// ARRAYS de JS: Se les puede añadir propiedas, quitar propiedades, se tratan como objetos pero en este caso usan []
const data = ['Pepe', 'Juan', 'Rosa', 'Ernestina'];
console.log(data[0]);
data[0] = 'Jose';
console.log(data[0]);
console.log(data.length);
data[data.length] = 'Francisco';
console.log(data.length);
console.log(data);
// Se le puede añadir propiedades dentro del array, ya que son como un objeto. Esto no afecta en la length del array
data.use = 'List of names';
console.log(data);
console.log(data.length);
console.log(typeof data);

const course = 'Web Developer';
console.log(course.toUpperCase());

//Los arrays deben de estar declarados SIEMPRE en PLURALES
const numbers = [1, 2, 4, 6, 10, 8];

// Métodos de ARRAYS:
// MUTABLES: Modifican directamente al array donde se aplican
// numbers[numbers.length] = 45
console.log(
    '------------------------------------------------------------------------------------'
);
// PUSH: Mete un elemento, que debes de rellenar como parámetro, al final del array
let l = numbers.push(4);
console.log('EJEMPLO PUSH: ', l, numbers);

// POP: Elimina el último elemento del array seleccionado. No acepta parámetros
let number = numbers.pop();
console.log('EJEMPLO POP: ', number, numbers);

// UNSHIFT: Introduce un elemento, que debes de rellenar como un parámetro, al inicio del array
l = numbers.unshift(45);
console.log('EJEMPLO UNSHIFT: ', l, numbers);

// POP: Elimina el último elemento del array seleccionado. No acepta parámetros
number = numbers.shift();
console.log('EJEMPLO SHIFT: ', number, numbers);

// SORT: Ordena los elementos de mayor a menor ALFABETICAMENTE, por ejemplo en este caso "[1,2,10,3,8,5]" uno esperaria: [1,2,3,5,8,10], pero realiza esto: [1,10,2,3,5,8]
// numbers.sort();
// console.log('EJEMPLO SORT', numbers);

console.log(
    '------------------------------------------------------------------------------------'
);

// INMUTABLES: No modifican el array original

// JOIN: Crea un string con los valores del array con un separador predeterminado o seleccionado por el usuario como si fuera un parámetro
const numString = numbers.join(' - ');
console.log('EJEMPLO JOIN: ', numString);

// toSORTED: Devuelve un nuevo array ordenado, sin modificar el original
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(numbers);
console.log(sortedNumbers);

console.log(
    '------------------------------------------------------------------------------------'
);

// ARRAYS MULTIDIMENSIONALES
const matrix = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400],
];

// Esta matriz se puede ver como una tabla que tiene FILAS (rows) y COLUMNAS (cols)
const rows = matrix.length;
const cols = matrix[0].length;

console.log(rows); // imprime 3
console.log(cols); // imprime 4
// Imprimo '20' en la consola. Seleciono la ubicacion del primer array de matrix y de ahi la ubicacion de 20 en ese array
console.log(matrix[1][1]); // 20

console.log(
    '------------------------------------------------------------------------------------'
);

// Para recorrer toda esta matriz de datos se puede y debe utilizar BÚCLES ANIDADOS
let accumulator = 0;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const element = matrix[i][j];
        accumulator += element;
        console.log(element);
    }
}
console.log(accumulator);
