'use strict';

function lessThan100Tostihamkaas(a, b) {
    if (a + b >= 100){
        return false
        } 
    else {
        return true
        }
    }

    function lessThan100Vankodev(a, b) {
        return a+b<100;
    }

    function lessThan100Tugba(num1, num2) {
        let sum = num1 + num2;
        if (sum >= 100){
            return false
            } 
        else {
            return true
            }
        }

for (const solution of [lessThan100Tostihamkaas,lessThan100Vankodev,lessThan100Tugba]) {
    describe(solution.name + ': test', () => {
        it('22&15 -> true', () => expect(solution(22,15)).toEqual(true));
        it('83&34 -> false', () => expect(solution(83,34)).toEqual(false));
        it('3&77 -> true', () => expect(solution(3,77)).toEqual(true));
        });
}