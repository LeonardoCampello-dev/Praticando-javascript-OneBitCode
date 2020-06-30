let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")
// Na linha acima o usuário vai informar a data da partida em formato DD/MM/YYYY

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
/* Nesta variável está sendo armazenado o valor da conversão do que o usuário informou, que no caso entra em formato String e o Moment.js converte para um formato de data que ele possa usar */

let today = moment()
// Quando chamamos o moment sem nenhum valor entre os parênteses, ele retorna a data do dia atual

let dateDiff = today - departureDate
// Nesta variável estamos calculando a diferença da data atual e da data de partida que foi informada
// Este cálculo de diferença de datas só é possível graças à biblioteca Moment.js

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")
// Nesta variável estamos dando uma opção para o usuário escolher

if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    // a conversão foi feita sabendo-se que um segundo possui 1000 milissegundos 

    alert("Tempo de voo: " + secondsOfDeparture + " segundos")
} else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    // a conversão foi feita sabendo-se que um minuto possui 60 segundos 
    alert("Tempo de voo: " + minutesOfDeparture + " minutos")
} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    // a conversão foi feita sabendo-se que uma hora possui 3600 segundos
    alert("Tempo de voo: " + hoursOfDeparture + " horas")
} else if (chosenOption == "4") {
    // a conversão foi feita sabendo-se que um dia tem 3600 * 24 segundos  
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de voo: " + daysOfDeparture + " dias")
} else {
    // este else foi adicionado caso o usuário não informe nenhuma opção acima
    alert("Opção inválida")
}
// O Moment.js transforma a data em milissegundos, graças a isso que foi possível converter a data em segundos, minutos, horas e dias
// Neste app foi usada uma biblioteca nativa do javascript chamada Math, ela tem um recurso chamado "round" que arredonda um valor quebrado 