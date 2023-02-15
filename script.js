function convertLength() {
  // Get the input values
  const from = document.getElementById("from").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  // Convert to meters
  let meters = 0;
  switch (fromUnit) {
    case "meters":
      meters = from;
      break;
    case "centimeters":
      meters = from / 100;
      break;
    case "kilometers":
      meters = from * 1000;
      break;
    case "feet":
      meters = from / 3.281;
      break;
    case "inches":
      meters = from / 39.37;
      break;
    case "yards":
      meters = from / 1.094;
      break;
  }

  // Convert from meters to the desired unit
  let result = 0;
  switch (toUnit) {
    case "meters":
      result = meters;
      break;
    case "centimeters":
      result = meters * 100;
      break;
    case "kilometers":
      result = meters / 1000;
      break;
    case "feet":
      result = meters * 3.281;
      break;
    case "inches":
      result = meters * 39.37;
      break;
    case "yards":
      result = meters * 1.094;
      break;
  }

  // Display the result with a precision of 5 decimal places
  document.getElementById("toLength").value = result.toFixed(5);
}

function convertTemperature() {
  // Get the input values
  const from = document.getElementById("fromTemp").value;
  const fromUnit = document.getElementById("fromUnitTemp").value;
  const toUnit = document.getElementById("toUnitTemp").value;

  // Convert to celsius
  let celsius = 0;
  switch (fromUnit) {
    case "celsius":
      celsius = from;
      break;
    case "fahrenheit":
      celsius = (from - 32) * 5 / 9;
      break;
    case "kelvin":
      celsius = from - 273.15;
      break;
  }

  // Convert from celsius to the desired unit
  let result = 0;
  switch (toUnit) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
  }
  // Display the result
  document.getElementById("toTemp").value = result.toFixed(5);
}

function convertCurrency() {
  // Get the input values
  const amount = document.getElementById("fromCurr").value;
  const fromCurrency = document.getElementById("fromUnitCurr").value;
  const toCurrency = document.getElementById("toUnitCurr").value;

  // Get the exchange rate
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      const result = amount * rate;
      // console.log(result);
      // Display result
      document.getElementById("toCurr").value = result.toFixed(2);
    })
    .catch(error => console.log(error));
}