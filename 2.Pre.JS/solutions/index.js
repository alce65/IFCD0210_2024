console.log("Index Loaded");
// Funcion
function greeting() {
  const question = "¿Cómo te llamas?";
  const userName = prompt(question);

  /* Estructura de control IF. Aplicación usando LÓGICA NEGATIVA, suele ser una mala practica
    if(userName !== null || userName === '') {
        const response = `Hola, ${userName}, qué tal estas?`
        alert(response)     
    }  */

  // Estructura de control IF. Aplicación usando LÓGICA POSITIVA
  if (userName === null || userName === "") return;
  const response = `Hola, ${userName}, qué tal estas?`;
  alert(response);
}

// DOM: Es la forma de comunicación entre JS y HTML
const button = document.querySelector("form button");
// addEventListener
button.addEventListener("click", greeting);
