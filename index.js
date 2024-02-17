// Calculator Program

// Get the display element from the DOM
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input){
  // Add the input to the current value of the display
  display.value += input;
}

// Function to clear the display
function clearDisplay(){
  // Set the display value to an empty string
 display.value = "";
}

// Function to calculate the result
function calculate(){
  try{
    // Evaluate the expression in the display and set the result as the new display value
    display.value = eval(display.value);
  }catch(error){
    // If an error occurs during evaluation, set the display value to "Error"
    display.value = "Error";
  }
}