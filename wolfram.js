
const request = require("request");
const getWolfram = (input) => {
  let url = "http://api.wolframalpha.com/v1/result?appid=AK7VHR-KYT34TQ9EK&i=" + input;
  request(url, function(error,response,body) {
try {
console.log(body);
} catch (err) {
  console.log(err);
}
  });
}

getWolfram(input);