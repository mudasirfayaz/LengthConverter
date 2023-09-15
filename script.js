const convert = document.getElementById("convert");
const input = document.getElementById("input");
const output = document.getElementById("output");
var inputUnit = document.getElementById("inputUnit");
var outputUnit = document.getElementById("outputUnit");
const calc = document.getElementById("calc");

function swapInput() {
  var ip = input.placeholder;
  if (input.value !== "") {
    location.reload();
  }
  if (ip === "Enter length in kilometers") {
    input.placeholder = "Enter length in miles";
    output.placeholder = "Length in Kilometers";
    inputUnit.innerText = "mi";
    outputUnit.innerText = "km";
  } else {
    input.placeholder = "Enter length in kilometers";
    output.placeholder = "Length in miles";
    inputUnit.innerText = "km";
    outputUnit.innerText = "mi";
  }
}

convert.addEventListener("click", () => {
  var inputLength = parseInt(input.value);
  if (!isNaN(inputLength)) {
    if (input.placeholder === "Enter length in kilometers") {
      var result = (inputLength / 1.609344).toFixed(2);
      var calculation = inputLength + "km / 1.609344 = " + result;
    } else {
      var result = (inputLength * 1.609344).toFixed(2);
      var calculation = inputLength + "km x 1.609344 = " + result;
    }
    output.value = result;
    calc.value = calculation;
  } else {
    input.style.cssText = "background-color: #fc4c4c; color: #fff";
    input.value = "Enter a valid input";
  }
});

function resetInput() {
  location.reload();
}
