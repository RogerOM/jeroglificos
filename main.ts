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
basic.forever(function () {
	
})
