radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Connected")
    }
    if (receivedNumber == 1) {
        kitronik_servo_lite.driveForwards(2)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        kitronik_servo_lite.driveBackwards(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        kitronik_servo_lite.left()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedNumber == 4) {
        kitronik_servo_lite.right()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
let Lights = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
Lights.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(1000)
Lights.showColor(neopixel.colors(NeoPixelColors.White))
