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

// Deleta o texto para sobrescreve-lo 
async function deleteText() {
  
  while (element.textContent.length > 0) {

    element.textContent = element.textContent.slice(0, -1);
    await sleep(DELETE_SPEED);
  }
}

async function animation() {

  while (true) {

    await typeText(NAME);
    await sleep(NAME_DELAY);

    await deleteText();

    await typeText(ROLE);
    await sleep(ROLE_DELAY);

    await deleteText();
    // Repete o loop a cada 30 segundos
  }
}

animation();
console.log(element)
