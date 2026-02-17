const screen = document.getElementById("screen");
const historyList = document.getElementById("historyList");
const themeToggle = document.getElementById("themeToggle");

function append(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function scientific(type) {
    let value = parseFloat(screen.value);
    if (isNaN(value)) return;

    switch(type) {
        case "sin":
            screen.value = Math.sin(value);
            break;
        case "cos":
            screen.value = Math.cos(value);
            break;
        case "tan":
            screen.value = Math.tan(value);
            break;
        case "sqrt":
            screen.value = Math.sqrt(value);
            break;
        case "log":
            screen.value = Math.log10(value);
            break;
    }
}

function calculate() {
    try {
        let result = eval(screen.value);
        addToHistory(screen.value + " = " + result);
        screen.value = result;
    } catch {
        screen.value = "Error";
    }
}

function addToHistory(entry) {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

themeToggle.onclick = () => {
    document.body.classList.toggle("light");
};

// Keyboard Support
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)) {
        screen.value += e.key;
    } 
    else if (e.key === "Enter") {
        calculate();
    } 
    else if (e.key === "Backspace") {
        deleteLast();
    } 
    else if (e.key === "Escape") {
        clearScreen();
    }
});
