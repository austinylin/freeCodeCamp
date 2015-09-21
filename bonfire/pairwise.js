function pairwise(arr, arg) {
  var retArr = [];

  // Define a callback function to test if two elements add up
  // to the defined value (arg).
  var testCallback = (a, b) => a + b == arg;

  // Iterate over arr creating a set of pairs, check each pair to
  // see if we should include the pair.
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {

      // Check against the testCallback function to see if we
      // should this pair, then make sure the elements aren't already
      // in our return set. If everything looks good capture the indicies.
      if(testCallback(arr[i], arr[j]) && retArr.indexOf(i) == -1 && retArr.indexOf(j) == -1) {
        retArr.push(i);
        retArr.push(j);
      }
    }
  }

  // Return the sum of the indicies we have in retArr.
  return retArr.reduce((a, b) => a+b, 0);
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
