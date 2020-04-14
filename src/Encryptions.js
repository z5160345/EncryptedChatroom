import {powerMod, isUpperCase, gcd, stringToIntArray} from "./Helpers"

export function caesarCipher(message, shift){
    let decipher = '';

    for(var i in message){
        if (message[i] === ' '){
            decipher += message[i]
        } else if (isUpperCase(message[i])){
            decipher += String.fromCharCode((message.charCodeAt(i) + shift - 65) % 26 + 65);
        } else {
            decipher += String.fromCharCode((message.charCodeAt(i) + shift - 97) % 26 + 97);
        }
    }

    return decipher;
}

export function rsa(message, key, modulus){
    let intArray = stringToIntArray(message)
    intArray = intArray.map((int) => powerMod(int, key, modulus))
    //let q = 991
    //let p = 1907
    return intArray
}

export function CTR(text) {
    var aesjs = require('aes-js');
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

    var textBytes = aesjs.utils.utf8.toBytes(text);

    var aesCtr = new aesjs.ModeOfOperation.ctr(key);
    var encryptedBytes = aesCtr.encrypt(textBytes);

    // To print or store the binary data, you may convert it to hex
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    // "a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
    //  ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788"
    return encryptedHex
}

export function CBC(text) {
    var aesjs = require('aes-js');
        // An example 128-bit key
    var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

    // The initialization vector (must be 16 bytes)
    var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];

    while (text.length % 16 != 0){
        text = text + ' ';
    }
    // Convert text to bytes (text must be a multiple of 16 bytes)
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    var encryptedBytes = aesCbc.encrypt(textBytes);

    // To print or store the binary data, you may convert it to hex
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    console.log(encryptedHex);
    return encryptedHex
}

export function getRsaKeys(p, q){
    let modulus = p*q
    let l = (p-1)*(q-1)
    var start = 2;
    var end = l-1;
    var nums = [];
    while(start < end+1){
        nums.push(start++);
    }
    nums = nums.filter((number) => (gcd(number, modulus) == 1 && gcd(number, l) == 1))
    let key1 = nums[0]
    let key2list = [...Array(2000000).keys()]
    key2list = key2list.filter((number) => (number*key1)%l == 1)
    key2list = key2list.filter((number) => number != key1)
    let key2 = key2list[0];
    //console.log(key, key2, modulus)
    return [key1, key2, modulus]
}
