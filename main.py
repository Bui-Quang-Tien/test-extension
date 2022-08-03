"""

MakeCode editor extension for EIU FABLAB Iot module
by Tien Bui

"""
# % block="FablabIoT" weight=20 color=#9900cc icon="☁"
@namespace
class Fablab_IoT:
    """
    
    Get Virtual Pin form Blynk server
    @param text is the string form Iot module, eg: #V30@1020$
    
    """
    # %blockId=GetVirtualPin
    # %block="Get Virtual Pin form $text"
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
    # %blockId=ConnectToBLYNK
    # %block="Connect to server IoT  %auth|%Wifi_ssid|%Wifi_password"
    def ConnectToBLYNK(auth: str, Wifi_ssid: str, Wifi_password: str):
        basic.pause(500)
        serial.write_string("#sid@" + auth + "," + Wifi_ssid + ";" + Wifi_password + "$")
        basic.pause(5000)
    """
    
    Get data form Blynk server
    @param text is the string form Iot module, eg: #V30@1020$
    
    """
    # %blockId=GetData
    # %block="Get data form Blynk: $textData"
    def Data_from_server(textData: str):
        Data_Value = textData.substr(textData.index_of("@") + 1,
            textData.index_of("$") - (textData.index_of("@") + 1))
        return parse_float(Data_Value)
    """
    
    Send data to Blynk server
    @param V is the Virtual Pin, eg: V30
    @param data is the value, eg: 9.99
    
    """
    # %blockId=SendData
    # %block="Send data to Blynk: Virtual Pin $V| data $data"
    def Send_data_to_server(V: str, data: number):
        serial.write_string("#" + V + "@" + str(data) + "$")