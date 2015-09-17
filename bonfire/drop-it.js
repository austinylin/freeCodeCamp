function drop(arr, func) {
  // Determine what the first index value is that returns true
  var i = 0;
  while(i < arr.length && !func(arr[i])){
    i++;
  }

  // Return only elements after that index value
  return arr.slice(i);
}

drop([1, 2, 3], function(n) {return n < 3; });
