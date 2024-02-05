class AX25Frame {
    constructor(src, srcSSID, dst, dstSSID, control, pid, payload, cmdMsg) {
        this.cmdMsg = cmdMsg;
		this.src = src;
        this.srcSSID = srcSSID;
        this.dst = dst;
        this.dstSSID = dstSSID;
        this.control = control;
        this.pid = pid;
        this.payload = payload;
    }

    Encode() {
        const frame = [];

        //Add Destination Address
        for(var i = 0; i < this.dst.length; i++) {
            const char = this.dst.charCodeAt(i);
            frame.push((char & 0xFF) << 1);
        }
        //Add Destination SSID
        frame.push(0x60 + ((this.dstSSID & 0x0F) << 1));

		//Set Command/Response indicator bits
		if(this.cmdMsg == true) {
			frame[6] += 0x80;
		}

        //Add Source Address
        for(var i = 0; i < this.src.length; i++) {
            const char = this.src.charCodeAt(i);
            frame.push((char & 0xFF) << 1);
        }
        //Add Source SSID
        frame.push(0x60 + ((this.srcSSID & 0x0F) << 1));

		//Set Command or Response Message Type
		if(this.cmdMsg == false) {
			frame[13] += 0x80;
		}

        //Set last bit to indicate end of address fields
        frame[13] += 0x01;

        //Set Control Field
        frame.push(this.control & 0xFF);

        //Set PID Field
        frame.push(this.pid & 0xFF);

        //Add Payload Field
        for(var i = 0; i < this.payload.length; i++) {
            const char = this.payload.charCodeAt(i);
            frame.push(char & 0xFF);
        }

        return frame;
    }

    Decode(frame) {
        var frameIndex = 0;

        //Get Destination Address
        this.dst = "";
        for(var i = 0; i < 6; i++) {
            this.dst += String.fromCharCode((frame[frameIndex++] & 0xFF) >>> 1);
        }
        //Get Destination SSID
        this.dstSSID = ((frame[frameIndex++] & 0x0F) >>> 1);

		//Get Command or Response Message Type
		if((frame[6] >>> 7) == 0x01) {
			this.cmdMsg = true;
		}
		else {
			this.cmdMsg = false;
		}

        //Get Source Address
        this.src = [];
        for(var i = 0; i < 6; i++) {
            this.src += String.fromCharCode((frame[frameIndex++] & 0xFF) >>> 1);
        }
        //Get Source SSID
        this.srcSSID = ((frame[frameIndex++] & 0x0F) >>> 1);

        //Get Control Filed
        this.control = (frame[frameIndex++] & 0xFF);

        //Get PID Field
        this.pid = (frame[frameIndex++] & 0xFF);

        //Get Payload Length
        const payloadLength = frame.length - frameIndex;

        //Get Payload
        this.payload = "";
        for(var i = 0; i < payloadLength; i++) {
            this.payload += String.fromCharCode(frame[frameIndex++] & 0xFF);
        }
    }
}

function CRCCalculation(frame) {
    const crcTable = new Uint16Array([
		0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50A5, 0x60C6, 0x70E7, 0x8108, 0x9129, 0xA14A, 0xB16B, 0xC18C, 0xD1AD, 0xE1CE, 0xF1EF,
        0x1231, 0x0210, 0x3273, 0x2252, 0x52B5, 0x4294, 0x72F7, 0x62D6, 0x9339, 0x8318, 0xB37B, 0xA35A, 0xD3BD, 0xC39C, 0xF3FF, 0xE3DE,
        0x2462, 0x3443, 0x0420, 0x1401, 0x64E6, 0x74C7, 0x44A4, 0x5485, 0xA56A, 0xB54B, 0x8528, 0x9509, 0xE5EE, 0xF5CF, 0xC5AC, 0xD58D,
        0x3653, 0x2672, 0x1611, 0x0630, 0x76D7, 0x66F6, 0x5695, 0x46B4, 0xB75B, 0xA77A, 0x9719, 0x8738, 0xF7DF, 0xE7FE, 0xD79D, 0xC7BC,
        0x48C4, 0x58E5, 0x6886, 0x78A7, 0x0840, 0x1861, 0x2802, 0x3823, 0xC9CC, 0xD9ED, 0xE98E, 0xF9AF, 0x8948, 0x9969, 0xA90A, 0xB92B,
        0x5AF5, 0x4AD4, 0x7AB7, 0x6A96, 0x1A71, 0x0A50, 0x3A33, 0x2A12, 0xDBFD, 0xCBDC, 0xFBBF, 0xEB9E, 0x9B79, 0x8B58, 0xBB3B, 0xAB1A,
        0x6CA6, 0x7C87, 0x4CE4, 0x5CC5, 0x2C22, 0x3C03, 0x0C60, 0x1C41, 0xEDAE, 0xFD8F, 0xCDEC, 0xDDCD, 0xAD2A, 0xBD0B, 0x8D68, 0x9D49,
        0x7E97, 0x6EB6, 0x5ED5, 0x4EF4, 0x3E13, 0x2E32, 0x1E51, 0x0E70, 0xFF9F, 0xEFBE, 0xDFDD, 0xCFFC, 0xBF1B, 0xAF3A, 0x9F59, 0x8F78,
        0x9188, 0x81A9, 0xB1CA, 0xA1EB, 0xD10C, 0xC12D, 0xF14E, 0xE16F, 0x1080, 0x00A1, 0x30C2, 0x20E3, 0x5004, 0x4025, 0x7046, 0x6067,
        0x83B9, 0x9398, 0xA3FB, 0xB3DA, 0xC33D, 0xD31C, 0xE37F, 0xF35E, 0x02B1, 0x1290, 0x22F3, 0x32D2, 0x4235, 0x5214, 0x6277, 0x7256,
        0xB5EA, 0xA5CB, 0x95A8, 0x8589, 0xF56E, 0xE54F, 0xD52C, 0xC50D, 0x34E2, 0x24C3, 0x14A0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
        0xA7DB, 0xB7FA, 0x8799, 0x97B8, 0xE75F, 0xF77E, 0xC71D, 0xD73C, 0x26D3, 0x36F2, 0x0691, 0x16B0, 0x6657, 0x7676, 0x4615, 0x5634,
        0xD94C, 0xC96D, 0xF90E, 0xE92F, 0x99C8, 0x89E9, 0xB98A, 0xA9AB, 0x5844, 0x4865, 0x7806, 0x6827, 0x18C0, 0x08E1, 0x3882, 0x28A3,
        0xCB7D, 0xDB5C, 0xEB3F, 0xFB1E, 0x8BF9, 0x9BD8, 0xABBB, 0xBB9A, 0x4A75, 0x5A54, 0x6A37, 0x7A16, 0x0AF1, 0x1AD0, 0x2AB3, 0x3A92,
        0xFD2E, 0xED0F, 0xDD6C, 0xCD4D, 0xBDAA, 0xAD8B, 0x9DE8, 0x8DC9, 0x7C26, 0x6C07, 0x5C64, 0x4C45, 0x3CA2, 0x2C83, 0x1CE0, 0x0CC1,
        0xEF1F, 0xFF3E, 0xCF5D, 0xDF7C, 0xAF9B, 0xBFBA, 0x8FD9, 0x9FF8, 0x6E17, 0x7E36, 0x4E55, 0x5E74, 0x2E93, 0x3EB2, 0x0ED1, 0x1EF0 
	]);

    var crc = 0xFFFF;

    for(var i = 0; i < frame.length; i++) {
        const j = (frame[i] ^ (crc >> 8)) & 0xFF;
        crc = crcTable[j] ^ (crc << 8);
    }

    crc = ((crc ^ 0xFFFF) & 0x0FFFF);

    return (crc & 0xFFFF);
}

function ReverseBits(byte) {
    //Swap odd and even bits
	byte = ((byte >> 1) & 0x55) | ((byte & 0x55) << 1);
	//Swap consecutive pairs
	byte = ((byte >> 2) & 0x33) | ((byte & 0x33) << 2);
	//Swap nibbles ...
	byte = ((byte >> 4) & 0x0F) | ((byte & 0x0F) << 4);

	return (byte & 0xFF);
}

function HDLCEncode(frame) {
    const encodedFrame = [];

    //Convert from MSBit to LSBit
    for(var i = 0; i < frame.length; i++) {
        frame[i] = ReverseBits(frame[i]);
    }

    //Calculate CRC
    const crc = CRCCalculation(frame);
    // console.log(crc);

    //Add CRC to frame
    frame.push((crc >>> 8) & 0xFF);
    frame.push(crc & 0xFF);

    //Bit processing starts here
    //Add Start flag
  for(var i = 0;i<3;i++){
    encodedFrame.push(0x7E);
  }

    //Frame Bit processing aka the bit stuffing
    var cnt = 0;            //This counter is for counting occurring "1"
    var bitIndex = 128;
    var byte = 0;
    for(var i = 0; i < frame.length; i++) {
        for(var mask = 128; mask > 0; mask = mask >>> 1) {
            //Go through bits in the current byte
            if(frame[i] & mask) {
                //Current Bit is a "1", insert to the processing byte
                byte += bitIndex;
                bitIndex = bitIndex >>> 1;
                if(bitIndex == 0) {
                    //A full new byte generated, save to encoded frame
                    encodedFrame.push(byte);
                    byte = 0;
                    bitIndex = 128;
                }

                cnt += 1;
                if(cnt == 5) {
                    //Five consecutive "1", add bit stuffing aka insert a "0"
                    bitIndex = bitIndex >>> 1;  //Just shifting adds a "0", or better, doesn't add a "1"
                    if(bitIndex == 0) {
                        //A full new byte generated, save to encoded frame
                        encodedFrame.push(byte);
                        byte = 0;
                        bitIndex = 128;
                    }
                    //Reset the "1" counter
                    cnt = 0;
                }
            }
            else {
                //Current Bit is a "0", insert to the processing byte
                bitIndex = bitIndex >>> 1;  //Just shifting adds a "0", or better, doesn't add a "1"
                if(bitIndex == 0) {
                    //A full new byte generated, save to encoded frame
                    encodedFrame.push(byte);
                    byte = 0;
                    bitIndex = 128;
                }
                //Reset the "1" counter
                cnt = 0;
            }
        }
    }

    //Add End flag (0x7E)
    //Add "0"
    bitIndex = bitIndex >>> 1;  //Just shifting adds a "0", or better, doesn't add a "1"
    if(bitIndex == 0) {
        //A full new byte generated, save to encoded frame
        encodedFrame.push(byte);
        byte = 0;
        bitIndex = 128;
    }

    //Add six "1"
    for(var i = 0; i < 6; i++) {
        //Add "1"
        byte += bitIndex;
        bitIndex = bitIndex >>> 1;
        if(bitIndex == 0) {
            //A full new byte generated, save to encoded frame
            encodedFrame.push(byte);
            byte = 0;
            bitIndex = 128;
        }
    }

    //Add "0"
    bitIndex = bitIndex >>> 1;  //Just shifting adds a "0", or better, doesn't add a "1"
    //Add current processing byte even if not complete/full
    encodedFrame.push(byte);
    for(var i = 0;i<3;i++){
      encodedFrame.push(0x7E);
    }
    return encodedFrame;
}

function HDLCDecode(frame) {
    const decodedFrame = [];

    //First find start flag, remove stuffed bits and stop at end flag
    var startFlagFound = false;
    var endFlagFound = false;
    var cnt = 0;            //This counter is for counting occurring "1"
    var bitIndex = 0;
    var byte = 0;
    var shiftRegister = 0;
    for(var i = 0; i < frame.length; i++) {
        //Cycle through whole array
        for(var k = 7; k >= 0; k--) {
            //Cycle through all bits of current byte
            const bit = ((frame[i] >>> k) & 0x01);
            shiftRegister = ((shiftRegister << 1) + bit) & 0xFF;

            //Check for Start Flag, if needed
            if(startFlagFound == false && shiftRegister == 0x7E) {
                //Start flag found, init frame decoding variables
                cnt = 0;
                bitIndex = 0;
                byte = 0;
                startFlagFound = true;
                break;
            }
            
            //Start Flag found, do the main frame decoding: remove bit stuffing
            if(startFlagFound == true) {
                //Check for End Flag
                if(shiftRegister == 0x7E) {
                    //End Flag detected, stop decoding
                    endFlagFound = true;
                    break;
                }
                else {
                    //Main frame decoding
                    if(bit == 0x01) {
                        //The current bit is a "1"
                        cnt += 1;

                        //Check for errors
                        if(cnt > 6) {
                            //This should never happen...
                            //Six consecutive "1" can be the stop bit but seven is an error
                            return null;
                        }

                        byte = ((byte << 1) + bit) & 0xFF;
                        bitIndex += 1;
                    }
                    else if(cnt == 5) {
                        //This is a "0" after five "1", discard aka do nothing
                        cnt = 0;
                    }
                    else {
                        //This is a normal "0"
                        cnt = 0;
                        byte = ((byte << 1) + bit) & 0xFF;
                        bitIndex += 1;
                    }

                    if(bitIndex == 8) {
                        //Full byte decoded, add to decoded frame
                        decodedFrame.push(byte);

                        byte = 0;
                        bitIndex = 0;
                    }
                }
            }
        }

        if(endFlagFound == true) {
            break;
        }
    }
    // console.log(decodedFrame);

    //Remove CRC from frame
    var frameCRC = 0;
    frameCRC = decodedFrame.pop();
    frameCRC += (decodedFrame.pop() << 8);

    //Calculate CRC
    const crc = CRCCalculation(decodedFrame);
    // console.log(crc);

    //Convert from LSBit to MSBit
    for(var i = 0; i < decodedFrame.length; i++) {
        decodedFrame[i] = ReverseBits(decodedFrame[i]);
    }
    // console.log(decodedFrame);

    return decodedFrame;
}

function toHex(d) {
    return  "0x" + ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
}

function fromHex(a) {
    return parseInt(a, 16);
}

function OnAX25FieldsInput() {
    //Get all input and output fields
	const msgType = document.querySelector("#ax25-msgType").value;
    var src = document.querySelector("#ax25-src").value;
    const srcSSID = document.querySelector("#ax25-srcSSID").value;
    var dst = document.querySelector("#ax25-dst").value;
    const dstSSID = document.querySelector("#ax25-dstSSID").value;
    const control = document.querySelector("#ax25-control").value;
    const pid = document.querySelector("#ax25-pid").value;
    const payload = document.querySelector("#ax25-payload").value;
    const ax25Output = document.querySelector("#ax25-frame");
    const hdlcOutput = document.querySelector("#hdlc-frame");

    //Add "space" padding to src field to match required length of 7
    if(src.length < 6) {
        src += Array(6 - src.length + 1).join("\x20");
    }

    //Add "space" padding to src field to match required length of 7
    if(dst.length < 6) {
        dst += Array(6 - dst.length + 1).join("\x20");
    }

	//Check if command or response message
	var cmdMsg = false;
	if(msgType == "command") {
		cmdMsg = true;
		console.log("cmd");
	}
	else {
		cmdMsg = false;
		console.log("res");
	}

    //Encode AX25 frame based on inputs
    const ax25Struct = new AX25Struct(src, srcSSID, dst, dstSSID, control, pid, payload, cmdMsg);
    const ax25Frame = ax25Struct.Encode();
    // console.log(ax25Frame);

    //Convert encoded AX25 frame into a ASCII HEX array
    var ax25FrameString = "";
    for(var i = 0; i < ax25Frame.length; i++) {
        ax25FrameString += toHex(ax25Frame[i]);

        //Add space between HEX numbers, except on the last
        if(i != (ax25Frame.length - 1)) {
            ax25FrameString += " ";
        }
    }
    // console.log(ax25FrameString);

    //Write ASCII HEX AX25 Frame to output textarea
    ax25Output.value = `${ax25FrameString}`;

    //Encode AX25 frame into a HDLC frame
    const hdlcFrame = HDLCEncode(ax25Frame);
    // console.log(hdlcFrame);

    //Convert encoded HDLC frame into a ASCII HEX array
    var hdlcFrameString = "";
    for(var i = 0; i < hdlcFrame.length; i++) {
        hdlcFrameString += toHex(hdlcFrame[i]);

        //Add space between HEX numbers, except on the last
        if(i != (hdlcFrame.length - 1)) {
            hdlcFrameString += " ";
        }
    }
    // console.log(hdlcFrameString);

    //Write ASCII HEX HDLC Frame to output textarea
    hdlcOutput.value = `${hdlcFrameString}`;
}

function OnAX25FrameInput() {
    //Get all input and output fields
	const msgType = document.querySelector("#ax25-msgType");
    const src = document.querySelector("#ax25-src");
    const srcSSID = document.querySelector("#ax25-srcSSID");
    const dst = document.querySelector("#ax25-dst");
    const dstSSID = document.querySelector("#ax25-dstSSID")
    const control = document.querySelector("#ax25-control");
    const pid = document.querySelector("#ax25-pid");
    const payload = document.querySelector("#ax25-payload");
    const ax25Frame = document.querySelector("#ax25-frame").value;
    const hdlcOutput = document.querySelector("#hdlc-frame");

    //Convert input ASCII HEX Array to encoded AX25 frame
    const ax25FrameBytes = [];
    const parts = ax25Frame.split(" ");
    for(var i = 0; i < parts.length; i++) {
        ax25FrameBytes.push(fromHex(parts[i]));
    }
    // console.log(ax25FrameBytes);

    //Decode AX25 frame
    const ax25Decoded = new AX25Struct(null, null, null, null, null, null, null, null);
    ax25Decoded.Decode(ax25FrameBytes);
    // console.log(ax25Decode);

    //Write Decoded AX25 frame fields back to input and output fields
	if(ax25Decoded.cmdMsg == true) {
		msgType.value = "command";
	}
	else {
		msgType.value = "response";
	}
    src.value = ax25Decoded.src;
    srcSSID.value = ax25Decoded.srcSSID.toString();
    dst.value = ax25Decoded.dst;
    dstSSID.value = ax25Decoded.dstSSID.toString();
    control.value = toHex(ax25Decoded.control);
    pid.value = toHex(ax25Decoded.pid);
    payload.value = ax25Decoded.payload;

    //Encode AX25 frame into a HDLC frame
    const hdlcFrame = HDLCEncode(ax25FrameBytes);
    // console.log(hdlcFrame);

    //Convert encoded HDLC frame into a ASCII HEX array
    var hdlcFrameString = "";
    for(var i = 0; i < hdlcFrame.length; i++) {
        hdlcFrameString += toHex(hdlcFrame[i]);

        //Add space between HEX numbers, except on the last
        if(i != (hdlcFrame.length - 1)) {
            hdlcFrameString += " ";
        }
    }
    // console.log(hdlcFrameString);

    //Write ASCII HEX HDLC Frame to output textarea
    hdlcOutput.value = `${hdlcFrameString}`;
}

function OnHDLCFrameInput() {
    //Get all input and output fields
    const src = document.querySelector("#ax25-src");
    const dst = document.querySelector("#ax25-dst");
    const control = document.querySelector("#ax25-control");
    const pid = document.querySelector("#ax25-pid");
    const payload = document.querySelector("#ax25-payload");
    const ax25Output = document.querySelector("#ax25-frame");
    const hdlcFrame = document.querySelector("#hdlc-frame");

    //Convert input ASCII HEX Array to encoded HDLC frame
    const hdlcFrameBytes = [];
    const parts = hdlcFrame.value.split(" ");
    for(var i = 0; i < parts.length; i++) {
        hdlcFrameBytes.push(fromHex(parts[i]));
    }
    // console.log(hdlcFrameBytes);

    //Decode HDLC Frame
    const ax25Frame = HDLCDecode(hdlcFrameBytes);

    if(ax25Frame == null) {
        //HDLC Decoding resulted in an error
        hdlcFrame.style.border = "2px solid red";

        ax25Output.value = "";
        src.value = "";
        dst.value = "";
        control.value = "0x00";
        pid.value = "0x00";
        payload.value = "";
        return;
    }
    else {
        //Clear border style/color
        hdlcFrame.style.border = "";
    }

    //Convert AX25 frame into a ASCII HEX array
    var ax25FrameString = "";
    for(var i = 0; i < ax25Frame.length; i++) {
        ax25FrameString += toHex(ax25Frame[i]);

        //Add space between HEX numbers, except on the last
        if(i != (ax25Frame.length - 1)) {
            ax25FrameString += " ";
        }
    }
    // console.log(ax25FrameString);

    //Write ASCII HEX AX25 Frame to output textarea
    ax25Output.value = `${ax25FrameString}`;

    //Decode AX25 frame
    const ax25Decoded = new AX25Struct(null, null, null, null, null, null, null, null);
    ax25Decoded.Decode(ax25Frame);
    // console.log(ax25Decode);

    //Write Decoded AX25 frame fields back to input and output fields
    src.value = ax25Decoded.src;
    dst.value = ax25Decoded.dst;
    control.value = toHex(ax25Decoded.control);
    pid.value = toHex(ax25Decoded.pid);
    payload.value = ax25Decoded.payload;
}