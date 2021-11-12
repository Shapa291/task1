Array.prototype.mySome = function (callback) {  
    let booleanResult = false
    for (let i = 0; i < this.length; i++){
      if (callback(this[i])) booleanResult = true
      if (callback(i))
      if (callback(this)) booleanResult = true
    }
    return booleanResult;
}

const dataForTestSOME = [2, 5, 11, 1, 4]

const checkResultArraySOME = (item, index, array) => {
  return array.length > 1
}

const checkResultItemSOME = (item, index, array) => {
  return item > 2
}

console.log(dataForTestSOME.some(checkResultArraySOME))
console.log(dataForTestSOME.some(checkResultItemSOME))
