/// <reference path = 'utilityFunction.ts'/>

// import util = Utility.Fees

let lateFee = Utility.Fees.calculateLateFee(10);
console.log(lateFee);

let maxBook = Utility.maxBoolAllowed(13);
console.log(maxBook);
