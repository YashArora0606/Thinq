const request = require("request");

const getWeather = (input) => {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + input
    + "&units=metric&appid=" + "736bbe5d8a6cc6ec2ebc1138ab70c706";
    request(url, function (error, response, body) {
        if (!error) {
            try {
                const compassSectors = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
                let parsedData = JSON.parse(body);

                let weatherInfo = 
                'Location: ' + parsedData.name + ', ' + parsedData.sys.country 
                +'\nTemperature: ' + parsedData.main.temp + '°C'
                +'\nSunrise: ' + convertUnixTime(parsedData.sys.sunrise) 
                +'\nSunset: ' + convertUnixTime(parsedData.sys.sunset) 
                +'\nWind Direction: ' + compassSectors[Math.round(parsedData.wind.deg / 22.5)]  
                +'\nWind Speed: ' + parsedData.wind.speed + ' km/h'  
                +'\nPressure: ' + parsedData.main.pressure + ' mb' 
                +'\nHumidity: ' + parsedData.main.humidity + '%';

                console.log(weatherInfo);
            } catch (err) {
                console.log(err);
            }
        }
    });

}
const convertUnixTime = (unixTime) => {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  //let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ':' + minutes.substr(-2)/* + ':' + seconds.substr(-2)*/;
  return formattedTime;
}

getWeather(input);