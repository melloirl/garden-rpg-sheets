//Variáveis de cor.
lifegreen = "rgba(88, 178, 74, 0.5)";
manablue = "rgba(120, 162, 201, 0.5)";
energyred = "rgba(201, 131, 131, 0.5)";

// Declaração das barras a serem carregadas, busca pelo id no documento.
const H = 33;
const W = 246;

const lifebar = document.getElementById("life-bar");
const lifecontext = lifebar.getContext("2d");

const manabar = document.getElementById("mana-bar");
const manacontext = manabar.getContext("2d");

const energybar = document.getElementById("energy-bar");
const energycontext = energybar.getContext("2d");

lifebar.height, manabar.height, (energybar.heigth = H);
lifebar.width, manabar.width, (energybar.width = W);

//Declaração da foto de perfil a ser carregada, busca pelo id no documento.
const profilepicture = document.getElementById("profile-image");

//Informações do Personagem
const maxHealth = 800;
const maxMana = 8000;
const maxEnergy = 200;

let health = maxHealth;
let mana = maxMana;
let energy = maxEnergy;

const x = 0;
const y = 0;

const healthBar = new Bar(
  x,
  y,
  W,
  H,
  health,
  lifegreen,
  `             ${"VIDA: " + health}            `
);
const manaBar = new Bar(
  x,
  y,
  W,
  H,
  mana,
  manablue,
  `             ${"MANA: " + mana}            `
);
const energyBar = new Bar(
  x,
  y,
  W,
  H,
  energy,
  energyred,
  `             ${"ENERGIA: " + energy}            `
);

const frame = function () {
  lifecontext.clearRect(0, 0, W, H);
  manacontext.clearRect(0, 0, W, H);
  energycontext.clearRect(0, 0, W, H);

  healthBar.show(lifecontext);
  manaBar.show(manacontext);
  energyBar.show(energycontext);

  requestAnimationFrame(frame);
};

lifebar.onclick = function () {
  losthealth = prompt("Quanta vida foi perdida?");

  health -= parseFloat(losthealth);

  if (health <= 0) {
    health = 0;
    profilepicture.style.filter =
      "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(0.9)";
  }

  healthBar.updateVal("VIDA: ", health);
};

manabar.onclick = function () {
  lostmana = prompt("Quanta mana foi perdida?");

  mana -= parseFloat(lostmana);

  if (mana < 0) {
    mana = 0;
  }

  manaBar.updateVal("MANA: ", mana);
};

energybar.onclick = function () {
  lostenergy = prompt("Quanta energia foi perdida?");

  energy -= parseFloat(lostenergy);

  if (energy < 0) {
    energy = 0;
  }

  energyBar.updateVal("ENERGIA: ", energy);
};

frame();
