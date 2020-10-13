let Cantidad_agua = 0
let Valor_dado = 0
input.onButtonPressed(Button.A, function () {
    Cantidad_agua = 0
    for (let index = 0; index < 1285; index++) {
        Cantidad_agua += randint(0, 6)
    }
    basic.showNumber(Cantidad_agua)
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        Valor_dado = randint(1, 6)
    }
    basic.showNumber(Valor_dado)
})
