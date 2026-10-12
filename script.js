// Get the display screen
let display = document.getElementById("display");


// Add value to display
function appendValue(value) {
    display.value += value;
}


// Clear the complete display
function clearDisplay() {
    display.value = "";
}


// Delete the last character
function deleteLast() {
    display.value =
        display.value.slice(0, -1);
}


// Calculate the result
function calculate() {

    try {

        display.value =
            eval(display.value);

    } catch (error) {

        display.value = "Error";

    }
}


// Keyboard Support
document.addEventListener("keydown", function(event) {

    // Numbers and operators
    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "." ||
        event.key === "%"
    ) {

        appendValue(event.key);
    }


    // Enter = Calculate
    if (event.key === "Enter") {

        calculate();
    }


    // Backspace = Delete
    if (event.key === "Backspace") {

        deleteLast();
    }


    // Escape = Clear
    if (event.key === "Escape") {

        clearDisplay();
    }

});