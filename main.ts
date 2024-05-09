let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia <= 15) {
        servos.P2.setAngle(135)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(2000)
    } else {
        basic.pause(2000)
        servos.P2.setAngle(0)
    }
})
