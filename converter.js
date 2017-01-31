var inputNum = 74; //document.getElementById("initialTemp").value;
console.log(inputNum);

function toCelsius (temp) {

	document.getElementById("convertedTemp").innerHTML = (temp - 32) * (5/9);
  var newCelTemp = document.getElementById("convertedTemp").innerHTML;
  console.log("Converted to Cel temp", newCelTemp, inputNum);
  
}

function toFahrenheit (temp) {

	document.getElementById("convertedTemp").innerHTML = temp * (9/5) + 32;
  var newFahTemp = document.getElementById("convertedTemp").innerHTML;
  console.log("Converted to Fah temp", newFahTemp, inputNum);
  
}


// toCelsius(inputNum);
// toFahrenheit(inputNum);

// Get a reference to the button element in the DOM and the converter DIV
var button = document.getElementById("converter");
var convertedNum = document.getElementById("convertedTemp");

var radioF = document.getElementById("radioF");
var radioC = document.getElementById("radioC");

radioC.checked = true;
radioF.checked = true;


// radio.addEventListener("click", function(clickEvent) {
//     var checkedButton = clickEvent.target.value;
//   });

// radio.addEventListener("click", function(clickEvent) {
//     var checkedButton = clickEvent.target.value;
//   });




// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  
  if (radioC === "true"){
    
      toFahrenheit(inputNum);
      console.log("radioC is checked");
  }
  
  if (radioF === "true"){
    
      toCelsius(inputNum);   
    	console.log("radioF is checked");
  }
  
  console.log("event", clickEvent);
}




// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// // Conditionals that changes converTemp color

// if (newCelTemp > 32 || newFahTemp > 90 ) {

// 	//change text color to red

// } else if (newCelTemp < 0 || newFahTemp < 32 ) {

// 	//change text color to blue

// } else {

// 	//change text color to green

// }
