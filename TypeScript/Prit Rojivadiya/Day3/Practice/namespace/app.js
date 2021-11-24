/// <reference path = 'utilityFunction.ts'/>
// import util = Utility.Fees
var lateFee = Utility.Fees.calculateLateFee(10);
console.log(lateFee);
var maxBook = Utility.maxBoolAllowed(13);
console.log(maxBook);
