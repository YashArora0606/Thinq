function news(input) {

  const axios = require("axios");
  const NEWS_API_KEY = "9845463cdc6b4e00ac2444b904710617";
  const NEWS_URL = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=" + NEWS_API_KEY;
  return axios.get(NEWS_URL, {
    params: {
			NEWS_API_KEY,
			NEWS_URL,
		},
	})
	.then(result => {
    for (var i = 0; i < 3; i++) {
      output = result.data.articles[i].title;
      if (output === undefined) {
  			output = "Unfortunately, I wasn't able to find information on that subject.";
  		}
      return output
    }
	})
}
