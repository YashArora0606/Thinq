const axios = require('axios')
const appid = '736bbe5d8a6cc6ec2ebc1138ab70c706'

const getWeather = (q) => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q,
        appid,
        units: 'metric'
      }
    })
    .then(({ data }) => {
      const compassSectors = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

      return 'Location: ' + data.name + ', ' + data.sys.country
      +'\nTemperature: ' + data.main.temp + '°C'
      +'\nSunrise: ' + convertUnixTime(data.sys.sunrise)
      +'\nSunset: ' + convertUnixTime(data.sys.sunset)
      +'\nWind Direction: ' + compassSectors[Math.round(data.wind.deg / 22.5)]
      +'\nWind Speed: ' + data.wind.speed + ' km/h'
      +'\nPressure: ' + data.main.pressure + ' mb'
      +'\nHumidity: ' + data.main.humidity + '%';
    })
}
const convertUnixTime = (unixTime) => {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  //let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ':' + minutes.substr(-2)/* + ':' + seconds.substr(-2)*/;
  return formattedTime;
}

module.exports = getWeather
