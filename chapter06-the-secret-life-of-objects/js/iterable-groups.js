// Original solution

class Group {
  constructor() {
    this.group = [];
  }

  has(value) {
    for (let element of this.group) {
      if (value === element) {
        return true;
      }
    }

    return false;
  }

  add(value) {
    if (!this.group.includes(value)) {
      this.group.push(value);
    }

    return this.group;
  }

  delete(value) {
    const index = this.group.indexOf(value);

    if (index > -1) {
      this.group.splice(index, 1);
    }

    return this.group;
  }

  static from(obj) {
    let newGroup = new Group();

    for (let element of obj) {
      newGroup.add(element);
    }

    return newGroup;
  }
}

class GroupIterator {
  constructor(group) {
    this.currentIndex = 0;
    this.group = group;
    this.length = this.group.group.length;
  }

  next() {
    if (this.currentIndex == this.length) {
      return { done: true };
    }

    let value = this.group.group[this.currentIndex];

    this.currentIndex++;

    return { value: value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
