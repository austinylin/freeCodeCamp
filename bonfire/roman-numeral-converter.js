function between(n1, n2, n3) {
	return isNaN(n1) || isNaN(n2) || isNaN(n3) ? NaN : n1 >= Math.min(n2, n3) && n1 <= Math.max(n2, n3);
}

function convert_rescusive(num, arr) {
  // Base case
  if (num === 0) {
    return arr;
  }

  // Recursive case
  switch(true) {
    case between(num, 1, 3):
      arr.push("I");
      num = num - 1;
      break;
     case num == 4:
      arr.push("IV");
      num = num - 4;
      break;
    case between(num, 5, 8):
      arr.push("V");
      num = num - 5;
      break;
    case num == 9:
      arr.push("IX");
      num = num - 9;
      break;
    case between(num, 10, 39):
      arr.push("X");
      num = num - 10;
      break;
    case between(num, 40, 49):
      arr.push("XL");
      num = num - 40;
      break;
    case between(num, 50, 89):
      arr.push("L");
      num = num - 50;
      break;
    case between(num, 90, 99):
      arr.push("XC");
      num = num - 90;
      break;
    case between(num, 100, 399):
      arr.push("C");
      num = num - 100;
      break;
    case between(num, 400, 499):
      arr.push("CD");
      num = num - 400;
      break;
    case between(num, 500, 899):
      arr.push("D");
      num = num - 500;
      break;
    case between(num, 900, 999):
      arr.push("XM");
      num = num - 900;
      break;
    case num >= 1000:
      arr.push("M");
      num = num - 1000;
      break;

  }
  return convert_rescusive(num, arr);
}

function convert(num) {
  var arr = [];
  return convert_rescusive(num, arr).join("");
}
expect(convert(36)).to.equal("XXXVI");
expect(convert(2056)).to.equal("MMLVI");
expect(convert(2038)).to.equal("MMXXXVIII");
