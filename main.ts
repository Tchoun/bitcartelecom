function AllumageRouge () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function Allumagevert () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Middle") {
        BitCar.stop()
    }
    if (receivedString == "Up") {
        BitCar.move(Vitesse * Boost, Vitesse * Boost)
    }
    if (receivedString == "Down") {
        BitCar.move(VitesseArriere * Boost, VitesseArriere * Boost)
    }
    if (receivedString == "Right") {
        BitCar.move(Vitesse * Boost, VitesseArriere * Boost)
    }
    if (receivedString == "Left") {
        BitCar.move(VitesseArriere * Boost, Vitesse * Boost)
    }
    if (receivedString == "A") {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        for (let index = 0; index < 4; index++) {
            strip.show()
            basic.pause(250)
            strip.rotate(1)
        }
        if (Boost == 1) {
            Allumagevert()
        } else {
            AllumageRouge()
        }
    }
    if (receivedString == "B") {
    	
    }
    if (receivedString == "C") {
    	
    }
    if (receivedString == "D") {
    	
    }
    if (receivedString == "L") {
        Boost = 1
        Allumagevert()
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
    if (receivedString == "R") {
        Boost = 2
        AllumageRouge()
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
    if (receivedString == "UpLeft") {
    	
    }
    if (receivedString == "LowerLeft") {
    	
    }
    if (receivedString == "UpRight") {
    	
    }
    if (receivedString == "LowerRight") {
    	
    }
})
let strip: neopixel.Strip = null
let VitesseArriere = 0
let Vitesse = 0
let Boost = 0
Boost = 1
Vitesse = 20
VitesseArriere = -20
strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB_RGB)
Allumagevert()
basic.forever(function () {
	
})
