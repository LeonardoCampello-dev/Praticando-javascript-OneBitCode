let spaceshipVelocity = 150

function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    if (velocity < 0) alert("Stopped ship.\nAuthorization to open floodgates.\n\nCommander: Leonardo Campello")
}

alert("Board computer")

alert("Starting deceleration of the ship")

slowDown(spaceshipVelocity, velocity => alert("Updating ship speed: " + velocity + "km/s"))
