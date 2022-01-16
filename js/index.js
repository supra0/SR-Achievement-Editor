let reader = new FileReader();
let unlocked;

/* == Initialization == */
function initUpload() {
    document.getElementById("file-upload").addEventListener("change", handleUpload);
}

/* == File Handling == */
function isFileValid(content) {
    // not sure how to verify this atm
    return true;
}

// Determine which achievements are unlocked
function parseFile(content) {
    unlocked = readAchievements(content);
    progress = readAchievementProgress(content);

    console.log(progress);
}

function showAchievements() {
    unlocked.forEach(id => {
        let achievement = achievementData[id];
        const output = `<h4>${achievement.name}</h4><p>${achievement.description}</p>`;

        document.querySelector("body").insertAdjacentHTML("beforeend", output);
    });
}

function handleUpload() {
    let file = document.getElementById("file-upload").files[0];
    let reader = new FileReader();
    reader.addEventListener("load", (e) => {
        let result = reader.result;
        
        if(isFileValid(result) === true) {
            document.getElementById("upload-status").style.visibility = "hidden";

            parseFile(result);
            showAchievements();
        }
        else {
            let statusElement = document.getElementById("upload-status");
            statusElement.innerHTML = "File is not valid";
            statusElement.style.visibility = "visible";
        }
    });

    reader.readAsBinaryString(file);
}

function writeToFile(content) {
    // write content to file and download
}


initUpload();