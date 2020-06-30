let spaceship = prompt("Qual o nome da espaçonave, piloto?")

let newSpaceship = ""

for (let i = spaceship.length - 1; i >= 0; i--) {
    if (spaceship[i] == "e") {
        break
    } else {
        newSpaceship += spaceship[i]
    }
}
alert("Nome original da nave: " + spaceship + "\nNome após ocultação: " + newSpaceship)

// A variável do for recebe o tamanho da String -1 pois o índice da String começa em 0
// S u p e r n o v a = 9 - 1 
// 0 1 2 3 4 5 6 7 8
// Para percorrer letra por letra de trás para frente, a contagem começa da ultima posição da String
// O if é usado para caso a letra correspondente a posição seja "e", os loopings vão parar e o resultado será apresentado 