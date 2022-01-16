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
function readAchievements(str) {
    let achievements = [];

    let baseIndex = str.indexOf("SRPA");
    if(baseIndex == -1) {
        return -1;
    }

    baseIndex += 10;
    let count = readInt32(str, baseIndex);

    for(let i = 0; i < count; i++) {
        let index = baseIndex + (i+1)*4;
        achievements.push(readInt32(str, index));
    }
    
    return achievements;
}

// Returns all saved achievement progress data in the save file
function readAchievementProgress(str) {
    let progress = new Object();
    progress.count = {};
    progress.event = {};
    progress.list = {};

    let currIndex = str.indexOf("SRPAP");
    if(currIndex == -1) {
        return -1;
    }

    currIndex += 11;

    // Get achievement progresses of type "count"
    let count = readInt32(str, currIndex);
    currIndex -= 4; // janky solution to make the rest of this work better - backtrack 4 so we can cleanly add 10 each loop iteration
    for(let i = 0; i < count; i++) { 
        currIndex += 10;
        let key = readInt32(str, currIndex);
        let value = readInt32(str, currIndex+4);
        progress.count[key] = value;
    }

    // Skip "event" progress section - seems to be unused
    // 8 = last "count" entry, 2 = section divider, 4 = count of event entries, 2 = section divider 
    currIndex += 8 + 2 + 4 + 2;

    // Get achievement progresses of type "list"
    count = readInt32(str, currIndex);
    console.log("count: " + count);
    for(let i = 0; i < count; i++) {
        currIndex += 6; // +2 to pass 2 byte element divider
        let currListKey = readInt32(str, currIndex);
        let currListItems = [];

        currIndex += 4;
        let countInList = readInt32(str, currIndex);
        console.log("countInList: " + countInList);

        // Each list has its own count that needs to be iterated
        for(let j = 0; j < countInList; j++) {
            currIndex += 4;
            currListItems.push(readInt32(str, currIndex));
        }

        progress.list[currListKey] = currListItems;
    }

    return progress;
}