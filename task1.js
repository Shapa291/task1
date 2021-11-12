Array.prototype.myFind = function (callback) {
  let findResult = undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      findResult = this[i];
      break;
    }
  }
  return findResult;
};

const dataForTestFIND = [1, 2, 3, 4, 5, 6, 7, 10, 1, 1];

function testFunctionArrayFIND(element, index, array) {
  return array.length == element;
}

function testFunctionElementFIND(element, index, array) {
  return element < 5;
}

console.log(dataForTestFIND.myFind(testFunctionArrayFIND));
console.log(dataForTestFIND.myFind(testFunctionElementFIND));
