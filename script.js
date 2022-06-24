const name = prompt('Enter your name');
const height = prompt('Enter your height');
const country = prompt('Enter your country');

function displayInfo(name, height, country) {
  alert(`Name: ${name} \nHeight: ${height} \nCountry: ${country}`);
}

displayInfo(name, height, country);