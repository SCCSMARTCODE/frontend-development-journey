const htmlBody = document.querySelector("body");
const colors = ["green", "blue", "red", "orange", "brown"];

const workingFunction = function() {
    const idx = Math.floor(Math.random() * colors.length);
    htmlBody.style.backgroundColor = colors[idx];

    console.log("User clicked the page for a change of color!");
}

htmlBody.onclick  = workingFunction();