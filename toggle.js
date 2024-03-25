const heading = document.getElementById("myHeading");
const toggleColourButton = document.getElementById("toggleColourButton");

toggleColourButton.addEventListener("click", toggleColourButton);

function toggleColourButtonClicked() {
    let buttonText = toggleColourButton.textContent;

    if (buttonText === "red") {
        heading.classList.remove("red");
        heading.classList.add("green");
        toggleColourButton.textContent = "Green"
    } else if (buttonText === "Green") {
        heading.classList.remove("green");
        heading.classList.add("blue");
        toggleColourButton.textContent = "Blue";
    } else if (buttonText === "Blue") {
        heading.classList.remove("blue");
        heading.classList.add("red");
        toggleColourButton.textContent = "red";
    }
    
}