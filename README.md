# Eloquent JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/4cdd7f83-e449-44b5-9d4b-61815356d64b/deploy-status)](https://app.netlify.com/sites/eloquent-js-erj/deploys)

These are my solutions to the exercises found on [Marijn Haverbeke's Eloquent JS book](https://eloquentjavascript.net/).

## Table of Contents

- [Eloquent JS](#eloquent-js)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Links](#links)
  - [Chapter 01 - Values, Types, and Operators](#chapter-01---values-types-and-operators)
  - [Chapter 02 - Program Structure](#chapter-02---program-structure)
    - [👉🏻 Looping a Triangle](#-looping-a-triangle)
      - [🔗 Links](#-links)
      - [🤔 Problem Description](#-problem-description)
      - [Hints](#hints)
    - [👉🏻 FizzBuzz](#-fizzbuzz)
      - [🔗 Links](#-links-1)
      - [🤔 Problem Description](#-problem-description-1)
    - [👉🏻 Chessboard](#-chessboard)
      - [🔗 Links](#-links-2)
      - [🤔 Problem Description](#-problem-description-2)
  - [Chapter 03 - Functions](#chapter-03---functions)
    - [👉🏻 Minimum](#-minimum)
      - [🔗 Links](#-links-3)
      - [🤔 Problem Description](#-problem-description-3)
    - [👉🏻 Recursion](#-recursion)
      - [🔗 Links](#-links-4)
      - [🤔 Problem Description](#-problem-description-4)
    - [👉🏻 Bean Counting](#-bean-counting)
      - [🔗 Links](#-links-5)
      - [🤔 Problem Description](#-problem-description-5)
  - [Chapter 04 - Data Structures: Objects and Arrays](#chapter-04---data-structures-objects-and-arrays)
    - [👉🏻 The Sum of a Range](#-the-sum-of-a-range)
      - [🔗 Links](#-links-6)
      - [🤔 Problem Description](#-problem-description-6)
    - [👉🏻 Reversing an Array](#-reversing-an-array)
      - [🔗 Links](#-links-7)
      - [🤔 Problem Description](#-problem-description-7)
    - [👉🏻 A List](#-a-list)
      - [🔗 Links](#-links-8)
      - [🤔 Problem Description](#-problem-description-8)

## Overview

### Links

- Solution URL: [https://github.com/ereljapco/eloquent-js](https://github.com/ereljapco/eloquent-js)
- Live Site URL: [https://eloquent-js-erj.netlify.app/](https://eloquent-js-erj.netlify.app/)

## Chapter 01 - Values, Types, and Operators

## Chapter 02 - Program Structure

### 👉🏻 Looping a Triangle

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/looping-a-triangle.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/looping-a-triangle.html)

#### 🤔 Problem Description

Write a loop that makes seven calls to `console.log` to output the following triangle:

```js
#
##
###
####
#####
######
#######
```

#### Hints

It may be useful to know that you can find the length of a string by writing `.length` after it.

```js
let abc = 'abc';

console.log(abc.length);

// Output: 3
```

### 👉🏻 FizzBuzz

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/fizzbuzz.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/fizzbuzz.html)

#### 🤔 Problem Description

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

### 👉🏻 Chessboard

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/chessboard.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/chessboard.html)

#### 🤔 Problem Description

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to `console.log` should show something like this:

```js
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a binding `size = 8` and change the program so that it works for any size, outputting a grid of the given width and height.

## Chapter 03 - Functions

### 👉🏻 Minimum

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/minimum.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/minimum.html)

#### 🤔 Problem Description

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

### 👉🏻 Recursion

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/recursion.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/recursion.html)

#### 🤔 Problem Description

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function `isEven` corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

### 👉🏻 Bean Counting

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/bean-counting.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/bean-counting.html)

#### 🤔 Problem Description

You can get the Nth character, or letter, from a string by writing `"string"[N]`. The returned value will be a string containing only one character (for example, "b"). The first character has position `0`, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.

## Chapter 04 - Data Structures: Objects and Arrays

### 👉🏻 The Sum of a Range

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter04-data-structures/js/the-sum-of-a-range.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter04-data-structures/the-sum-of-a-range.html)

#### 🤔 Problem Description

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

```js
console.log(sum(range(1, 10)));
```

Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return `55`.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

### 👉🏻 Reversing an Array

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter04-data-structures/js/reversing-an-array.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter04-data-structures/reversing-an-array.html)

#### 🤔 Problem Description

Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it \*_modifies_ the array given as argument by reversing its elements. Neither may use the standard `reverse` method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

### 👉🏻 A List

#### 🔗 Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter04-data-structures/js/a-list.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter04-data-structures/a-list.html)

#### 🤔 Problem Description

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the _list_ (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```js
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};
```

The resulting objects form a chain, like this:

![](https://eloquentjavascript.net/img/linked-list.svg)

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function `arrayToList` that builds up a list structure like the one shown when given `[1, 2, 3]` as argument. Also write a `listToArray` function that produces an array from a list. Then add a helper function `prepend`, which takes an element and a list and creates a new list that adds the element to the front of the input list, and `nth`, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or `undefined` when there is no such element.

If you haven’t already, also write a recursive version of nth.
