const olderName = prompt("What is the name of the oldest person?");
const olderAge = prompt("How old is the older person?");

const newestName = prompt("What is the name of the youngest person?");
const newestAge = prompt("How old is the youngest person?");

const ageDifference = olderAge - newestAge;

alert(`The oldest person’s name is ${olderName} and his age is ${olderAge}`);

alert(
  `The youngest person’s name is ${newestName} and his age is ${newestAge}`
);

alert(`The age difference between the two is ${ageDifference} years`);
