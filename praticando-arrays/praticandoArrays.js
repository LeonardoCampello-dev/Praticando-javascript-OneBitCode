alert("Entrei em index.js")
//Sub-array: [Ship name, Crew, Coupling process ]
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let nineCrew = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9

}).map(spaceship => {

    return spaceship[0]
})

let pendingHitch = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightShipName = hitchedSpaceships.map(function (spaceship) {
    return spaceship[0].toUpperCase()
})


let message = (
    "Ships with more than new crew: " + nineCrew.join(', ') +
    "\nFirst ship with hitch pending on the platform: " + (pendingHitch + 1) +
    "\nHighlighted ships name: " + highlightShipName.join(', ')
)

alert(message)

//O metódo join() vai pegar os Arrays e juntar com uma String que nós passamos como parâmetro