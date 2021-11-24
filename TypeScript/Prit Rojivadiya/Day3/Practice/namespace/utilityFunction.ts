namespace Utility{

    export namespace Fees{
        export function calculateLateFee(dayLate: number){
            return dayLate*0.25;
        }
    }

    export function maxBoolAllowed(age: number){
        if(age < 12){
            return 3;
        }else{
            return 10;
        }
    }

}

console.log(Utility.Fees.calculateLateFee(20))
