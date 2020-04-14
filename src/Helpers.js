export function isUpperCase(str) {
    return str === str.toUpperCase();
}

export function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

export function powerMod(base, exponent, modulus) {
    if (modulus === 1) return 0;
    var result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1)  //odd number
            result = (result * base) % modulus;
        exponent = exponent >> 1; //divide by 2
        base = (base * base) % modulus;
    }
    return result;
}

export function stringToIntArray(string){
    let array = []
    for (var i in string) {
        array.push(string.charCodeAt(i))
    }
    return array
}

export function intArrayToString(array){
    let string = ""
    for (var i in array){
        string = string.concat(String.fromCharCode(array[i]))
    }
    return string
}

/*
export function pack(bytes) {
    var chars = [];
    for(var i = 0, n = bytes.length; i < n;) {
        chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
    }
    return String.fromCharCode.apply(null, chars);
}

export function unpack(str) {
    var bytes = [];
    for(var i = 0, n = str.length; i < n; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8, char & 0xFF);
    }
    return bytes;
}

export function string2Bin(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i));
    }
    return result;
  }
  
export function bin2String(array) {
    return String.fromCharCode.apply(String, array);
  }

export function byteArrayToString(bytes) {
    var chars = [];
    for(var i = 0, n = bytes.length; i < n;) {
        chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
    }
    return String.fromCharCode.apply(null, chars);
}

export function stringToByteArray(str) {
    var bytes = [];
    for(var i = 0, n = str.length; i < n; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8, char & 0xFF);
    }
    return bytes;
}

export function longToByteArray(x) {
    // we want to represent the input as a 8-bytes array
    var bytes = [];
    var i = 8;
    do {
    bytes[--i] = x & (255);
    x = x>>8;
    } while ( i )
    return bytes;
};

export function byteArrayToLong (x) {
    var val = 0;
    for (var i = 0; i < x.length; ++i) {        
        val += x[i];        
        if (i < x.length-1) {
            val = val << 8;
        }
    }
    return val;
};

*/