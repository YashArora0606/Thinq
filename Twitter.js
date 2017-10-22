var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'ivLU34nsBaanJ9Vdj2vJF3syo',
  consumer_secret: 'Uifx38juzwZg9ZLZ652RBJ9cZ2B6ELD1yUM9viUDewHNoDwxHW',
  access_token_key: '2954320858-Aqg8XuobXk6HWbE9FjftOThDcZe2fdbPNuBPXZm',
  access_token_secret: '5LDTFNVj3eoKYalS8UYumTkUjAckSqeK4G0URLhkizZ6u'
});

client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});
