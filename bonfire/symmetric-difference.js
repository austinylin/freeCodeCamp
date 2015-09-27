function symDiff(set1, set2) {
  var combinedSet = set1.concat(set2);

  var results = [];
  for(var i = 0; i < combinedSet.length; i++) {
    var elem = combinedSet[i];
    // Collect elements that only appear in one set
    if(set1.some(e => e == elem) != set2.some(e => e == elem)) {
      results.push(elem);
    }
  }
  return results;
}

function sym(args) {

  switch(arguments.length) {
    // This case shouldn't exist per #3176
    case 1:
      return arguments[0];

    case 2:
      return symDiff(arguments[0], arguments[1]);

    case 3:
      var tmpDiff = symDiff(arguments[0], arguments[1]);
      return symDiff(tmpDiff, arguments[2]);

    // If there are more than 3 arguments give up.
    default:
      return false;
  }
}

sym([1, 2, 3], [5, 2, 1, 4]);
