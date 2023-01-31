function updateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + playerA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + playerB)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds: " + rounds)
}
input.onButtonPressed(Button.A, function () {
    playerA += 1
    rounds += 1
    updateScoreboard()
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    ties += 1
    rounds += 1
    updateScoreboard()
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    playerB += 1
    rounds += 1
    updateScoreboard()
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    reset()
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        # # # # #
        . . . . .
        `)
})
function reset () {
    OLED.init(128, 64)
    playerB = 0
    playerA = 0
    rounds = 0
    ties = 0
    OLED.writeStringNewLine("\"Lets play some RPS\"")
    basic.pause(2000)
    updateScoreboard()
}
let rounds = 0
let ties = 0
let playerB = 0
let playerA = 0
reset()
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    # # # # #
    . . . . .
    `)
