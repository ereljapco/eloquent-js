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

let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
