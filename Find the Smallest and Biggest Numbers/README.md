# [LFind the Smallest and Biggest Numbers](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

the function takes an array of numbers and return both the minimum and maximum numbers, in that order.

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
## Syntax

> minMax(number[]) -> number[]

### Parameters

**number[]**: `array`

- An array that contains random numbers

### Return Value: `array`

- return an array that contains min and max number in the array

## Test Cases

Sample tests from edabit:

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

```js
describe('Basic Tests', () => {
  Test.assertEquals(minMax([1, 2, 3, 4, 5])), [1, 5]);
  Test.assertEquals(minMax([2334454, 5]), [5, 2334454]);
  Test.assertEquals(minMax([1], [1, 1]);
});
```

## Use Cases

---

---

## [Marc](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

```js
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
```

### Strategy

- copying arrays
- using built in JS methods to find min and max values.
- returning min and max values.

### Implementation

he used Math.min and Math.max to find min and max numbers in the array. he wrote return them with an array.

### Possible Refactors

This strategy could also be implemented with these Implementation ...

---

### References

---

## [Mefitis](hhttps://edabit.com/challenge/Q3n42rEWanZSTmsJm)

```js
function minMax(arr) {
  var min = max = arr[0];
  for(var i = 0;i<arr.length;i++) {
    if(arr[i]>max) max = arr[i]
    if(arr[i]<min) min = arr[i]
  }
  return [min, max];
}
```

### Strategy

- he declared first min and max values.
- by listing all numbers, he compared min and max values with them.
- returned min and max values.

### Implementation

- min and max values initialized with array's firs value.
- he needed length of the array for 'for' loop.
- with for loop, he reached each value of the array.
- he used two if statement, one for min, one for max.
- checking if value is less or more than min or max. and if so, assignment was done.
- returned an array that contains min and max values.

### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- if statements can have { }, these makes code more readable and beautiful.

### References

---

## Retrospective

---
