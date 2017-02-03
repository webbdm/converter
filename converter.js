// Get a reference to the button element in the DOM and the converter DIV
var button = document.getElementById("converter");
//var convertedNum = document.getElementById("convertedTemp");
var unit = document.getElementsByClassName("unit");
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


// console.log(button);
// console.log(unit[0].value, unit[1].value);

// Conversion Functions
var inputNum = document.getElementById("initialTemp");
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

// Determine Conversions
function determineConverter (clickEvent) {

var checkedButton = "";
  
  if (unit.item(0).checked) {
      checkedButton = "celsius";
    } else if (unit.item(1).checked) {
      checkedButton = "fahrenheit"; 
    } else {
      alert("Select Fahrenheit or Celsius");
    }
  
  if (checkedButton === "celsius"){
      toFahrenheit(inputNum.value);
      console.log("radioC is checked");
  }
  
  if (checkedButton === "fahrenheit"){
    
      toCelsius(inputNum.value);   
      console.log("radioF is checked");
  }
  
  console.log("event", clickEvent);
}


// Conditionals that changes converTemp color

if (newCelTemp > 32 || newFahTemp > 90 ) {

  console.log("hot temperature");

} else if (newCelTemp < 0 || newFahTemp < 32 ) {

  console.log("cold temperature");

} else {

  console.log("normal temperature");

}


// Old loop for radio buttons. This was a horrible method, I do not recommend this voodoo.

// for (var i = 0; i < unit.length; i++) {
//   console.log("radio index", unit[i]);
//   unit[i].addEventListener("click", function(clickEvent) {
          
//           var checkedButton = "";
//           console.log("clickEvent", clickEvent);
//           checkedButton = clickEvent.target.value;
//           console.log("checkedButton", checkedButton);
//   });
// };



// Old variables

// // Get a reference to the button element in the DOM and the converter DIV
// var button = document.getElementById("converter");
// //var convertedNum = document.getElementById("convertedTemp");
// var unit = document.getElementsByClassName("unit");

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);


// // console.log(button);
// // console.log(unit[0].value, unit[1].value);