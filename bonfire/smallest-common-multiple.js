function smallestCommons(arr) {
  // Get the min and max values from the array
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[1], arr[0]);

  // Determine how big the range of number we need to look at is
  var diff = max-min;

  // LCM method: https://en.wikipedia.org/wiki/Least_common_multiple#A_method_using_a_table

  // Initiatlize our matrix
  var matrix = [];
  for(var i = 0; i <= diff; i++) {
    matrix[i] = [min++];
  }

  // Divisor to test
  var divisor = 2;

  // Y index position in matrix
  var y = 0;

  // List of all divisors that were used and thus are LCM factors
  var lcmFactors = [];
  while(true) {
    var values = [];
    var nextDivisor = true;
    for(var j=0; j <= diff; j++) {
      // Store the current value in a working variable
      var val = matrix[j][y];

      // If val is divisable by the divisor store the quotient in the next
      // column of the matrix. Otherwise store the val unchanged. Either way
      // log the value we push into the matrix into values so we can check
      // if we are done later.
      if(val % divisor === 0){
        matrix[j][y+1] = val / divisor;
        values.push(val/divisor);
        nextDivisor = false;
      } else {
        matrix[j][y+1] = val;
        values.push(val);
      }
    }

    // If none of the elements were divisible by our divisor, move on,
    // otherwise note the divisor as a factor of the LCM.
    if(nextDivisor) {
      divisor++;
    } else {
      lcmFactors.push(divisor);
    }

    // If all of the values we added to the array are == 1,
    // we are done so break. This has to take place after we check the
    // divisor to make sure we capture the final number in the range.
    if(values.every(e => e == 1))
      break;

    // Move to the next column in the martrix
    y++;
  }

  // Return the LCM or the product of the LCM factors
  return lcmFactors.reduce((a, b) => a*b);

}


smallestCommons([2,5]);
