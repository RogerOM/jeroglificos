input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        # # # # #
        . . . . .
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
    basic.showLeds(`
        # . . # .
        # # . # #
        # # . # #
        . # . . #
        . # . . #
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
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
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
    // abanicar
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
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
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        . # # # .
        . . . . .
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
})
basic.forever(function () {
	
})
