
function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)

        velocity -= deceleration
    }

    if (velocity < 0) alert('Stopped ship.\n\nAuthorization to open floodgates.\n\nCommander: Leonardo Campello')
}

alert('Board computer')

alert('Starting deceleration of the ship')

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, velocity => alert(`Updating ship speed: ${velocity} km/s`))

