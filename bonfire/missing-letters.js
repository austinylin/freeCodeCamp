var chai = require('chai');
var expect = chai.expect;

function fearNotLetter(str) {

  if (str.length <= 1) return undefined;

  for(var i=1; i < str.length; i++) {
    // Setup variables to make this easier
    var priorCharCode = str.charCodeAt(i-1);
    var currCharCode = str.charCodeAt(i);
    var nextCharCode = null;
    if (i+1 < str.length) {
      nextCharCode = str.charCodeAt(i+1);
    }

      if (priorCharCode + 1 != currCharCode) {
        var retVal = String.fromCharCode(priorCharCode+1);
        return retVal;
      }
    }

  return undefined;

}

expect(fearNotLetter("a")).to.equal(undefined);
expect(fearNotLetter("ac")).to.equal("b");

fearNotLetter("ac");
fearNotLetter("abce");
