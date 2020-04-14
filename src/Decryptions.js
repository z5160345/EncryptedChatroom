import {powerMod, isUpperCase, byteArrayToString, bin2String, longToByteArray, intArrayToString} from "./Helpers"

export function rsaDecrypt(intArray, key, modulus) {
    console.log(intArray)
    let array = intArray.map((int) => powerMod(int, key, modulus))
    console.log(array)
    array = intArrayToString(array)
    return array
}

export function caesarDecrypt(cipher, padding) {
    let message = '';

    for(var i in cipher){
        if (cipher[i] === ' '){
            message += cipher[i]
        } else if (isUpperCase(cipher[i])){
            message += String.fromCharCode((cipher.charCodeAt(i) - padding - 65) % 26 + 65);
        } else {
            message += String.fromCharCode((cipher.charCodeAt(i) - padding - 97) % 26 + 97);
        }
    }

    return message;
}

export function CTRDecrypt(message) {
    var aesjs = require('aes-js');
    
    var encryptedBytes = aesjs.utils.hex.toBytes(message);
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
    // The counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    var aesCtr = new aesjs.ModeOfOperation.ctr(key);
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);

    // Convert our bytes back into text
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText
}

export function CBCDecrypt(message) {
    var aesjs = require('aes-js');
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

    // The initialization vector (must be 16 bytes)
    var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];
    // When ready to decrypt the hex string, convert it back to bytes
    var encryptedBytes = aesjs.utils.hex.toBytes(message);
    // The cipher-block chaining mode of operation maintains internal
    // state, so to decrypt a new instance must be instantiated.
    var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    var decryptedBytes = aesCbc.decrypt(encryptedBytes);

    // Convert our bytes back into text
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText
    // "TextMustBe16Byte"
}