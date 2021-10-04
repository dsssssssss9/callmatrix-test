input.onButtonPressed(Button.A, function () {
    colorbit2.showColor(colorbit.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
})
input.onButtonPressed(Button.AB, function () {
    colorbit2.clear()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100; index++) {
        for (let index = 0; index <= 4; index++) {
            for (let index2 = 0; index2 <= 4; index2++) {
                colorbit2.drawColorBit(index, index2, colorbit.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            }
        }
    }
})
let colorbit2: colorbit.Strip = null
colorbit2 = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit2.clear()
colorbit2.setBrightness(32)
colorbit2.show()
basic.forever(function () {
	
})
