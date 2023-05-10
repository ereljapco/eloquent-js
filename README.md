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
		- [Looping a Triangle](#looping-a-triangle)
			- [Links](#links-1)
			- [Problem Description](#problem-description)
			- [Hints](#hints)
		- [FizzBuzz](#fizzbuzz)
			- [Links](#links-2)
			- [Problem Description](#problem-description-1)
		- [Chessboard](#chessboard)
			- [Links](#links-3)
			- [Problem Description](#problem-description-2)
	- [Chapter 03 - Functions](#chapter-03---functions)
		- [Minimum](#minimum)
			- [Links](#links-4)
			- [Problem Description](#problem-description-3)
		- [Recursion](#recursion)
			- [Links](#links-5)
			- [Problem Description](#problem-description-4)
		- [Bean Counting](#bean-counting)
			- [Links](#links-6)
			- [Problem Description](#problem-description-5)

## Overview

### Links

- Solution URL: [https://github.com/ereljapco/eloquent-js](https://github.com/ereljapco/eloquent-js)
- Live Site URL: [https://eloquent-js-erj.netlify.app/](https://eloquent-js-erj.netlify.app/)

## Chapter 01 - Values, Types, and Operators

## Chapter 02 - Program Structure

### Looping a Triangle

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/looping-a-triangle.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/looping-a-triangle.html)

#### Problem Description

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

### FizzBuzz

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/fizzbuzz.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/fizzbuzz.html)

#### Problem Description

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

### Chessboard

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter02-program-structure/js/chessboard.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter02-program-structure/chessboard.html)

#### Problem Description

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

### Minimum

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/minimum.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/minimum.html)

#### Problem Description

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

### Recursion

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/recursion.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/recursion.html)

#### Problem Description

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function `isEven` corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

### Bean Counting

#### Links

- [Solution URL](https://github.com/ereljapco/eloquent-js/blob/main/chapter03-functions/js/bean-counting.js)
- [Live Site Page URL](https://eloquent-js-erj.netlify.app/chapter03-functions/bean-counting.html)

#### Problem Description

You can get the Nth character, or letter, from a string by writing `"string"[N]`. The returned value will be a string containing only one character (for example, "b"). The first character has position `0`, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.
