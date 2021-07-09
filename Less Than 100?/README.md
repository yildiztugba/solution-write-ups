# [Less than 100?](https://edabit.com/challenge/9MjEpkL7yAjAqiH58)

the function takes two numbers and return true if the sum of both numbers is less than 100. Otherwise return false.

lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true

## Syntax

> lessThan100(`number`,`number`) -> `boolean`

### Parameters

**number1**: `number`

- A number for checking if sum of number1 and number2 is less

**number2**: `number`

- A number for checking if sum of number1 and number2 is less

### Return Value: `boolean`

- return true if the sum of both numbers is less than 100. Otherwise return false.

## Test Cases

Sample tests from edabit:

lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true

```js
describe('Basic Tests', () => {
  Test.assertEquals(lessThan100(22, 15), true);
  Test.assertEquals(lessThan100(83, 34), false);
  Test.assertEquals(lessThan100(3, 77), true);
});
```

## Use Cases

---

---

## [tostihamkaas](https://edabit.com/challenge/9MjEpkL7yAjAqiH58)

```js
function lessThan100(a, b) {
if (a + b >= 100){
    return false
    } 
else {
    return true
    }
}
```

### Strategy

tostihamkaas chose the strategy of adding two numbers and checking if sum of them is greater or equal to 100.

### Implementation

tostihamkaas wrote if-else statement to check  if sum of them is greater or equal to 100. he wrotes return statements for each of them and returns boolean values (true or false).

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- there can be a new variable that will assigned for sum of two numbers.
- we can rename the variables (a and b) for example; number1 and number2

### References

---

## [vankodev](https://edabit.com/user/ygNnCnmzZfy3r2m6w)

```js
function lessThan100(a, b) {
    return a+b<100;
}
};
```

### Strategy

vankodev used same strategy with tostihamkaas (line 56). he added two numbers and checking sum of two numbers if it is less than 100.

### Implementation

- he didn't use if else statement, he made the code very short. he wrote matematical expression (a+b) and used < expression to get boolean value. he wrote the function one line with return value.

### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- There can be a if else statement for making the code clear and more understandable.
- there can be a new variable that will assigned for sum of two numbers.
- we can rename the variables (a and b) for example; number1 and number2

### References

---

### [My Solution]()

```js
function lessThan100(num1, num2) {
let sum = num1 + num2;
if (sum >= 100){
    return false
    } 
else {
    return true
    }
}
```

### Strategy

I added two numbers and checked it if it is greater or equal than 100. I renamed variables, now it is more clear. 

### Implementation

- I used if else statement for checking the condition. Also I declared a new variable for sum of two variable. This makes the code more understandable and readable.

### Possible Refactors

### Inspired By

### References

---

## Retrospective

I compared two solutions of vankodev's and tostihamkaas's. i come up with an idea that the shorter code doesnt mean always better. it should be simple but more understandable, readable.