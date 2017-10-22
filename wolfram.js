const axios = require('axios')
const appid = 'XVP98A-LKA3J7Q578'

module.exports = (i) => axios.get('http://api.wolframalpha.com/v1/result', {
    params: {
      appid,
      i
    }
  })
  .then(result => result.data)
