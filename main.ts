basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Asleep)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Surprised)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.clearScreen()
    }
})
