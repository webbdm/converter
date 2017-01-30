inputNum = 0;

var outputTemp= 0;


function toCelsius () {

outputTemp = (5/9) * (inputNum - 32);


}

function toFahrenheit () {

outputTemp (9/5) * (inputNum + 32);

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converTemp");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Loop that changes converTemp color

if outputTemp = 