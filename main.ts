/**
 * MakeCode editor extension for EIU FABLAB Iot module
 * by Tien Bui
 */
//% block="FablabIoT" weight=20 color=#9900cc icon="☁"
namespace Fablab_IoT {
    /**
     * Get Virtual Pin form Blynk server
     * @param text is the string form Iot module, eg: #V30@1020$
     */
    //%blockId=GetVirtualPin
    //%block="Get Virtual Pin form $text"
    export function GetVirtualPin(text: string): number {
        let Vxx = text.substr(text.indexOf("#") + 1, text.indexOf("@") - (text.indexOf("#") + 1));
        return parseInt(Vxx);
    }
    /**
     * Connect to Blynk server
     * @param tx is the serial pin, eg:"P1"
     * @param rx is the serial pin, eg:"P0"
     * @param auth is the auth form blynk server, eg:"auth"
     * @param Wifi_ssid is the SSID of your wifi, eg:"SSID"
     * @param Wifi_password is the password of your wifi, eg:"password"
     */
    //%blockId=ConnectToBLYNK
    //%block="Connect to server IoT: tx %P1| rx %P0|%auth|%Wifi_ssid|%Wifi_password"
    export function ConnectToBLYNK(tx: SerialPin,rx: SerialPin,auth: string, Wifi_ssid: string, Wifi_password: string): void {
        serial.redirect(tx, rx, 115200)
        basic.pause(500);
        serial.writeString("#sid@" + auth + "," + Wifi_ssid + ";" + Wifi_password + "$");
        basic.pause(5000);
    }
    /**
     * Get data form Blynk server
     * @param text is the string form Iot module, eg: #V30@1020$
     */
    //%blockId=GetData
    //%block="Get data form Blynk: $textData"
    export function Data_from_server(textData: string): number{
        let Data_Value = textData.substr(textData.indexOf("@") + 1, textData.indexOf("$") - (textData.indexOf("@") + 1));
        return parseFloat(Data_Value);

    }
    /**
     * Send data to Blynk server
     * @param V is the Virtual Pin, eg: V30
     * @param data is the value, eg: 9.99
     */
    //%blockId=SendData
    //%block="Send data to Blynk: Virtual Pin $V| data $data"
    export function Send_data_to_server(V: string, data: number) :void{
        serial.writeString("#" + V + "@" + data + "$");
    }
}
