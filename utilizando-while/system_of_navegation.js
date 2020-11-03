let spaceFold = 0

let spaceshipName = prompt('What is the name of the spacecraft?')

let response = prompt(
    'Do you want to enter space warp?\n\n' +

    '1 - Yes\n' +
    '2 - No'
)

while (response == '1') {
    spaceFold += 1

    response = prompt(
        'Do you want to perform the next fold?\n\n' +

        '1 - Yes\n' +
        '2 - No'
    )
}

alert(`
    Spaceship name: ${spaceshipName}

    Number of spatial folds performed: ${spaceFold}
`)

