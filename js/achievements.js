const INT_16_MAX = 65535;
const INT_32_MAX = 4294967295;

/* Helper functions for parsing and writing to save file */
function readInt16(str, index=0) {
    let byteLow = str.charCodeAt(index); // low byte
    let byteHigh = str.charCodeAt(index+1); // high byte

    return byteHigh * 0x100 + byteLow;
}

function readInt32(str, index=0) {
    // Negative numbers are possible here in modified prf files
    // Not worrying about them for now - need to handle two's complement manually
    
    let byte1 = str.charCodeAt(index); // low byte
    let byte2 = str.charCodeAt(index+1);
    let byte3 = str.charCodeAt(index+2);
    let byte4 = str.charCodeAt(index+3); // high byte

    return byte4 * Math.pow(0x100, 3) + byte3 * Math.pow(0x100, 2) + byte2 * 0x100 + byte1;
}

// Appends the given 16-bit int to the given string
function writeInt16(str, n) {
    if(!Number.isSafeInteger(n) || n > INT_16_MAX) {
        console.log("Error in writeInt16: " + n);
        return "";
    }

    return ""; 
}

// Appends the given 32-bit int to the given string
function writeInt32(str, n) {
    if(!Number.isSafeInteger(n) || n > INT_32_MAX) {
        console.log("Error in writeInt32: " + n);
        return "";
    }

    return ""; 
}

// Returns a list of the unlocked achievement IDs in the save file
function getAchievements(str) {
    let achievements = [];

    let baseIndex = str.indexOf("SRPA");
    if(baseIndex == -1) {
        return null;
    }

    baseIndex += 10;
    let count = readInt32(str, baseIndex);
    console.log(count);

    for(let i = 0; i < count; i++) {
        let index = baseIndex + (i+1)*4;
        achievements.push(readInt32(str, index));
    }
    
    return achievements;
}