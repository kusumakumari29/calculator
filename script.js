const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      input = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        // Replace ^2 with **2 for square calculation
        input = input.replace(/\^2/g, "**2");
        input = eval(input);
        display.value = input;
      } catch {
        display.value = "Error";
      }
    } 
    else {
      input += value;
      display.value = input;
    }
  });
});