

function summarize(input) {

	input = input.substring(10);

	input = input.replace(/ /g,"_");

	const axios = require("axios");
	const SM_LENGTH = 2;
	const SM_API_KEY = "C5395F3DC0";
	const SM_URL = "https://simple.wikipedia.org/wiki/" + input;

	let output

	return axios.get("https://community-smmry.p.mashape.com/", {
		params: {
			SM_API_KEY,
			SM_LENGTH,
			SM_URL
		},
		headers: {
			'X-Mashape-Key': 'f7l5sOE3wImshRGFoYCMv3gLU72dp1ntKPCjsn7vwZZeVaECJK',
			'Accept': 'text/plain'
		}
	})
	.then(result => {
		output = result.data.sm_api_content;
		if (output === undefined) {
			output = "Unfortunately, I wasn't able to find information on that subject.";
		}
		return output
	})
}
module.exports = summarize;
