console.log("speed mapping on");

let spaceship = {
  name: prompt("What is the name of the spacecraft?"),
  type: prompt("What type?"),
  maxVelocity: prompt("What is the maximum speed? (km/s)"),
  velocity: 0,
};

function showMenu() {
  alert("Speed Mapping App");
  option = prompt("Would you like to speed up or stop the spaceship? [u/s]");

  return option;
}

speedUp = (velocity) => {
  let acceleration = Number(prompt("How much do you want to accelerate?"));

  velocity += acceleration;

  return velocity;
};

do {
  option = showMenu();

  if (option == "u") {
    spaceship.velocity = speedUp(spaceship.velocity);

    console.log(spaceship.velocity);
  }

  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(`
            Spaceship speed: ${spaceship.velocity} km/s
            Maximum speed allowed: ${spaceship.maxVelocity} km/s
        `);

    alert("Automatic speed control activated: Set to safe speed.");

    spaceship.velocity = spaceship.maxVelocity - 20;
  }
} while (option == "u");

alert(`
    SPACESHIP STATS

    Name: ${spaceship.name}
    Type: ${spaceship.type}
    Last speed record: ${spaceship.velocity} km/s
`);
