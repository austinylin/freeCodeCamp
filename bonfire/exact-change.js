var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

function drawer(price, cash, cid) {
  var diff = cash - price;

  // If the customer owes us money return false.
  if(diff < 0) { return false; }

  // If we don't have any cash, return "Insufficient Funds".
  if(cid === undefined) { return "Insufficient Funds";}

  // Setup a helper array of denominations from high to low.
  var precedence = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER',
                    'DIME', 'NICKEL', 'PENNY'];

  // Setup a helper object that maps denomination to it's unit monetary value.
  var valueMap = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };

  // Setup the cashDrawer to hold the number of units of each denomination
  // we have.
  var cashDrawer = {
    'PENNY': 0,
    'NICKEL': 0,
    'DIME': 0,
    'QUARTER': 0,
    'ONE': 0,
    'FIVE': 0,
    'TEN': 0,
    'TWENTY': 0,
    'ONE HUNDRED': 0,
  };

  // Fill our cashDrawer with the correct number of each denomination. To do so
  // we need to parse the cid array which is formatted like this:
  // [
  //    ['DENOMINATION', XX.XX],
  //    ...
  // ]
  //
  // Thus cid[i][0] is the key and cid[i][1] for index i.
  for(var i = 0; i < cid.length; i++) {
    cashDrawer[cid[i][0]] = Math.round(cid[i][1] / valueMap[cid[i][0]]);
  }

  // Setup change to hold the number of units of each denomination we owe the
  // customer.
  var change = {
    'PENNY': 0,
    'NICKEL': 0,
    'DIME': 0,
    'QUARTER': 0,
    'ONE': 0,
    'FIVE': 0,
    'TEN': 0,
    'TWENTY': 0,
    'ONE HUNDRED': 0,
  };

  // Define variables we will use in the next two loops. (#ES6)
  var denomination;
  var numAvalibale;
  var value;

  // Now iterate through the denominations from high to low and use as many
  // units of each currency as possible (up to the number we have) until the
  // diff (change due) is 0 or we run out of denominations.
  for(var j = 0; j < precedence.length; j++) {
    if(diff === 0) { break; }
    denomination = precedence[j];
    numAvalibale = cashDrawer[denomination];
    value = valueMap[denomination];


    while(numAvalibale > 0 && diff - value >= 0) {
      oldDiff = diff;
      // Ugly workaround due to the lack of a decimal type.
      diff = parseFloat((diff - value).toPrecision(4));

      cashDrawer[denomination]--;
      change[denomination]++;
      numAvalibale = cashDrawer[denomination];
    }
  }

  // If we still owe the customer money return "Insufficient Funds".
  if(diff > 0) {
    return "Insufficient Funds";
  }

  // If we have used up all of our money return "Closed".
  if(Object.keys(cashDrawer).map(key => cashDrawer[key]).every(e => e === 0)) {
    return "Closed";
  }

  // Otherwise, convert our internal representation (change) into expected
  // format:
  // [
  //    ['DENOMINATION', XX.XX],
  //    ...
  // ]
  var retArr = [];
  for(var k = 0; k < precedence.length; k++) {
    denomination = precedence[k];
    numAvalibale = change[denomination];
    value = valueMap[denomination];

    if(numAvalibale !== 0) {
      retArr.push([denomination, numAvalibale * value]);
    }
  }
  return retArr;
}

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10],
                      ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00],
                      ['TEN', 20.00], ['TWENTY', 60.00],
                      ['ONE HUNDRED', 100.00]]);
drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]);
drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]);
drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]);
drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]);

expect(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])).to.be.a('array');
expect(drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])).to.be.a('string');
expect(drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])).to.be.a('string');
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]), [['QUARTER', 0.50]], 'return correct change');
assert.deepEqual(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]), [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ], 'return correct change with multiple coins and bills');
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]), 'Insufficient Funds', 'insufficient funds');
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]), "Closed", 'cash-in-drawer equals change');
