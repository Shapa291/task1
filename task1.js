Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, initialValues) {
  let accamulator = initialValues === undefined ? this[0] : initialValues;
  const start = initialValues === undefined ? 1 : 0;

  for (let i = start; i < this.length; i++) {
    accamulator = callback(accamulator, this[i], index, this);
  }
  return accamulator;
};

Array.prototype.myFilter = function (callback) {
  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(his[i]);
    }
  }
  return filteredArray;
};

Array.prototype.myMap = function (callback) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
};

const numArr = [1, 2, 3, 4, 5, 6];
const arr = ["a", "b", "c"];
const dataForFilter = [1, 2, 3, 4, 5];
const dataForMap = [1, 2, 3, 4, 5, 6];

arr.myForEach((item, index, array) => {
  console.log(item, " ", index, " ");
});

const filterData = dataForFilter.myFilter((el) => {
  if (el > 2) return el;
});

const mappedData = dataForMap.myMap((item, index, array) => {
  console.log(item, " ", index, " ", array);
  return item * 3;
});
console.log(mappedData);

arr.myForEach((item, index, array) => {
  console.log(item, " ", index, " ");
});

console.log(numArr.myReduce((sum, val) => sum + val)); //without initial value
console.log(numArr.myReduce((sum, val) => sum + val, 100)); //with inital value
