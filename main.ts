input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        . # # # #
        . # # # #
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    // beber
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # #
        # . # . .
        . . # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . # . #
        # . # # #
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # # #
        . # # # .
        . . . . .
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
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "comida patatas") {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # . # #
            . # # # .
            . . . . .
            `)
        basic.pause(500)
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
    	
    }
})
input.onButtonPressed(Button.B, function () {
    // comer
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # # #
        . . # . .
        . . # . .
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
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # # #
        # . . # .
        # # # . .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
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
