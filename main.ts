let y_rocker = 0
let x_rocker = 0
let y = 0
let x = 0
radio.setGroup(1)
let i = 0
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
    x_rocker = joystickbit.getRockerValue(joystickbit.rockerType.X)
    y_rocker = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    i += 1
    basic.pause(500)
})
