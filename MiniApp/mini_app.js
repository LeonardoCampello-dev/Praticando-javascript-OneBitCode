const departureDateEntry = prompt("Enter departure date (Format DD/MM/YYYY)");
const departureDate = moment(departureDateEntry, "DD/MM/YYYY");
const today = moment();

const dateDiff = today - departureDate;

let chosenOption = prompt(
  "Choose how you would like to display the departure time\n\n" +
    "1 - Seconds\n" +
    "2 - Minutes\n" +
    "3 - Hours\n" +
    "4 - Days"
);

if (chosenOption == "1") {
  let secondsOfDeparture = Math.round(dateDiff / 1000);

  alert(`Flight time: ${secondsOfDeparture} seconds`);
} else if (chosenOption == "2") {
  let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);

  alert(`Flight time: ${minutesOfDeparture} minutes`);
} else if (chosenOption == "3") {
  let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);

  alert(`Flight time: ${hoursOfDeparture} hours`);
} else if (chosenOption == "4") {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);

  alert(`Flight time: ${daysOfDeparture} days`);
} else {
  alert("Invalid option");
}
