/**
 * MakeCode editor extension for EIU FABLAB Iot module
 * by Tien Bui
 */
//% block="EIU Fablab IoT" weight=20 color=#9900cc icon="☁"
namespace EIU_FablabIoT {
    /**
     * Get Virtual Pin form Blynk server
     * @param text is the string form Iot module, eg: "#V30@1020$"
     */
    //% blockId=GetVirtualPin
    //% block="Get Virtual Pin form $text" weight=40
    export function GetVirtualPin(text: string): number {
        let Vxx = text.substr(text.indexOf("#") + 1, text.indexOf("@") - (text.indexOf("#") + 1));
        return parseInt(Vxx);
    }
    /**
     * Connect to Blynk server
     * @param auth is the auth form blynk server, eg:"auth"
     * @param Wifi_ssid is the SSID of your wifi, eg:"SSID"
     * @param Wifi_password is the password of your wifi, eg:"password"
     */
    //% blockId=ConnectToBLYNK
    //% block="Connect to BLYNK IoT server:TX %tx|RX %rx|%auth|%Wifi_ssid|%Wifi_password" weight=50
    export function ConnectToBLYNK(tx: SerialPin,rx: SerialPin,auth: string, Wifi_ssid: string, Wifi_password: string): void {
        serial.redirect(tx, rx, 115200)
        basic.pause(500);
        serial.writeString("#sid@" + auth + "," + Wifi_ssid + ";" + Wifi_password + "$");
        basic.pause(5000);
    }
    /**
     * Get data form Blynk server
     * @param textData is the string form Iot module, eg:"#V30@1020$"
     */
    //% blockId=GetData
    //% block="Get data form Blynk: $textData" weight=30
    export function Data_from_server(textData: string): number{
        let Data_Value = textData.substr(textData.indexOf("@") + 1, textData.indexOf("$") - (textData.indexOf("@") + 1));
        return parseFloat(Data_Value);

    }
    /**
     * Send data to Blynk server
     * @param V is the Virtual Pin, eg: V30
     * @param data is the value, eg: 9.99
     */
    //% blockId=SendData
    //% block="Send data to Blynk: Virtual Pin $V| data $data" weight=20
    export function Send_data_to_server(V: string, data: number) :void{
        serial.writeString("#" + V + "@ " + data.toString() + "$");
    }
    /**
    * Send notify to Blynk server
    * @param notify is the notification to send, eg: "alert"
    */
    //%b lockId=SendNotify
    //% block="Send notification: $notify" weight=20
    export function Send_notify_to_server(notify: string): void {
        serial.writeString("#nty@ " + notify + "$");
    }

}
/**
 * MakeCode editor extension for EIU FABLAB Robot module
 * by Tien Bui
 */
//% block="EIU Fablab robot" weight=20 color=#9900cc icon=":robot:"
namespace EIU_Fablab_Robot {
    /**
* Control DC motor of robot
* @param left is the speed of left motor, eg: 0
* @param right is the speed of right motor, eg: 0
*/
    //%b lockId=RobotSpeed
    //% block="Robot move with left speed $left| right speed $right" weight=20
    export function RobotSpeed(left: number, right: number): void {

    }
}