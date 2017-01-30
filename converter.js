inputNum = 0;
outputC = 0;
outputF = 0;



function toCelsius () {

	outputC = (5/9) * (inputNum - 32);


}

function toFahrenheit () {

	outputF = (9/5) * (inputNum + 32);

}

// Get a reference to the button element in the DOM and the converter DIV
var button = document.getElementById("convert");
var element = document.getElementById("converTemp");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Conditionals that changes converTemp color

if (outputC > 32 || outputF > 90 ) {

	//change text color to red

} else if (outputC < 0 || outputF < 32 ) {

	//change text color to blue

} else {

	//change text color to green

}

