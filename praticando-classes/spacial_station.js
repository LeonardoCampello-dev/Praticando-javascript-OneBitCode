class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.hitched = false
        this.openEntranceDoors = false
    }
    hitchProcess() {
        this.hitched = true
        this.openEntranceDoors = true
    }
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("MENU\n" +
            "1 - Realizar engate \n" +
            "2 - Imprimir espaçonaves \n" +
            "3 - Sair do programa")

    } while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3")
    return chosenOption
}

let hitchedSpaceships = []
let chosenOption

function registerShip() {
    let spaceshipName = prompt("Qual o nome da sua espaçonave, piloto?")
    let crewQuantity = prompt("Quantos tripulantes possui?")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)

    return spaceship
}

function printShips(spaceships) {
    let spaceshipList = ""

    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name +
            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })

    alert(spaceshipList)
}

while (chosenOption != "3") {
    chosenOption = showMenu()

    switch (chosenOption) {
        case "1":
            let addShip = registerShip()
            addShip.hitchProcess()
            hitchedSpaceships.push(addShip)
            break
        case "2":
            printShips(hitchedSpaceships)
            break
    }
}