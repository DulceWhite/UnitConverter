// Unit converter

// Grab the input

const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');

let inputTypeVal;
let resultTypeVal;

// Add event listener

input.addEventListener('keyup', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);

// Assign inputs to variables as initial values
inputTypeVal=inputType.value;
resultTypeVal=resultType.value;

function myResult(){
    result.value = input.value;
// Update selected values   
    inputTypeVal=inputType.value;
    resultTypeVal=resultType.value;
// Compare input and result type value and add formula


if(inputTypeVal === "Inches" && resultTypeVal==="Milimeters"){
    result.value = Number(input.value) *25.4;
}else if(inputTypeVal === "Milimeters" && resultTypeVal==="Inches"){
    result.value = Number(input.value) *0.0394;
}

if(inputTypeVal === "Fahrenheit" && resultTypeVal==="Celcius"){
    result.value = Number((input.value)-32) *0.56;
}else if(inputTypeVal === "Celcius" && resultTypeVal==="Fahrenheit"){
    result.value = Number(input.value) *1.8 + 32;
}
if(inputTypeVal === "Liters" && resultTypeVal==="Gallons"){
    result.value = Number(input.value) *0.264;
}else if(inputTypeVal === "Gallons" && resultTypeVal==="Liters"){
    result.value = Number(input.value) *3.785;
}

}