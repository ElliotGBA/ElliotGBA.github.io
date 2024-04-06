const btn = document.getElementById("colChangeButton");
btn.addEventListener("click", colChangeFunc);

let currentCol = "Dark Mode";
function colChangeFunc() {
    let rootColors = document.documentElement.style;
    if (currentCol === "Dark Mode") { // change to light mode
        currentCol = "Light Mode";
        rootColors.setProperty('--background', '#FEC7B4');
        rootColors.setProperty('--foreground', '#FFF3C7');
        rootColors.setProperty('--emphasis', '#FC819E');
        rootColors.setProperty('--text', '#F7418F');
    } else if (currentCol === "Light Mode") { // change to medium mode
        currentCol = "Medium Mode";
        rootColors.setProperty('--background', '#A79277');
        rootColors.setProperty('--foreground', '#EADBC8');
        rootColors.setProperty('--emphasis', '#496989');
        rootColors.setProperty('--text', '#0F2C59');
    } else if (currentCol === "Medium Mode") { // change to dark mode
        currentCol = "Dark Mode";
        rootColors.setProperty('--background', '#30323D');
        rootColors.setProperty('--foreground', '#4D5061');
        rootColors.setProperty('--emphasis', '#FC9FAA');
        rootColors.setProperty('--text', '#F5F1ED');
    }
    notifyColChange();
}

function notifyColChange() {
    const notification = document.getElementById("colChangeNotification").style;
    let op = 1;
    notification.opacity = op;
    let timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            notification.display = "none";
        }
        notification.opacity = op;
        notification.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

const form = document.getElementById("form");
function formSubmit() {
    // get values of stuffs
    const inputtedHP = document.getElementById("hpInput").value;
    const inputtedTempHP = document.getElementById("tempHpInput").value;
    const inputtedGrit = document.getElementById("gritInput").value;
    const maxHP = document.getElementById("maxHP").innerHTML.replace(/\D/g, "");
    const maxGrit = document.getElementById("maxGrit").innerHTML.replace(/\D/g, "");
    // checks
    if (inputtedHP > maxHP) {
        alert("Inputted HP is greater than max HP");
    } else if (inputtedHP < ((maxHP * -1)*0.5)) {
        alert("Inputted HP is too low");
    } else if (inputtedGrit > maxGrit) {
        alert("Inputted Grit is greater than max Grit");
    } else if (inputtedGrit < 0) {
        alert("Inputted Grit is too low");
    } else {
        document.getElementById("sheetHP").value = inputtedHP;
        document.getElementById("sheetTempHP").value = inputtedTempHP;
        document.getElementById("sheetGrit").value = inputtedGrit;
        form.remove();
    }
}