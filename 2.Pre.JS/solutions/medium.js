// 1.- Crea una función que elimine el primer y último caracter de un string recibido por parámetros.
function removeLastFirstString(value = '') {
    let result = '';
    // Inicializo i en 1 para solo coger el SEGUNDO valor del array y defino value.lenght - 1 para acumular hasta el penultimo lugar del array
    for (let i = 1; i < value.length - 1; i++) {
        result += value[i];
    }

    /* // SLICE: Sirve para rebanar el string que le des teniendo 2 parametros como limites, en este caso, rebana y devuelve lo que esta dentro de 1 y value.length-1
    const sliceR = value.slice(1, value.length - 1);
    const subStringR = value.substring(1, value.length - 1); */
    return result;
}
console.log(removeLastFirstString('Patata'));

console.log(
    '------------------------------------------------------------------------------------'
);

// 2.- Escribe una función que reciba una palabra y revise si es un palíndromo.
// IMPORT la funcion desde el fichero 'basics'
/* import { revertStringByArray } from './01.basics';
function isPalindrome(value = '') {
    const valueLowerCase = value.toLocaleLowerCase;
    // Modulos nativos : Convertir un modulo en un fichero para exportar e importar cosas. Se usan con export o import
    const inverseValue = revertStringByArray(valueLowerCase);
    return valueLowerCase === inverseValue;
} */

function revertStringByArray(value = '') {
    return value.split('').reverse().join('');
}

function removeSpaces(value = '') {
    return value.replaceAll(' ', '');
}

function removeAccents(value = '') {
    const validVowels = 'aeiou';
    const invalidVowels = 'áéíóúü';
    const characters = value.split('');
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        if (invalidVowels.includes(character)) {
            // usando un switch
            switch (character) {
                case 'á':
                    characters[i] = validVowels[0];
                    break;
                case 'é':
                    characters[i] = validVowels[1];
                    break;
                case 'í':
                    characters[i] = validVowels[2];
                    break;
                case 'ó':
                    characters[i] = validVowels[3];
                    break;
                case 'ú':
                case 'ü':
                    characters[i] = validVowels[4];
                    break;
            }
        }
    }
    return characters.join('');
}

function removeAccentsPro(value = '') {
    // creamos un diccionario de equivalencias
    const vowels = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ü: 'u',
    };
    const invalidVowels = 'áéíóúü';
    const characters = value.split('');
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        if (invalidVowels.includes(character)) {
            //
            characters[i] = vowels[character];
        }
    }
    return characters.join('');
}

function isPalindrome(value = '') {
    // pasamos la frase a minusculas
    const valueLowerCase = value.toLocaleLowerCase();
    // quitamos espacios
    // 1.- Usando el string
    const noSpacesValues = removeSpaces(valueLowerCase);

    /* // 2.- Usando métodos de array, conviritendo el string en array
    // usando el split(' ') coge como separadores a los espacios vacios que haya en el string otorgado
    const noSpacesValues = valueLowerCase.split(' ').join('') */

    // quitamos tildes
    const noAccentsValue = removeAccentsPro(noSpacesValues);

    // revertimos el string
    const inverseValue = revertStringByArray(noAccentsValue);

    // los comparamos
    return noAccentsValue === inverseValue;
    // return true => es un falso positivo
}

let sample = 'Dábale arroz a la zorra el abad';
console.log(`'${sample}' es un palindromo? ${isPalindrome(sample)}`);

console.log(
    '------------------------------------------------------------------------------------'
);

// 3.- Crea una función que cuente las vocales que contiene una palabra dada por parámetros. NOTA: Los parámetros no se deben de cambiar el valor
function countVowels(value = '') {
    let accumulator = 0;
    // se debe de utilizar un array de strings para usarlo dentro del IF
    // const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'];

    // Ahora, como include no solo esta incluido en los Arrays, tambien se puede asignar un string con todas las vocales requeridas y el programa funciona igual
    const vowels = 'aeiouáéíóúü';

    // vowels.normalize(): Limpia de acentos al string

    for (let i = 0; i < value.length; i++) {
        // item es el valor de value que se este checkeando en ese momento. toLocaleLowerCase transforma lo que entre en minuscula
        const item = value[i].toLocaleLowerCase();

        /* // usando IF
        if (vowels.includes(item)) {
            accumulator++;
        } */

        // USANDO MÉTODOS. Inclludes devuelve un boolean, que tiene cohersion con los valores tipo number (true = 1 / false = 0), y se pueden añadir a un acumulador
        accumulator += vowels.includes(item);
    }
    return accumulator;
}

console.log(countVowels('El Murciélago Verde'));

console.log(
    '------------------------------------------------------------------------------------'
);

// 4.- Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).
function isPangram(value = '') {
    const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    let validValue = value.toLocaleLowerCase();
    validValue = removeAccentsPro(validValue);
    validValue = removeSpaces(validValue);
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        // se suelen usar los ifs para operaciones logicas booleanas
        if (!validValue.includes(letter)) {
            return false;
        }
    }
    return true;
}

sample =
    'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja';
console.log(`'${sample}' es un pangrama? ${isPangram(sample)}`);

// 5.- Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

// 6.- Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

console.log(
    '------------------------------------------------------------------------------------'
);

// 7.- Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.
// Igualamos el parámetro a cero para declararlo como un numero
function calculateAge(yearOfBirth = 0) {
    const today = new Date();
    actualYear = today.getFullYear();
    return actualYear - yearOfBirth;
}

console.log(`Tienes ${calculateAge(2000)} años`);

console.log(
    '------------------------------------------------------------------------------------'
);

// 8.- Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.
function isAdult(yearOfBirth) {}

// 9.- Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

// 10.- Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

// 11.- Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.
function renderStonePaperOrScissors(userRoll = '') {
    // Objeto rolls
    const rolls = ['piedra', 'papel', 'tijera'];

    // este if verifica si el usuario ha elegido una opcion idonea
    if (!rolls.includes(userRoll)) {
        console.log('Tirada invalida');
        return;
    }

    const rollNumber = Math.round(Math.random() * 2);
    const machineRoll = rolls[rollNumber];

    let winner = 'user';
    if (userRoll === machineRoll) {
        winner = 'empate';
    } else if (userRoll === 'piedra') {
        if (machineRoll === 'papel') {
            winner = 'machine';
        }
        // machineRoll = 'tijera'; // winner user
    } else if (userRoll === 'papel') {
        if (machineRoll === 'tijera') {
            winner = 'machine';
        }
        // machineRoll = 'piedra';
    } else {
        // tijera
        if (machineRoll === 'piedra') {
            winner = 'machine';
        }
        // machineRoll = 'papel';
    }

    console.log('Tú opción: ', userRoll);
    console.log('Opción de la IA: ', machineRoll);
    console.log('Ganador: ', winner);
}

function playStonePaperOrScissors() {
    const rolls = ['piedra', 'papel', 'tijera'];
    const rollNumber = Math.round(Math.random() * 2);
    renderStonePaperOrScissors(rolls[rollNumber]);
}

playStonePaperOrScissors();

console.log(
    '------------------------------------------------------------------------------------'
);

// 12.- La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

// 13.- Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

// 14.- Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

// 15.- Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.

// 16.- Crea una función que sume todos los números de un array
function sumNumbersIntoArray(array = '') {
    let accumulator = 0;
    // arguments se refiere a los datos que se coloquen dentro del parentesis de una funcion a la hora de declarar sus parametros
    for (let i = 0; i < arguments.length; i++) {
        accumulator += arguments[i];
    }
    return accumulator;
}
console.log(sumNumbersIntoArray(1, 2, 3, 4));
