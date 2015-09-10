var chai = require('chai');
var expect = chai.expect;

function translate(str) {
  var consonantArr = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N",
                      "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"];

  var charArr = str.split("");
  var removedChars = [];
  for(var i=0; i < charArr.length; i++) {
    if(consonantArr.indexOf(charArr[i].toUpperCase()) > -1) {
      removedChars.push(charArr[i]);
    } else {
      break;
    }
  }
  console.log(removedChars);
  if(removedChars.length > 0) {
    charArr.splice(0, removedChars.length);
    removedChars.forEach(e => charArr.push(e));
    return charArr.join("") + "ay";
  } else {
    return str + "way";
  }
}

expect(translate("bay")).to.equal("aybay");
expect(translate("ay")).to.equal("ayway");
expect(translate("smith")).to.equal("ithsmay");
expect(translate("glove")).to.equal("oveglay");
translate("consonant");
