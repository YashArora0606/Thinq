const axios = require('axios')
const appid = 'AK7VHR-KYT34TQ9EK'

module.exports = (i) => axios.get('http://api.wolframalpha.com/v1/result', {
    params: {
      appid,
      i
    }
  })
  .then(result => result.data)
