input.onPinPressed(TouchPin.P0, function () {
    for (let index2 = 0; index2 < 15; index2++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            # # # # #
            # . . . #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(100)
    for (let index2 = 0; index2 < 15; index2++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    index = 0
    for (let index = 0; index <= 15; index++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
    }
})
let index = 0
for (let index2 = 0; index2 < 4; index2++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
