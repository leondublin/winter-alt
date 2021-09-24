input.onButtonPressed(Button.A, function () {
    while (true) {
        if (input.lightLevel() >= 40) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        if (input.lightLevel() < 40) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
serial.redirectToUSB()
basic.showString("Hi!")
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.showString("A or B?")
basic.forever(function () {
    serial.writeLine("" + (input.lightLevel()))
    serial.writeLine("")
})
