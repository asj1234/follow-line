input.onButtonPressed(Button.A, function () {
    X = 1
})
let X = 0
reromicro.LineAdjustThresholds(580, 580, 580)
X = 0
basic.forever(function () {
    basic.showNumber(X)
})
basic.forever(function () {
    if (X == 1) {
        reromicro.ReadLineSensors()
        if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            reromicro.MoveBackward(35)
            basic.pause(100)
            reromicro.TurnRight(100)
            basic.pause(100)
            X = 2
            basic.pause(100)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.TurnLeft(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.TurnRight(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else {
            reromicro.Brake()
        }
    }
})
basic.forever(function () {
    if (X == 2) {
        reromicro.ReadLineSensors()
        if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.TurnLeft(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.TurnRight(35)
        } else {
            reromicro.Brake()
        }
    }
})
