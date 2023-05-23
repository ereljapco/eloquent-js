// Original Solution

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(anotherVec) {
    let sumOfX = this.x + anotherVec.x;
    let sumOfY = this.y + anotherVec.y;

    return `Vec{x: ${sumOfX}, y: ${sumOfY}}`;
  }

  minus(anotherVec) {
    let diffOfX = this.x - anotherVec.x;
    let diffOfY = this.y - anotherVec.y;

    return `Vec{x: ${diffOfX}, y: ${diffOfY}}`;
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
