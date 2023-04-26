const {expect}=require("chai");
describe ("test suit",()=>{
    it ("should euqal 2",()=>{
        expect(1+1).to.equal((2));
    })
});
// prime number validator
function isPrime(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  //  Mocha test 
  describe('isPrime', function() {
    it('should return true for prime numbers', function() {
      expect(isPrime(2)).to.be.true;
      expect(isPrime(3)).to.be.true;
     
    });
  
    it('should return false for non-prime numbers', function() {
      expect.equal(isPrime(0).to.be.false);
      expect.equal(isPrime(1), to.be.false);
     
    });
  });
  