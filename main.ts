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
    radio.sendString("urijah's score")
    radio.sendString("" + (score))
    basic.showString("score")
    basic.showString("" + (score))
})
let high_score = 0
let score = 0
let lives = 3
score = 0
basic.forever(function () {
    if (lives <= 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("game over")
        basic.showString("score")
        basic.showString("" + (score))
        if (high_score < score) {
            high_score = score
            basic.showString("new high score")
            basic.showString("" + (high_score))
        }
    }
})
basic.forever(function () {
    if (lives <= 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("urijah's score")
        radio.sendString("" + (score))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (high_score < score) {
            high_score = score
            radio.sendString("new high score")
            radio.sendString("" + (high_score))
        }
    }
})
