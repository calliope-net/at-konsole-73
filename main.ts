input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
    serial.redirect(
    SerialPin.C17,
    SerialPin.C16,
    BaudRate.BaudRate115200
    )
    serial.setTxBufferSize(80)
    serial.setRxBufferSize(200)
    text_list = []
    basic.pause(2000)
    serial.writeString("AT+GMR" + String.fromCharCode(13) + String.fromCharCode(10))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
    serial.writeLine("Response Array Lnge " + text_list.length)
    for (let Wert of text_list) {
        serial.writeLine("*" + Wert + "*" + Wert.length)
    }
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    text_list.push(serial.readLine())
})
let text_list: string[] = []
basic.setLedColor(0xffffff)
