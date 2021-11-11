Array.prototype.myForEach = function (callback) {
    for (let i = 0 ; i < this.length; i++){
        callback (this[i], i, this)
    }
 }
 
 const arr = ["a", "b", "c"]
 
 arr.myForEach((item, index, array) => {
     console.log(item, ' ' ,index , ' ' )
 })