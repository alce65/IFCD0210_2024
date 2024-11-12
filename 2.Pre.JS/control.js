// EJEMPLO DE BLOQUES Y COMO SE COMPORTAN LAS VARIABLES DENTRO DE ELLOS
// let y const tienen un ÁMBITO DE BLOQUE
let a = 4; // -> AMBITO SUPERIOR
if (true) {
    let a = 5;
    console.log('Desde el bloque IF ', a); //5 -> AMBITO DE LA FUNCIÓN (BLOQUE)
}
console.log('Desde global ', a); // 4 -> AMBITO GLOBAL
console.log(
    '------------------------------------------------------------------------------------'
);

// BLOQUE IF - ELSE
// Son mutuamente exlcuyentes, si se cumple alguna de las funciones deja de recorrer el codigo
const age = 10;
const userName = 'Pepe';
const gender = 'male';
if (age <= 10) {
    console.log('Los niños no pueden entrar');
} else if (age < 18) {
    console.log('Los menores deben de ir acompañados');
} else if (gender === 'male') {
    console.log(`Bienvenido ${userName}`);
} else {
    console.log(`Bienvenida ${userName}`);
}
console.log('FIN!');
console.log(
    '------------------------------------------------------------------------------------'
);

// BLOQUE SWITCH. SUELE FUNCIONAR MEJOR SI SE TRABAJA SOLO CON UNA VARIABLE DISCRIMINANDO LOS CASOS Y QUE SEA DISCONTINUO, SIN COMPLICACIONES
const language = 'Hu';
let greeting;
switch (language) {
    case 'En':
        greeting = 'Hello dude';
        break;
    case 'Es':
        greeting = 'Hola amigo';
        break;
    case 'Fr':
        greeting = 'Salut mon ami';
        break;
    case 'De':
        greeting = 'Hallo Freund';
        break;
    default:
        greeting = 'Hi';
        break;
}
console.log(greeting);
console.log(
    '------------------------------------------------------------------------------------'
);

// FOR: Queremos tirar un dado 10 veces
// const min = 1;
// const max = 6;
// for (let i = 0; i < 10; i++) {
//     const res = Math.round(Math.random() * (max - min) + min);
//     console.log(res);
// }

// console.log(Math.trunc(Math.random() * 5 + 1));
/* function rollDiceN(num) {
    // En JS se suele empezar a contar desde cero
    for (let i = 0; i < num; i++) {
        console.log(Math.round(Math.random() * 5 + 1));
    }
}
rollDiceN(30); */

//El mismo ejercicio pero queriendo saber la suma de todas las tiradas...
/* function rollDiceN(num) {
    // ... para ello se utiliza un acumulador, siempre debe de ser un let
    let accumulator = 0;
    // En JS se suele empezar a contar desde cero
    for (let i = 0; i < num; i++) {
        const dice = Math.round(Math.random() * 5 + 1);
        console.log(`Valor del dado: ${dice}`);
        // Enunciado que sirve para acumular datos: accumulator = accumulator + dice
        accumulator += dice;
    }
    console.log('Total:', accumulator);
}
rollDiceN(5); */

//EJEMPLO DE BUCLE FOR INVERSO
function rollDiceN(num) {
    let accumulator = 0;
    // En JS se suele empezar a contar desde cero
    for (let i = num; i > 0; i--) {
        const dice = Math.round(Math.random() * 5 + 1);
        console.log(`Valor del dado: ${dice}`);
        // Enunciado que sirve para acumular datos: accumulator = accumulator + dice
        accumulator += dice;
    }
    console.log('Total:', accumulator);
}
rollDiceN(5);
console.log(
    '------------------------------------------------------------------------------------'
);

// strings son ... BUCLES ITERABLES DE LECTURA, no se pueden modificar
const cad = 'Hola que tal';
console.log(cad.length);
// ESTO ES UN ERROR: cad[3] = 'r';
console.log(cad[3]);
console.log(
    '------------------------------------------------------------------------------------'
);

//BUCLE QUE RECORRE UNA CADENA
for (let i = 0; i < cad.length; i++) {
    const element = cad[i];
    console.log(element);
}
