let spaceshipName = prompt("Qual o nome da sua nave, piloto?")

let newSpaceship = "" // Variável para o novo nome da nave

let substitutedCharacter = prompt("Qual caractere do nome da nave que você deseja substituir?")
// Variável para armezenar o caracter a ser substituído

let newCharacter = prompt("Por qual novo caractere você deseja substituir?")
// Variável para armezenar o caracter que vai substituir o antigo

for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == substitutedCharacter) {
        newSpaceship += newCharacter
    } else {
        newSpaceship += spaceshipName[i]
    }
}

alert("New name of Spaceship: " + newSpaceship) 