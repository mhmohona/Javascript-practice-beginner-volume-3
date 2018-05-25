/*
-set the stage/Intro
-Name your character 
-Senario + Options
-Class check vs option requirements
-Outcome
*/
var outcome;
window.alert("One day you wake up and the world as you know has ended. The dead come to life and prey on the living. There is no hope, no cure, only survival. Welcome to the zombie apocalyps. ");
var beginningSenarios = ["You wake up in a hospital. It is early quiet. Ypu tiptoe to the door and peek out.", "You are standing in an open field west of a white house hith a boarded front door. There is a small mailbox here", "Desperate thimes call for desperate measures. You see a small convenience store up sheed and decide to loot it for goods."];

function randomNumber(range) {
    "use strict";
    if(typeof range == "number")
        return Math.round(Math.random() * range);
}

window.alert(beginningSenarios[randomNumber(beginningSenarios.length-1)]);

var character = {
  health: 5,
  strength: 0,
  stealth:0,
    name: window.prompt("What is your name?"),
    charecterClass: window.prompt("These times test the strength of our charecter. What were you before the war? (Choose from: soldier, doctor or politicial)").toLowerCase()
};

if(!character.name){
    character.name = window.prompt("I don't know wht to call you if you don't enter a name. If you dont answer I will be forced to name you yourself.....Last chance. What is your name?");
    
    if(!character.name){
         window.alert("Well I did try to warn you. Gunter Piddles it is then.");
        character.name = "Gunter Piddles";
    }
}

if (character.charecterClass == "soldier")
    character.stealth= 5;
if (character.charecterClass == "politician")
    character.stealth= 5;
if (character.charecterClass == "doctor")
    character.stealth= 7;

var choice = window.prompt("The brave adventurer and former "+ character.charecterClass + " " +character.name + " enters a store for same loot. You notice a zombie slowly shuffling around amougst the destruction, What actioon shall you take? Attack ot attempt to sneak by the zombie? ").toLowerCase();

if(choice == "attack"){
    if(character.stealth == 5) {
        window.alert("Using only your bare hands, you slay that zombie! Success! You loot the store for goods and find an axe, a pack of batteries and three cans of Beanie Weenies.");
        outcome = "Win";
        character.strength++;
    }
        else if(character.strength <=5){
          window.alert("You fearlessly charge the zombie with all your strength. Using your mighty powers you chrush the foe as if it were a sheet of paper you need to shred.");
            window.alert("Just kidding. You are immediately bitten by the ombie and die. But not all the lost -- if time spend together makes one friends, then you and the zombie become best friends, then you together for eternity. The end.");
            outcome = "Lose";
        }
}

if(choice == "sneak" || choice == "sneak by the zombie"){
    if (character.stealth == 5)
        window.alert("You sneak by the zombie, you elever bastard. ");
    if( character.stealth <5){
        windows.alert("You try to slip by the zombie.");
        if(character.stealth == 5){
            window.alert("Although you have alerrted the zombie to your presence you are able to crush it skull with your bare hand.");
            outcome = "win";
        }
        else{
            window.alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction.");
            outcome="lose";
        }
    }
}
if(outcome == "lose")
    window.alert("You lose!");
else 
    window.alert("You win!");