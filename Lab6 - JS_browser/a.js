function FahrenheitToCelsius(val) {
    valNum = parseFloat(val);
    document.getElementById("inputCelsius").value = ((val - 32) / 1.8).toFixed(2);
} 

function CelsiusToFahrenheit(val) {
    valNum = parseFloat(val);
    document.getElementById("inputFahrenheit").value = val * 1.8 + 32;
} 