input.onButtonPressed(Button.A, function () {
    score += 1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    lives += -1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("" + (score))
})
let score = 0
let lives = 3
basic.forever(function () {
    if (lives == 0) {
        radio.sendString("urijah's score")
        radio.sendString("" + (score))
    }
})
