function sumFibs(num) {
  var sum = 2;
  var a = 1;
  var b = 1;
  var c = 2;
  while(c <= num) {

    if(c % 2 == 1) {
      sum += c;
    }
    a = c;
    c = b+c;
    b = a;
  }
  return sum;
}

sumFibs(4);
