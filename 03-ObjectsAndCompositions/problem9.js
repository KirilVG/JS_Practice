function createSortedList() {
  let res = {
    size: 0,
    content: [],
    add: function (num) {
      this.size++;
      this.content.push(num);
      this.content.sort((a, b) => a - b);
    },
    remove: function (ind) {
      if (ind < 0 || ind >= this.size) throw "error";
      this.content.splice(ind, 1);
      this.size--;
      this.content.sort((a, b) => a - b);
    },
    get: function (ind) {
      if (ind < 0 || ind >= this.size) throw "error";
      return this.content[ind];
    },
  };

  return res;
}

let list = createSortedList();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));
