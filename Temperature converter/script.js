document.getElementById('convertButton').addEventListener('click', () => {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultArea = document.getElementById('resultArea');

    if (isNaN(temperatureInput)) {
        resultArea.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;
    if (fromUnit === toUnit) {
        convertedTemperature = temperatureInput;
    } else {
        if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                convertedTemperature = (temperatureInput * 9/5) + 32;
            } else if (toUnit === 'kelvin') {
                convertedTemperature = temperatureInput + 273.15;
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                convertedTemperature = (temperatureInput - 32) * 5/9;
            } else if (toUnit === 'kelvin') {
                convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                convertedTemperature = temperatureInput - 273.15;
            } else if (toUnit === 'fahrenheit') {
                convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
            }
        }
    }

    resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${getUnitAbbreviation(toUnit)}`;
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('temperatureInput').value = '';
    document.getElementById('fromUnit').value = 'celsius';
    document.getElementById('toUnit').value = 'celsius';
    document.getElementById('resultArea').textContent = '';
});

function getUnitAbbreviation(unit) {
    switch (unit) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'K';
        default:
            return '';
    }
}
