var Utility;
(function (Utility) {
    let Fees;
    (function (Fees) {
        function calculateLateFee(dayLate) {
            return dayLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBoolAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.maxBoolAllowed = maxBoolAllowed;
})(Utility || (Utility = {}));
console.log(Utility.Fees.calculateLateFee(20));
/// <reference path = 'utilityFunction.ts'/>
// import util = Utility.Fees
let lateFee = Utility.Fees.calculateLateFee(10);
console.log(lateFee);
let maxBook = Utility.maxBoolAllowed(13);
console.log(maxBook);
