let reader = new FileReader();
let unlocked;
let progress;

// == Initialization ==
function initUpload() {
    document.getElementById("file-upload").addEventListener("change", handleUpload);
}

// == File Handling ==
function isFileValid(content) {
    // not sure how to verify this atm
    return true;
}

// Determine which achievements are unlocked
function parseFile(content) {
    unlocked = readAchievements(content);
    progress = readAchievementProgress(content);
}

function showAchievement(achievement, progress=null) {
    const output = `<h3>${achievement.name}</h3><p>${achievement.description}</p>`;

    document.getElementById("achievements-container").insertAdjacentHTML("beforeend", output);
}

function showAchievements() {
    // get achievement data for each unlocked achievement id
    let dataUnlocked = [];
    unlocked.forEach(ach => {
        dataUnlocked.push(achievementData[ach]);
    });

    // have a "sorted" parameter for this function that determines if it should be sorted (yes by default)
    // should the user decide they want it in the order stored in the uploaded file, re-run this function without sorting
    dataUnlocked.sort((a,b) => { return a.order - b.order });

    dataUnlocked.forEach(ach => {
        showAchievement(ach);
    });
}

function handleUpload() {
    let file = document.getElementById("file-upload").files[0];
    let reader = new FileReader();
    reader.addEventListener("load", (e) => {
        let result = reader.result;
        
        if(isFileValid(result) === true) {
            parseFile(result);
            showAchievements();
        }
        else {
            // add some kind of error notification here
        }
    });

    reader.readAsBinaryString(file);
}


initUpload();