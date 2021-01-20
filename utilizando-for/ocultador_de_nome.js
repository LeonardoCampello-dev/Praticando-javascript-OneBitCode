let spaceshipName = prompt("What is the name of the spacecraft?");

let newSpaceship = "";

const substitutedCharacter = prompt(
  "Which character in the name of the ship you want to replace?"
);

const newCharacter = prompt("Which new character do you want to replace?");

for (let i = 0; i < spaceshipName.length; i++) {
  if (spaceshipName[i] == substitutedCharacter) {
    newSpaceship += newCharacter;
  } else {
    newSpaceship += spaceshipName[i];
  }
}

alert(`New name of Spaceship: ${newSpaceship}`);
