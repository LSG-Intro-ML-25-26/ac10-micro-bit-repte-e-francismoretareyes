let temp: number;
let accx: number;
let accy: number;
let MAX_TEMPERATURE = 50
let x = 2
let y = 2
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            temp = input.temperature()
            led.plotBarGraph(temp, MAX_TEMPERATURE)
        }
    }
    
    if (input.buttonIsPressed(Button.B)) {
        while (true) {
            led.plot(x, y)
            basic.pause(50)
            led.unplot(x, y)
            accx = input.acceleration(Dimension.X)
            accy = input.acceleration(Dimension.Y)
            if (accx <= 150 && x > 0) {
                x = x - 1
            }
            
            if (accx > 150 && x < 4) {
                x = x + 1
            }
            
            if (accy <= 150 && y > 0) {
                y = y - 1
            }
            
            if (accy > 150 && y < 4) {
                y = y + 1
            }
            
        }
    }
    
}
