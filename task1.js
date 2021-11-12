Array.prototype.myFindIndex = function (callback) {
  let findIndexResult = -1;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      findIndexResult = i;
      break;
    }
  }
  return findIndexResult;
};

const dataForTestFIND = [1, 2, 3, 4, 5, 6, 7, 10, 1, 1];

const testFunctionArrayFIND = (el, index, array) => {
  return el < 5
};

const testFunctionElementFIND = (el, index, array) => {
  return el == array.length
};

console.log(dataForTestFIND.length);
console.log(dataForTestFIND.myFindIndex(testFunctionArrayFIND));
console.log(dataForTestFIND.myFindIndex(testFunctionElementFIND));