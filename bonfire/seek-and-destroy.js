function destroyer(arr) {
  var args = Array.prototype.map.call(arguments, e => e);
  // remove the main array from the args array.
  args.shift(1);
  args.map(function (e) {arr = arr.filter( x => x != e )});
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
