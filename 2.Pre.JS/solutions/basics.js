// 1.- Imprime por consola l string 'Hello World'
// Primer método
console.log('Hello World');
//segundo método
/* + */

// 2.- Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
let var1 = 'var left';
const var2 = 'var right';
console.log(var1, var2);

// 3.- Cambia ahora el valor de una de las dos variables e imprime por consola.
var1 = 'I dont wanna be left hand';
console.log(var1);

// 4.- Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
const num1 = 5;
const num2 = 8;
console.log(num1 + num2); //13

// 5.- Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
const firstName = 'Amador';
const surName = 'Rivas';
console.log(firstName + ' ' + surName);
console.log(`${firstName} ${surName}`);

// 6.- Crea una función que imprima por consola el string 'Hello World'.
function render(value) {
    console.log(value);
}
render('Hello World...');

// 7.- Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
// a y b son PARÁMETROS
function multiplication(a, b) {
    const op = a * b;
    console.log(op);
    return op;
}
multiplication(3, 4); // ARGUMENTOS: 3, 4

// 7.b- Crea una función que calcule el resultado de la multiplicación de dos números introducidos como parámetros. Invocala e imprime por consola usando la FUNCION DEL EJERCICIO 6
function multi(a, b) {
    return a * b;
}
render(multi(8, 9));

// const w = 12;
// const z = 3;
// debugger;
// multiplication(w, z);

// 8.- Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function cube(a) {
    const result = a ** 3;
    return result;
}
render(cube(3));

// 9.- Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function rectangleArea(base, height) {
    const area = base * height;
    return area;
}
render(rectangleArea(8, 6));

// VARIABLE DISCRIMINATORIA
function areaRectangleOrTriangle(base, height, isRectangle) {
    /* let area;
    if (isRectangle === true) {
        area = base * height;
    } else {
        area = (base * height) / 2;
    }
    return area; */

    /* //SIMPLIFICACION CON IF, se elimina el true porque en si JS asume que una condicional es verdadera en un IF, luego, como la variable 'area' no es necesaria de guardar
        se puede omitir, devolviendo la operación con un return
    if (isRectangle) {
        return base * height;
    }
    return (base * height) / 2; */

    //OPERADOR TERNARIO
    return isRectangle ? base * height : (base * height) / 2;
}
render(areaRectangleOrTriangle(3, 3, false));
render(areaRectangleOrTriangle(3, 3, true));

// 10.- Crea una función que imprima por consola un número ENTERO al azar entre 0 y 10. Se usa MATH.random()

//Esta puede no incluir CERO
function randomNumberOneToTen() {
    // FIJATE MAS ACA:
    return Math.floor(Math.random() * 9 + 1);
}
render(randomNumberOneToTen());

// Esta SI puede incluir al CERO
function randomNumber() {
    return Math.floor(Math.random() * 10);
}
render(randomNumber());

// 11.- Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// en consola: npm i prompt-sync
const prompt = require('prompt-sync')({ sigint: true });
function guessNumber() {
    const expected = randomNumberOneToTen();
    const userNumber = prompt('Elija un número entre el 1 al 10: ');
    const isCorrect = expected === userNumber;
    const result = isCorrect
        ? 'HAS ACERTADO!'
        : `MÁS MALO QUE CAGAR PA DENTRO!! EL NÚMERO ERA: ${expected}`;
    render(result);
}
guessNumber();

/* function guessNumberII() {
    const expected = randomNumberOneToTen();
    const userOption = prompt('Dime un número del 1 al 10');
    const isCorrect = expected === Number(userOption);
    const result = isCorrect
        ? 'HAS ACERTADO!'
        : `ERES MAS MALO QUE ACAVANI! EL NÚMERO ERA: ${expected}`;
    render(result);
}
guessNumberII(); */

// 12.- Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function evenOrOdd(num) {
    // EJEMPLO DE PROGRAMAMCIÓN DEFENSIVA: Se debe de utilizar para evitar anidar bloques dentro de bloques
    // SI NO ES ENTERO
    if (!Number.isInteger(num)) {
        return `${num} no es un número ENTERO`;
    }
    let result = `${num} es un número IMPAR`;
    if (num % 2 === 0) {
        result = `${num} es un número PAR`;
    }
    return result;
}
render(evenOrOdd(0.5));
render(evenOrOdd(2));
render(evenOrOdd(Infinity));
console.log(
    '------------------------------------------------------------------------------------'
);

// 13.- Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).
function reverseChain(cad) {
    // return cad.split('').reverse().join(''); -> Forma reducida usando métodos
    // forma usando bucles con acumuladores e iteraciones
    let accumulator = '';
    for (let i = cad.length - 1; i >= 0; i--) {
        const iterator = cad[i];
        accumulator += iterator;
    }
    return accumulator;
}
render(reverseChain('Carmen de Mairena'));
console.log(
    '------------------------------------------------------------------------------------'
);

// Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
function multiplicationTable(num) {
    let accumulator = 0;
    for (i = 0; i <= 10; i++) {
        accumulator = num * i;
        render(`${num} x ${i} = ${accumulator}`);
    }
    return accumulator;
}
multiplicationTable(2);

console.log(
    '------------------------------------------------------------------------------------'
);

// Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
function isPrimeNumber(num) {
    // Si no es menor o igual de 0
    if (!Number.isInteger(num) || num <= 0) {
        return `El número ${num} es un valor NO VÁLIDO`;
    }

    if (num < 2) return false;

    // ES PRIMO SI: ES MAYOR QUE 1 Y SI TIENE 2 DIVISORES DISTINTO: EL MISMO Y 1
    for (let i = 2; i < num / 2; i++) {
        // num % i = num%2, num%3, num%4, num%..., num%num-1
        if (num % i === 0) return false;
    }
    return true;
}

function renderIsPrimeNumber(num) {
    let result = isPrimeNumber(num);
    if (typeof result === 'boolean') {
        result = result ? 'Es primo' : 'No es primo';
    }
    console.log(num, result);
}

renderIsPrimeNumber(-1);
renderIsPrimeNumber(0);
renderIsPrimeNumber(1);
renderIsPrimeNumber(2);
renderIsPrimeNumber(9);
