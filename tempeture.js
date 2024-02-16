//převod teplot
const fahrenheit = Number(prompt("Zadejte teplotu ve stupnice Fahrenheit: "))
const celsium = Math.round(5 * (fahrenheit - 32) / 9)

document.body.innerHTML = "<p> Teplota ve stupních Fahrenheit: " + fahrenheit + " F</p>"
document.body.innerHTML += "<p> Teplota ve stupních Celsius: " + celsium + " °C</p>"
