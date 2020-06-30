console.log("speed mapping on")
let spaceship = {
    name: prompt("Qual o nome da espaçonave, piloto?"),
    type: prompt("Qual o tipo?"),
    maxVelocity: prompt("Qual a velocidade máxima? (km/s)"),
    velocity: 0
}
function showMenu() {
    alert("Speed Mapping App")
    option = prompt("Você gostaria de acelerar ou parar a espaçonave? [a/p]")

    return option
}

speedUp = velocity => {
    let acceleration = Number(prompt("Quanto você quer acelerar?"))

    velocity += acceleration

    return velocity
}

do {
    option = showMenu()

    if (option == "a") {
        spaceship.velocity = speedUp(spaceship.velocity)
        console.log(spaceship.velocity)
    }
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade da espaçonave: " + spaceship.velocity + "km/s" + "\nVelocida máxima permitida " + spaceship.maxVelocity + "km/s")
        alert("Controle de velocidade automático ativado: Setando para velocidade segura.")
        spaceship.velocity = spaceship.maxVelocity - 20
    }
} while (option == "a")

alert("Nome da espaçonave: " + spaceship.name + "\nTipo: " + spaceship.type + "\nÚltimo registro de velocidade: " + spaceship.velocity)
