let spaceshipName = prompt("Qual o nome da sua nave, piloto?")

let spaceshipVelocity = 0

let chosenOption

function OnboardProgram() {
    let option

    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Programa de bordo \n\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
    }

    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5

    return newVelocity
}
function slowDown(velocity) {
    let newVelocity = velocity - 5

    if (newVelocity < 0) {
        newVelocity = 0
    }

    return newVelocity
}
function showOnboard(velocity, name) {
    alert("Espaçonave: " + spaceshipName + "\nVelocidade: " + spaceshipVelocity + "km/s")
}

do {
    chosenOption = OnboardProgram()

    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            showOnboard(spaceshipVelocity, spaceshipName)
            break
        default:
            alert("Encerrando o programa de bordo")
    }
} while (chosenOption != "4")