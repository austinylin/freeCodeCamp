function steamroller(arr) {
  var newArr = arr;
  while(newArr.some(e => Array.isArray(e))) {
    /*jshint -W083 */
    newArr =  newArr.reduce(function(a, b) {
      if(Array.isArray(a)) {
        return a.concat(b);
      } else {
        return [a].concat(b);
      }
    });
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);
