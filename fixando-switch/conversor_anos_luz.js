let lyDistance = prompt('What is the distance in light years?')

alert(
    'Possible conversions: \n\n' +

    '1- Parsec (pc)\n' +
    '2- Astronomical unit (au)\n' +
    '3- Kilometers (km)'
)

let chosenOption = prompt('Which of the operations do you want to perform?')

switch (chosenOption) {
    case '1':
        let parsecConvertion = (lyDistance * 0.306601)

        alert(`
            Distance in light years: ${lyDistance}

            Parsec: ${parsecConvertion}
        `)

        break

    case '2':
        let astroUnitConvertion = (lyDistance * 63241.1)

        alert(`
            Distance in light years: ${lyDistance}

            Astronomical unit: ${astroUnitConvertion}
        `)

        break

    case '3':
        let kilometersConvertion = (lyDistance * (9.5 * Math.pow(10, 12)))

        alert(`
            Distance in light years: ${lyDistance}

            Kilometers: ${kilometersConvertion}
        `)

        break

    default:
        alert(`
            Distance in light years: ${lyDistance}
            
            Unidentified unit
        `)
}