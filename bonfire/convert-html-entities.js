function convert(str) {
  // Match all characters between u0022 and u003E and replace
  return str.replace(/[\u0022-\u003E]/g, match => "&#"+match.charCodeAt(0)+";");
}

convert('Dolce & Gabbana');
