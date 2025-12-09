MAX_TEMPERATURE = 50

x=2
y=2

while True:
    if input.button_is_pressed(Button.A):
        while True:
            temp = input.temperature()
            led.plot_bar_graph(temp, MAX_TEMPERATURE)
    if input.button_is_pressed(Button.B):
        while True:
            led.plot(x, y)
            basic.pause(50)
            led.unplot(x, y)
            accx = input.acceleration(Dimension.X)
            accy = input.acceleration(Dimension.Y)
            if accx <= 150 and x > 0:
                x=x-1
            if accx > 150 and x < 4:
                x=x+1
            if accy <= 150 and y > 0:
                y=y-1
            if accy > 150 and y < 4:
                y=y+1