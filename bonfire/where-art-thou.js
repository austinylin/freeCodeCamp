function where(collection, source) {
  var matchingObjects = [];
  for (i in Object.keys(source)) {
    // First filter out any candidates in the collection that don't have the
    // keys that are in the source object.
    var key = Object.keys(source)[i];
    var hasPropsArray = new Array();

    // Map over each object in collection to test if it has the prop.
    hasPropsArray = collection.map(function (e) { if (e.hasOwnProperty(key)) return e;});

    // Next filter out the candidates who don't have the same values.
    var value = source[Object.keys(source)[i]];
    var matchesValueArray = new Array();

    // Map over each object in collection to test if it has the value for the given prop.
    matchesValueArray = collection.map(function (e) { if (e[key] == value) return e;});
  }
  return matchesValueArray.filter(e => e != null);
}

expect(where([{a: 1}], {a: 1})).to.deep.equal([{a: 1}]);
expect(where([{a: 1 , b: 2}], {a: 1})).to.deep.equal([{a: 1, b: 2}]);
assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }), [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');
assert.deepEqual(where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }), [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 'should return with multiples');
assert.deepEqual(where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 }), [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }], 'should return two objects in array');
assert.deepEqual(where([{ 'a': 5 }, { 'a': 5 }, { 'a': 5, 'b': 10 }], { 'a': 5, 'b': 10 }), [{ 'a': 5, 'b': 10 }], 'should return a single object in array');
