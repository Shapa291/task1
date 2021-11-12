Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function (callback) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
};
const dataForMap = [1, 2, 3, 4, 5, 6];

const mappedData = dataForMap.myMap((item, index, array) => {
  console.log(item, " ", index, " ", array);
  return item * 3;
});
console.log(mappedData);

const arr = ["a", "b", "c"];

arr.myForEach((item, index, array) => {
  console.log(item, " ", index, " ");
});
