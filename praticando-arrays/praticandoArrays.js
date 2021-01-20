alert("index.js");

const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

const nineCrew = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => spaceship[0]);

const pendingHitch = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

const highlightShipName = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

const message = `
    Ships with more than crew: ${nineCrew.join(", ")}

    First ship with hitch pending on the platform: ${pendingHitch + 1}
    
    Highlighted ships name 
    ${highlightShipName.join(", ")}
`;

alert(message);
