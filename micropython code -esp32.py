import uwebsockets.client
import sys,time
import network
from machine import Pin
from time import sleep
import _thread
import upip
import machine
from machine import Timer

TIMEOUT_MS = 5000 #soft-reset will happen around 5 sec

ir_sensor=machine.Pin(25,Pin.IN)
servo_pin = machine.Pin(32)
pwm = machine.PWM(servo_pin)
ir_sensor1=machine.Pin(27,Pin.IN)
pwm.freq(100)

def set_servo_position():
print("set servo")
    a = 150
pwm.duty(a)
time.sleep(2)

def set_exit_servo_position():
    d = 20
pwm.duty(d)
print("set exit servo1")
time.sleep(1)

def timeout_callback(t):
    try:
print("I am in Call back")

        #initialize the pin for IR Sensor 
        IR_PIN = Pin(22, Pin.IN)
        IR_PIN1 = Pin(26,Pin.IN)
        IR_PIN2 = Pin(33,Pin.IN)
        while True:
            if(ir_sensor.value()==0 or ir_sensor1.value()==0):
                print(ir_sensor.value(),ir_sensor1.value())
                print("servo")
set_servo_position()
            else:
                print(ir_sensor.value(),ir_sensor1.value())
print("exit servo")
set_exit_servo_position()

            x = IR_PIN.value() 
            y = IR_PIN1.value()
            z = IR_PIN2.value()

            if x == 0: 
print("Slot 1 Object Detected")
websocket.send('{"action":"sendmessage","message":"S1OD"}')

elif x != 0: 
print("Slot 1 No Object Detected")
websocket.send('{"action":"sendmessage","message":"S1NOD"}')

            if y == 0: 
print("Slot 2 Object Detected")
websocket.send('{"action":"sendmessage","message":"S2OD"}')

elif y != 0: 
print("Slot 2 No Object Detected")
websocket.send('{"action":"sendmessage","message":"S2NOD"}')

            if z == 0: 
print("Slot 3 Object Detected")
websocket.send('{"action":"sendmessage","message":"S3OD"}')

elif z != 0: 
print("Slot 3 No Object Detected")
websocket.send('{"action":"sendmessage","message":"S3NOD"}')

  time.sleep(1)
            #websocket.send("Ws send \r")
    finally:
print("I am in Call back finally")

def wlan_connect(ssid,pwd):
wlan = network.WLAN(network.STA_IF)
    if not wlan.active() or not wlan.isconnected():
wlan.active(True)
wlan.connect(ssid,pwd)
        while not wlan.isconnected():
            pass
print('network config:', wlan.ifconfig())
    #upip.install("")

wlan_connect('Archana', '123456789')
p0 = Pin(2, Pin.OUT) 
uri = "wss://4zgslf1c42.execute-api.us-east-2.amazonaws.com/production"
websocket = uwebsockets.client.connect(uri)

#print(websocket)
while True:
    #print("Enter Command:\r")
    #mesg=input()
    #websocket.send(mesg + "\r")

    timer = Timer(0)
timer.init(period=TIMEOUT_MS, callback=timeout_callback)
resp = websocket.recv()
websocket = uwebsockets.client.connect(uri)
    if "on" in resp:
        p0.on()
print("Led is on")
elif "off" in resp:
p0.off()
print("Led is off")
    else:
print("No data recieved")
    sleep(1)
