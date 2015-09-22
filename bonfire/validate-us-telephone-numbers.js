function telephoneCheck(str) {

  // Define the regex for phone numbers.
  var regx = /^(\d?)\s?\(?(\d{3})\)?[.-\s]?(\d{3})[.-\s]?(\d{4})[.-\s]?$/;
  var results = str.match(regx);

  switch(true) {
    // If the match object is null, this isn't a phone number
    case results === null:
      return false;
    // If the country code is non-null, make sure it's == 1.
    case results[1] !== "":
      return results[1] == "1";
    // Everything looks good, return true
    default:
      return true;
  }
}



telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("123**&!!asdf#");
