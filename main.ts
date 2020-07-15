let luz = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    luz = input.lightLevel()
    if (luz < 25) {
        music.ringTone(262)
    } else if (luz < 50) {
        music.ringTone(294)
    } else if (luz < 100) {
        music.ringTone(330)
    } else if (luz < 150) {
        music.ringTone(349)
    } else if (luz < 180) {
        music.ringTone(392)
    } else {
        music.ringTone(440)
    }
})
