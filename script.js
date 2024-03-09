// Function that display value 
function dis(val) {
    document.getElementById("result").value += val;
}

// Function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

// Function that clear the display 
function clr() {
    document.getElementById("result").value = "";
}

// Clear button event listener
document.getElementById("clearButton").addEventListener("click", clr);

// Number button event listeners
let numberButtons = document.querySelectorAll(".numberButton");
numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        dis(button.value);
    });
});

// Operator button event listeners
let operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        dis(button.value);
    });
});

// Equal button event listener
document.getElementById("equalButton").addEventListener("click", solve);

// Handle Enter key press
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        solve();
    }
});
