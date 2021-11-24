var Utility;
(function (Utility) {
    var Fees;
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
