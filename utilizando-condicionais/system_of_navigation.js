const pilotName = prompt('Whats your name, pilot?')
let shipVelocity = 0
let newVelocity = prompt('How fast would you like to accelerate?')
const velocityConfirmation = confirm(`You really have to accelerate your ship to ${newVelocity} km/s?`)

if (velocityConfirmation == true) {
    shipVelocity = newVelocity
} else {
    alert('Speed ​​change canceled!')
}

if (shipVelocity <= 0) {
    alert('Ship is stopped. Consider leaving and speeding up.')

} else if (shipVelocity > 0 && shipVelocity < 40) {
    alert('You are slow. We can increase more!')

} else if (shipVelocity >= 40 && shipVelocity < 80) {
    alert('It seems like a good speed to maintain.')

} else if (shipVelocity >= 80 && shipVelocity < 100) {
    alert('High speed. Consider decreasing.')
} else {

    alert('Extreme speed, were going to die!')
}

alert(`
    Pilot name: ${pilotName}

    Velocity: ${shipVelocity} km/s
`)

