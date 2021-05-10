input.onButtonPressed(Button.A, function () {
    radio.sendString("comida patatas")
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # . . # .
        # # . # #
        # # . # #
        . # . . #
        . # . . #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # . # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . . . .
        # . # . #
        # . # . #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . # . #
        # . # # #
        `)
    basic.showLeds(`
        . . . # .
        . # # # .
        . # # # #
        # . # . .
        . . # # .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        # # # # #
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # # #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("abanicar")
    // abanicar
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
})
radio.onReceivedString(function (receivedString) {
    // añadir los que se quieran
    if (receivedString == "comida patatas") {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . . # .
            # # . # #
            # # . # #
            . # . . #
            . # . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "bebida") {
        // beber
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "abanicar") {
        // abanicar
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("bebida")
    // beber
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . . .
        # # # # #
        . # # # #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        . # # # #
        . # # # #
        . # . # .
        `)
    // comer
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # # #
        # . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        . # # # .
        . . . . .
        `)
    basic.pause(500)
})
radio.setGroup(150)
