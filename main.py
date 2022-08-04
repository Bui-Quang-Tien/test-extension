"""

MakeCode editor extension for EIU FABLAB Iot module
by Tien Bui

"""
# % block="EIU Fablab IoT" weight=20 color=#9900cc icon="☁"
@namespace
class EIU_FablabIoT:
    """
    
    Get Virtual Pin form Blynk server
    @param text is the string form Iot module, eg: "#V30@1020$"
    
    """
    # % blockId=GetVirtualPin
    # % block="Get Virtual Pin form $text" weight=40
    def GetVirtualPin(text: str):
        Vxx = text.substr(text.index_of("#") + 1,
            text.index_of("@") - (text.index_of("#") + 1))
        return int(Vxx)
    """
    
    Connect to Blynk server
    @param auth is the auth form blynk server, eg:"auth"
    @param Wifi_ssid is the SSID of your wifi, eg:"SSID"
    @param Wifi_password is the password of your wifi, eg:"password"
    
    """
    # % blockId=ConnectToBLYNK
    # % block="Connect to BLYNK IoT server:TX %tx|RX %rx|%auth|%Wifi_ssid|%Wifi_password" weight=50
    def ConnectToBLYNK(tx: SerialPin, rx: SerialPin, auth: str, Wifi_ssid: str, Wifi_password: str):
        serial.redirect(tx, rx, 115200)
        basic.pause(500)
        serial.write_string("#sid@" + auth + "," + Wifi_ssid + ";" + Wifi_password + "$")
        basic.pause(5000)
    """
    
    Get data form Blynk server
    @param textData is the string form Iot module, eg:"#V30@1020$"
    
    """
    # % blockId=GetData
    # % block="Get data form Blynk: $textData" weight=30
    def Data_from_server(textData: str):
        Data_Value = textData.substr(textData.index_of("@") + 1,
            textData.index_of("$") - (textData.index_of("@") + 1))
        return parse_float(Data_Value)
    """
    
    Send data to Blynk server
    @param V is the Virtual Pin, eg: V30
    @param data is the value, eg: 9.99
    
    """
    # % blockId=SendData
    # % block="Send data to Blynk: Virtual Pin $V| data $data" weight=20
    def Send_data_to_server(V: str, data: number):
        serial.write_string("#" + V + "@ " + str(data) + "$")
    """
    
    Send notify to Blynk server
    @param notify is the notification to send, eg: "alert"
    
    """
    # %b lockId=SendNotify
    # % block="Send notification: $notify" weight=20
    def Send_notify_to_server(notify: str):
        serial.write_string("#nty@ " + notify + "$")
"""

MakeCode editor extension for EIU FABLAB Robot module
by Tien Bui

"""
# % block="EIU Fablab robot" weight=20 color=#9900cc icon="Robot"
@namespace
class EIU_Fablab_Robot:
    """
    
    Control DC motor of robot
    @param left is the speed of left motor, eg: 0
    @param right is the speed of right motor, eg: 0
    
    """
    # % blockId=RobotSpeed
    # % block="Robot move with left speed $left| right speed $right" weight=20
    # % left.min=-1000 left.max=1000 right.min=-1000 right.max=1000
    def RobotSpeed(left: number, right: number):
        if left >= 0:
            pins.analog_write_pin(leftMotorPin1, 0)
            pins.analog_write_pin(leftMotorPin2, left)
        else:
            pins.analog_write_pin(leftMotorPin1, -left)
            pins.analog_write_pin(leftMotorPin2, 0)
        if right >= 0:
            pins.analog_write_pin(rightMotorPin1, 0)
            pins.analog_write_pin(rightMotorPin2, right)
        else:
            pins.analog_write_pin(rightMotorPin1, -right)
            pins.analog_write_pin(rightMotorPin2, 0)
    """
    
    Control left DC motor of robot
    @param left_speed is the speed of left motor, eg: 0
    
    """
    # % blockId=LeftSpeed
    # % block="Robot move with left speed $left_speed" weight=20
    # % left_speed.min=-1000 left_speed.max=1000
    def leftSpeed(left_speed: number):
        if left_speed >= 0:
            pins.analog_write_pin(leftMotorPin1, 0)
            pins.analog_write_pin(leftMotorPin2, left_speed)
        else:
            pins.analog_write_pin(leftMotorPin1, -left_speed)
            pins.analog_write_pin(leftMotorPin2, 0)
    """
    
    Control right DC motor of robot
    @param right_speed is the speed of right motor, eg: 0
    
    """
    # % blockId=RightSpeed
    # % block="Robot move with right speed $right_speed" weight=20
    # % right_speed.min=-1000 right_speed.max=1000
    def rightSpeed(right_speed: number):
        if right_speed >= 0:
            pins.analog_write_pin(rightMotorPin1, 0)
            pins.analog_write_pin(rightMotorPin2, right_speed)
        else:
            pins.analog_write_pin(rightMotorPin1, -right_speed)
            pins.analog_write_pin(rightMotorPin2, 0)