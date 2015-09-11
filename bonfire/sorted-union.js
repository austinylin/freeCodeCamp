var chai = require('chai');
var expect = chai.expect;

function unite(arr1, arr2, arr3) {
  var retArr = [];
  for(var i=0; i < arguments.length; i++) {
    retArr = retArr.concat(arguments[i].filter(e => retArr.indexOf(e) == -1));
  }

  return retArr;
}
unite([1], []);
expect(unite([], [])).to.deep.equal([]);
expect(unite([], [], [])).to.deep.equal([]);
expect(unite([1], [])).to.deep.equal([1]);
expect(unite([], [], [3])).to.deep.equal([3]);
expect(unite([1], [2], [3])).to.deep.equal([1, 2, 3]);
expect(unite([1, 3], [2])).to.deep.equal([1, 3, 2]);


unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
