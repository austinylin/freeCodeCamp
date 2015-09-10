var chai = require('chai');
var expect = chai.expect;

function findPair(char) {
  switch(char) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "A":
      return "T";
    case "T":
      return "A";
  }
  return;
}
function pair(str) {
  var charArr = str.split("");
  var resultArr = [];
  charArr.forEach(function (e) {
    tempArr = [e, findPair(e)];
    resultArr.push(tempArr);
  });
  return resultArr;
}

expect(pair("GCG")).to.deep.equal([['G', 'C'], ['C', 'G'], ['G', 'C']]);
pair("GCG");
