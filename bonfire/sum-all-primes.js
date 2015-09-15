var chai = require('chai');
var expect = chai.expect;

function sumPrimes(num) {
  // Check base cases
  if (num < 2)
    return 0;

  if (num == 2)
    return 2;

  /**
   *	1. Create a list of consecutive integers from 2 through n.
   *
   *  2. Initially, let p equal 2, the first prime number.
   *
   *  3. Starting from p, enumerate its multiples by counting to n in increments
   *  	 of p, and mark them in the list (these will be 2p, 3p, 4p, ... ;
   *  	 the p itself should not be marked).
   *
   *  4. Find the first number greater than p in the list that is not marked.
   *  	 If there was no such number, stop. Otherwise, let p now equal this new
   *  	 number (which is the next prime), and repeat from step 3.
   *
   *  Source: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
   */

   var arr = Array.apply(null, Array(num+1)).map(_ => true);
   var p = 2;

   while(true) {
     /*jshint -W083 */
     // Mark (set to false) all multiples of p
     arr = arr.map(function (v, k) {
       if(k != p && k%p === 0) {
        return false;
      } else {
        return v;
      }
     });

     /*jshint -W083 */
     // Find the next largest value that isn't marked (false)
     p = arr.findIndex((v, k) => k > p && v === true);

     // If p == -1 there isn't a larger value that is un-marked so we are done
     if (p == -1)
        break;
   }

   // Force 0 and 1 to be false
   arr[0] = false;
   arr[1] = false;

   // Sum the index values of the array where the element === true
   return arr.reduce((sum, e, i) => e? sum + i : sum);
 }

 expect(sumPrimes(0)).to.equal(0);
 expect(sumPrimes(1)).to.equal(0);
 expect(sumPrimes(2)).to.equal(2);
 expect(sumPrimes(3)).to.equal(5);
 expect(sumPrimes(4)).to.equal(5);
 expect(sumPrimes(5)).to.equal(10);

 sumPrimes(10);
