let pilotName = prompt("Qual seu nome, piloto?")
let shipVelocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar a nave?")
let velocityConfirmation = confirm("Você realmente quer setar a velocidade da sua nave a " + newVelocity + " km/s?")
// Neste caso a condição está sendo usada para confirmar a resposta do piloto

if (velocityConfirmation == true) {
    shipVelocity = newVelocity // Se a resposta for true a nova velocidade da nave será setada
} else {
    alert("Alteração de velocidade cancelada!")
}

// Nesta parte do código serão aplicadas as condições de verificação da velocidade 
if (shipVelocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (shipVelocity > 0 && shipVelocity < 40) {
    alert("Você está devagar, podemos aumentar mais!")
} else if (shipVelocity >= 40 && shipVelocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (shipVelocity >= 80 && shipVelocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Pilot name: " + pilotName + "\nVelocity: " + shipVelocity + " km/s")
// Por último será exibido o nome do piloto e a velocidade que o mesmo escolheu

