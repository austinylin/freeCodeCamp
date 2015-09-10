function replace(str, before, after) {
  var wordArr = str.split(" ");
  var beforeIndex = wordArr.indexOf(before);
  if (beforeIndex == -1) {
    return str;
  }

  var firstChar = wordArr[beforeIndex][0];
  var afterArr = after.split("");
  if (firstChar == firstChar.toLowerCase()) {
    afterArr[0] = afterArr[0].toLowerCase();
  } else {
    afterArr[0] = afterArr[0].toUpperCase();
  }
  wordArr[beforeIndex] = afterArr.join("");

  return wordArr.join(" ");
}

expect(replace("blue", "green", "red")).to.equal("blue");
expect(replace("blue", "blue", "red")).to.equal("red");
expect(replace("blue", "blue", "Red")).to.equal("red");
expect(replace("Blue", "Blue", "red")).to.equal("Red");
replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
