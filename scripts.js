function changeText() {
    const input = document.getElementById('inputText');
    const display = document.getElementById('display');
    
    if (input.value.trim() !== "") {
        display.textContent = input.value;
        input.value = ""; // Clear the input field
    } else {
        alert("Veuillez entrer un texte valide.");
    }
}
