# [Matchstick Houses](https://edabit.com/challenge/tYHkTdFrEmWfxpPKF)

function takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

## Syntax

> matchHouses(`number`) -> `number`

### Parameters

**step**: `number`

- a number that shows number of steps

### Return Value: `number`

- the number of matchsticks in the steps

## Test Cases

Sample tests from edabit:

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

```js
describe('Basic Tests', () => {
  Test.assertEquals(matchHouses(1)), 6);
  Test.assertEquals(matchHouses(4), 21);
  Test.assertEquals(matchHouses(87), 436);
});
```

## Use Cases

---

---

## [Ap]((https://edabit.com/challenge/tYHkTdFrEmWfxpPKF)

```js
function matchHouses(step) {
  if (step) {
    return step * 5 + 1;
  }
  return 0;
}
```

### Strategy

- checking if step is more than zero
- calculating the number of matchsticks in the steps.
- if condition is not passed, return value will be zero.

### Implementation

he calculated the number of matchsticks by multiplying step with 5 and adding 1 to them ((step \* 5) + 1 )
he wrote if statement for checking steps condition (step should be more than 0).

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- function can be ternary operator. (condition ? exprIfTrue : exprIfFalse)
- we can put parentheses (step*5) + 1, this makes code more clear.

---

### References

---

## [xiongerya](https://edabit.com/challenge/tYHkTdFrEmWfxpPKF)

```js
function matchHouses(step) {
  return step === 0 ? 0 : 5 * step + 1;
}
```

### Strategy

- similar strategy with Ap.
- checking if step is equal to zero
- calculating the number of matchsticks in the steps.

### Implementation

- ternary operator is used for condition.
- if step is equal to zero, return will be 0.
- if condition is not passed, it will make a calculation ( 5 * step + 1)

### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- if statements can have { }, these makes code more readable and beautiful. (5 * step) + 1
- The input (step) will always be a non-negative integer. Condition should be change like (step > 0)

### References

---

## Retrospective

---
