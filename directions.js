const axios = require('axios');
const key = 'AIzaSyBjowTROtfYG8J7Ulwk4OUUemsGysQeWk4'

module.exports = (input) => {
    input = input.toLowerCase();

    if (input.indexOf("to ") > input.indexOf("from ")) {

    destinationLocation = input.substring(input.indexOf("to ")+3);
    departureLocation = input.substring(input.indexOf("from ")+5, input.indexOf("to ")-1);
    //console.log("Destination: " + destinationLocation + "\nDeparture: " + departureLocation);
    } else {

    departureLocation = input.substring(input.indexOf("from ")+5);
    destinationLocation = input.substring(input.indexOf("to ")+3, input.indexOf("from ")-1);
    //console.log("Destination: " + destinationLocation + "\nDeparture: " + departureLocation);
    }
    return getDirections(departureLocation, destinationLocation)
  }

function removeBrackets(input) {
  return input
    .replace(/{.*?}/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/<.*?>/g, "")
    .replace(/\(.*?\)/g, "");
}

const getDirections = (origin, destination) => axios.get('https://maps.googleapis.com/maps/api/directions/json', {
    params: {
      origin,
      destination,
      key
    }
  })
  .then(result => result.data.routes[0].legs[0].steps.map((e) => removeBrackets(e.html_instructions)).join('\n'))
