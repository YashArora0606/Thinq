function summarize(input) {

input = input.replace(/ /g,"_");

const SMMRY_API_KEY = "C5395F3DC0";
const unirest = require("unirest");
const SM_LENGTH = 2;
const SM_API_KEY = "C5395F3DC0";
const SM_URL = "https://simple.wikipedia.org/wiki/" + input;



unirest.get("https://community-smmry.p.mashape.com/?SM_API_KEY=" + SM_API_KEY + 
	"&SM_LENGTH=" + SM_LENGTH + "&SM_URL=" + SM_URL)

.header("X-Mashape-Key", "f7l5sOE3wImshRGFoYCMv3gLU72dp1ntKPCjsn7vwZZeVaECJK")
.header("Accept", "text/plain")
.end(function (result) {
	let output = result.body.sm_api_content;
	if (output === undefined) {
		output = "Unfortunately, I wasn't able to find information on that subject.";
	}
  return output;
});

}
module.exports = summarize;