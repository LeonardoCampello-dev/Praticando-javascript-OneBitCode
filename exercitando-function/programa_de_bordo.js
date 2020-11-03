let spaceshipName = prompt('What is the name of your spaceship?')
let spaceshipVelocity = 0

function OnboardProgram() {
    let option

    while (option != '1' && option != '2' && option != '3' && option != '4') {
        option = prompt(
            'BORDOP PROGRAM\n\n' +

            '1- Accelerate 5 km/s\n' +
            '2- Decelerate 5 km/s\n' +
            '3- Print on-board data\n' +
            '4- Exit')
    }

    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5

    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5

    if (newVelocity < 0) newVelocity = 0

    return newVelocity
}

function showOnboard(velocity, name) {
    alert(`
        Spaceship: ${spaceshipName}
        
        Velocity: ${spaceshipVelocity} km/s
    `)
}

let chosenOption

do {
    chosenOption = OnboardProgram()

    switch (chosenOption) {
        case '1':
            spaceshipVelocity = speedUp(spaceshipVelocity)

            break
        case '2':
            spaceshipVelocity = slowDown(spaceshipVelocity)

            break
        case '3':
            showOnboard(spaceshipVelocity, spaceshipName)

            break
        default:
            alert('Shutting down..')
    }
} while (chosenOption != '4')