const lifebar = document.getElementById("lifebar");
lifebar.height = 50
lifebar.width = 300
const manabar = document.getElementById("manabar");
manabar.height = 50
manabar.width = 300
const energybar = document.getElementById("energybar");
energybar.height = 50
energybar.width = 300
const profilepicture = document.getElementById("profile-image");
const energycontext = energybar.getContext("2d");
const manacontext = manabar.getContext("2d");
const lifecontext = lifebar.getContext("2d");
const width = 500;
const height = 150;

const maxHealth = 800;
const maxMana = 8000;
const maxEnergy = 200;

let health = maxHealth;
let mana = maxMana;
let energy = maxEnergy;

const barWidth = 246;
const barHeight = 33;
const x = 25;
const y = 10;

const healthBar = new Bar(x,y,barWidth,barHeight,health,"#58B24A",`             ${"VIDA: "+health}            `);
const manaBar = new Bar(x,y,barWidth,barHeight,mana,"#78A2C9",`             ${"MANA: "+ mana}            `);
const energyBar = new Bar(x,y,barWidth,barHeight,energy,"#C98383",`             ${"ENERGIA: "+energy}            `);

const frame = function(){
    energycontext.clearRect(0,0,width,height);
    manacontext.clearRect(0,0,width,height);
    lifecontext.clearRect(0, 0, width, height);
    energyBar.show(energycontext);
    manaBar.show(manacontext);
    healthBar.show(lifecontext);
    requestAnimationFrame(frame);
}

lifebar.onclick = function(){
    losthealth = prompt("Quanta vida foi perdida?");

    health-= parseFloat(losthealth);

    if(health<=0){
        health = 0;
        profilepicture.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(0.9)";
    }


    healthBar.updateVal('VIDA: ',health);
    
    
}

manabar.onclick = function(){
    lostmana = prompt("Quanta mana foi perdida?");

    mana-= parseFloat(lostmana);

    if(mana<0){
        mana = 0;
    }

    manaBar.updateVal('MANA: ',mana);
    
}

energybar.onclick = function(){
    lostenergy = prompt("Quanta energia foi perdida?");

    energy-= parseFloat(lostenergy);

    if(energy<0){
        energy = 0;
    }

    energyBar.updateVal('ENERGIA: ',energy);
}


frame();
