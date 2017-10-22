const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const bodyParser = require('body-parser')
const summarizer = require('./summarizer')
const weather = require('./weather')
const directions = require('./directions')
const wolfram = require('./wolfram');
const news = require('./news');
const define = require('./word-definition');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  const userInput = req.body.Body.toLowerCase()
Promise.resolve().then(function (){
  if (userInput.indexOf("define") >= 0) {

     return define(userInput);

 } else if (userInput.indexOf("summarize") >= 0 || userInput.indexOf("summary") >= 0) {

  		return summarizer(userInput);

  } else if (userInput.indexOf("direct") >= 0 ) {

  		return directions(userInput);

  } else if (userInput.indexOf("weather") >= 0) {

  		return weather(userInput);

  } else if (userInput.indexOf("news") >= 0) {

  		return news();

  } else {
      return wolfram(userInput)
  }
})
  .then(result => ((result && Object.keys(result).length !== 0) ? result : "I'm afraid I can't do that."))
  .catch(err => {
    console.log(err)
    return "I'm afraid I can't do that."
  })
  .then(result => twiml.message(result))
  .then(() => res.writeHead(200, {'Content-Type': 'text/xml'}))
  .then(() => res.end(twiml.toString()))
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port ' + (process.env.PORT || 3000))
})
