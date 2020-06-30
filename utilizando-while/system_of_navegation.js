let spaceFold = 0
// Essa variável equivale ao número de dobras espaciais que inicialmente começa em 0
let spaceshipName = prompt("Qual o nome da sua nave, piloto?")

let response = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while (response == "1") {
    spaceFold += 1
    response = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
    // Neste momento estamos subscrevendo a variável response com uma nova pergunta
    // Pois se não usarmos nenhuma variável para a resposta o programa entrará em looping infinito
}

alert("Nome da nave: " + spaceshipName + "\nQuantidade de dobras espaciais realizadas: " + spaceFold)


