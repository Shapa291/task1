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

const arr = ["a", "b", "c"];

arr.myForEach((item, index, array) => {
  console.log(item, " ", index, " ");
});

const numArr = [1, 2, 3, 4, 5, 6];

console.log(numArr.myReduce((sum, val) => sum + val)); //without initial value
console.log(numArr.myReduce((sum, val) => sum + val, 100)); //with inital value
