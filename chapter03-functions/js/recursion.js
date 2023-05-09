function isEven(x) {
  if (x == 1) {
    return false;
  } else if (x - 2 == 0) {
    return true;
  } else if (x < 0) {
    return `Oops. That's not a positive whole number.`;
  } else {
    return isEven(x - 2);
  }
}

console.log(isEven(50));
