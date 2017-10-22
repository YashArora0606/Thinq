const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  console.log(req.body.Body)
  twiml.message('The Robots are coming! Head for the hills!')

  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port ' + (process.env.PORT || 3000))
})
