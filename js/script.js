const element = document.getElementById("typewrite");

const NAME = "Kauã Miranda";
const ROLE = "Backend Developer";

const TYPE_SPEED = 50;
const DELETE_SPEED = 35;

const NAME_DELAY = 3000;
const ROLE_DELAY = 25000;


// Definir funcao de espera:
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Escrever na tela:
async function typeText(text) {
  element.textContent = "";

  for (const letter of text) {
    element.textContent += letter;

    await sleep(TYPE_SPEED);
  }
}



