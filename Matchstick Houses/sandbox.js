'use strict';

function matchHouses1(step) {
    if (step) {
      return step * 5 + 1;
    }
    return 0;
}

function matchHouses(step) {
    return step === 0 ? 0 : 5 * step + 1;
}

for (const solution of [
    //matchHouses1,
    matchHouses]) {

    describe(solution.name + ': test', () => {
        it('1 -> 6', () => expect(solution(1)).toEqual(6));
        it('4 -> 21', () => expect(solution(4)).toEqual(21));
        it('87 -> 436', () => expect(solution(87).toEqual(436)));
        });
}