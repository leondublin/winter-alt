input.onButtonPressed(Button.A, function () {
    if (light2 >= 70) {
        basic.showString("Lights Off")
    } else {
        basic.showString("Lights On")
    }
})
input.onButtonPressed(Button.B, function () {
    if (light2 < 70) {
        basic.showString("Lights On")
    } else {
        basic.showString("Lights Off")
    }
})
let light2 = 0
basic.showString("Hi!")
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.showString("A or B?")
