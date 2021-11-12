Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const arr = ["a", "b", "c"];

Array.prototype.myReduce = function (callback, initialValues) {
  let accamulator = initialValues === undefined ? this[0] : initialValues;
  const start = initialValues === undefined ? 1 : 0;

  for (let i = start; i < this.length; i++) {
    accamulator = callback(accamulator, this[i], index, this);
  }
  return accamulator;
};


arr.myForEach((item, index, array) => {
  console.log(item, " ", index, " ");
});

const numArr = [1, 2, 3, 4, 5, 6];
const arr = ["a", "b", "c"];
const dataForFilter = [1, 2, 3, 4, 5];

console.log(numArr.myReduce((sum, val) => sum + val)); //without initial value
console.log(numArr.myReduce((sum, val) => sum + val, 100)); //with inital value
Array.prototype.myFilter = function (callback) {
  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(his[i]);
    }
  }

  return filteredArray;
};


const filterData = dataForFilter.myFilter((el) => {
  if (el > 2) return el;
});

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