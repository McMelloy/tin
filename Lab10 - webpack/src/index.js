const temp_conv = require('./temp_conv');
const dist_conv = require('./dist_conv');


window.FahrenheitConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputCelsius").value = temp_conv.F_to_C(valNum);
    document.getElementById("inputKelvin").value = temp_conv.F_to_K(valNum);
  } 
window.CelsiusConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputFahrenheit").value = temp_conv.C_to_F(valNum);
    document.getElementById("inputKelvin").value = temp_conv.C_to_K(valNum);
  } 
window.KelvinConverter = function(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("inputFahrenheit").value = temp_conv.K_to_F(valNum);
    document.getElementById("inputCelsius").value = temp_conv.K_to_C(valNum);
  } 
window.MilesConverter = function(valNum) {
    document.getElementById("inputKilometers").value = dist_conv.MiToKm(parseFloat(valNum));
  } 
window.KilometersConverter = function(valNum) {
    document.getElementById("inputMiles").value = dist_conv.KmToMi(parseFloat(valNum));
  } 