let lyDistance = prompt("Qual a distância em anos-luz, piloto?")

alert("Possíveis conversões de anos-luz:\n1- Parsec (pc)\n2- Unidade astronômica (au)\n3- Quilômetros (km)")

let chosenOption = prompt("Qual das operações deseja realizar?")

switch (chosenOption) {
    case "1":
        let parsecConvertion = (lyDistance * 0.306601)
        alert("Distância em anos-luz: " + lyDistance + "\nConversão desejada: " + parsecConvertion)
        break
    case "2":
        let astroUnitConvertion = (lyDistance * 63241.1)
        alert("Distância em anos-luz: " + lyDistance + "\nConversão desejada: " + astroUnitConvertion)
        break
    case "3":
        let kilometersConvertion = (lyDistance * (9.5 * Math.pow(10, 12)))
        alert("Distância em anos-luz: " + lyDistance + "\nConversão desejada: " + kilometersConvertion)
        break
    default:
        alert("Distância em anos-luz: " + lyDistance + "\nUnidade não identificada: Conversão fora do escopo.")
}