/**
 * MakeCode editor extension for EIU FABLAB Iot module
 * by Tien Bui
 */
//% block="FablabIoT" weight=20 color=#9900cc icon="☁"
namespace FablabIoT {
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
     * Get Virtual Pin form Blynk server
     * @param text is the string form Iot module, eg: #V30@1020$
     */
    //%blockId=ConnectToBLYNK
    //%block="Get Virtual Pin form $text"
    export function ConnectToBLYNK(auth: string, Wifi_ssid: string, Wifi_password: string): void {
        basic.pause(500);
        serial.writeString("#sid@" + auth + "," + Wifi_ssid + ";" + Wifi_password + "$");
        basic.pause(5000);
    }
    export function Data_from_server(text: string): number{
        let Data_Value = text.substr(text.indexOf("@") + 1, text.indexOf("$") - (text.indexOf("@") + 1));
        return parseFloat(Data_Value);
    }
    export function Send_data_to_server(V: string, data: number) :void{
        serial.writeString("#" + V + "@" + data + "$");
    }
}
