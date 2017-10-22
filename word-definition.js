
let input = "outstanding";

var wd = require("word-definition");
 
wd.getDef(input, "en", null, function(definition) {
    console.log("Definition of " + input + ": " + definition.definition);
});