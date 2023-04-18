led.enable(false)
basic.forever(function () {
    if (!(AlphaBot2.Infrared(Sensor.Left)) && !(AlphaBot2.Infrared(Sensor.Right))) {
        AlphaBot2.Run(Dir.forward, 40)
    } else if (AlphaBot2.Infrared(Sensor.Left) && !(AlphaBot2.Infrared(Sensor.Right))) {
        AlphaBot2.MotorRun(Motors.M1, 40)
        AlphaBot2.MotorRun(Motors.M2, 0)
        basic.pause(200)
    } else if (!(AlphaBot2.Infrared(Sensor.Left)) && AlphaBot2.Infrared(Sensor.Right)) {
        AlphaBot2.MotorRun(Motors.M1, 0)
        AlphaBot2.MotorRun(Motors.M2, 40)
        basic.pause(200)
    } else {
        AlphaBot2.Run(Dir.stop, 40)
        AlphaBot2.Run(Dir.backward, 40)
        basic.pause(200)
        AlphaBot2.Run(Dir.backward, 40)
        AlphaBot2.MotorRun(Motors.M1, 40)
        AlphaBot2.MotorRun(Motors.M2, 0)
        basic.pause(200)
    }
})
