function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var twoPi = 2*Math.PI;

  var retArr = [];

  for(var i = 0; i < arr.length; i++) {
    // Per Kepler's Third Law: T = 2π*sqrt(a^3/G*M) for small objects oribing a central body
    // a = altitute + earth's radius for objects orbiting earth
    var a = arr[i].avgAlt + earthRadius;
    var T = Math.round(twoPi*Math.sqrt(Math.pow(a, 3)/GM));

    // Push result to our return array
    retArr.push({name: arr[i].name, orbitalPeriod: T});
  }

  return retArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
