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
        chosenOption = prompt(
            'SPACE STATION MENU\n' +
            '1 - Hitch ship \n' +
            '2 - Print ships \n' +
            '3 - Exit'
        )

    } while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3')

    return chosenOption
}

let hitchedSpaceships = new Array()

function registerShip() {
    let spaceshipName = prompt('Whats the name of your ship, pilot?')
    let crewQuantity = prompt('How many crew members?')

    let spaceship = new Spaceship(spaceshipName, crewQuantity)

    return spaceship
}

function printShips(spaceships) {
    let spaceshipList = ``

    spaceships.forEach((spaceship, index) => {
        spaceshipList += `${index + 1} - ${spaceship.name} (${spaceship.crewQuantity} crew)\n`
    })

    alert(spaceshipList)
}

let chosenOption

while (chosenOption != '3') {
    chosenOption = showMenu()

    switch (chosenOption) {
        case '1':
            let addShip = registerShip()
            addShip.hitchProcess()
            hitchedSpaceships.push(addShip)

            break
        case '2':
            printShips(hitchedSpaceships)

            break
    }
}