'use strict';

function minMax1(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

function minMax2(arr) {
    var min = max = arr[0];
    for(var i = 0;i<arr.length;i++) {
        if(arr[i]>max) max = arr[i]
        if(arr[i]<min) min = arr[i]
    }
    return [min, max];
}

for (const solution of [
    //minMax1,
    minMax2]) {
    describe(solution.name + ': test', () => {
        it('[1, 2, 3, 4, 5] -> [1, 5]', () => expect(solution([1, 2, 3, 4, 5])).toEqual([1, 5]));
        it('[2334454, 5] -> [5, 2334454]', () => expect(solution([2334454, 5] )).toEqual([5, 2334454]));
        it('[1] -> [1, 1]', () => expect(solution([1])).toEqual([1, 1]));
        });
}