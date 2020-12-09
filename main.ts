input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.South)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 60)
        bitbot.setLedColor(0x18E600)
    }
    if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 60)
        bitbot.setLedColor(0xFF0000)
    }
    if (receivedNumber == 3) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 300)
    }
    if (receivedNumber == 4) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 300)
    }
    if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Brake)
    }
    if (receivedNumber == 6) {
        basic.showNumber(8)
    }
    if (receivedNumber == 7) {
        for (let index = 0; index < 4; index++) {
            bitbot.buzz(true)
            basic.pause(500)
            bitbot.buzz(false)
            basic.pause(500)
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(7)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # .
        . . # # .
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
    basic.showNumber(8)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.East)
})
radio.setGroup(8)
basic.forever(function () {
	
})
