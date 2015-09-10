function where(arr, num) {
  arr.push(num);
  var sortedArray = arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

where([40, 60], 50);
