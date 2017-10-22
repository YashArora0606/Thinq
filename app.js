const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const bodyParser = require('body-parser')
const summarizer = require('./summarizer')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()
  summarizer(req.body.Body)
  .then(result => twiml.message(result))
  .then(() => res.writeHead(200, {'Content-Type': 'text/xml'}))
  .then(() => res.end(twiml.toString()))
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port ' + (process.env.PORT || 3000))
})
