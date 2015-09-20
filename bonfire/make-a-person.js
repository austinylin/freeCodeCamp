var chai = require('chai');
var expect = chai.expect;

function Person(name) {
  var _first = "";
  var _last = "";

  function _setFullName(fullName) {
    var arr = fullName.split(" ");
    _first = arr[0];
    _last = arr[1];
  }

  _setFullName(name);
  this.getFullName = function() {
    return _first + " " + _last;
  };
  this.getFirstName = function() {
    return _first;
  };
  this.getLastName = function() {
    return _last;
  };
  this.setFirstName = function(first) {
    _first = first;
  };
  this.setLastName = function(last) {
    _last = last;
  };
  this.setFullName = function(name) {
    _setFullName(name);
  };
}

var bob = new Person('Bob Ross');
bob.getFullName();

expect(Object.keys(bob).length).to.eql(6);
expect(bob instanceof Person).to.eql(true);
expect(bob.firstName).to.eql(undefined);
expect(bob.lastName).to.eql(undefined);
expect(bob.getFirstName()).to.eql('Bob');
expect(bob.getLastName()).to.eql('Ross');
expect(bob.getFullName()).to.eql('Bob Ross');
bob.setFirstName('Happy');
expect(bob.getFirstName()).to.eql('Happy');
bob.setLastName('Trees');
expect(bob.getLastName()).to.eql('Trees');
bob.setFullName('George Carlin');
expect(bob.getFullName()).to.eql('George Carlin');
