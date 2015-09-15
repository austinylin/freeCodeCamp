function isCamelCase(str) {
  return (
    // Check that the first chracter is lower case
    (str.charAt(0) == str.charAt(0).toLowerCase())

    // Check that there is at least one upper case character
    && (Array.isArray(str.match(/[A-Z]/)))

    // Check there are no non word characters
    && (str.match(/[\W_]/) === null)
   );
  }

function spinalCase(str) {

  if(isCamelCase(str)) {
    // prepend a hypen to all capital letters, then downcase
    return str.replace(/([A-Z])/g, (match, char) => "-"+char ).toLowerCase();
  } else {
    // replace all space characters or underscores with hypens, then downcase
    return str.replace(/[\s_]/g, "-").toLowerCase();
  }
}

expect(spinalCase('test a')).to.equal('test-a');
expect(spinalCase('Test a')).to.equal('test-a');
expect(spinalCase('test A')).to.equal('test-a');
expect(spinalCase('Test A')).to.equal('test-a');
expect(spinalCase('testA')).to.equal('test-a');

expect(isCamelCase('testA')).to.equal(true);
expect(isCamelCase('testAppleBanana')).to.equal(true);
expect(isCamelCase('test')).to.equal(false);
expect(isCamelCase('test Smith')).to.equal(false);
expect(isCamelCase('test_Smith')).to.equal(false);
expect(isCamelCase('test-Smith')).to.equal(false);

spinalCase('This Is Spinal Tap');
