Array.prototype.myForEach = function (callback) {
    for (let i = 0 ; i < this.length; i++){
        callback (this[i], i, this)
    }
 }
 
Array.prototype.myReduce = function (callback, initialValues) {
    
    let accamulator = ( initialValues === undefined ) ? this[0] : initialValues
    const start = ( initialValues === undefined ) ? 1 : 0

    for  (let i = start; i < this.length; i++) {
       accamulator = callback (accamulator, this[i], index, this) 
    }
    return accamulator;
}

 const arr = ["a", "b", "c"]

 arr.myReduce(() => {
     console.log();
 })
 
 arr.myForEach((item, index, array) => {
     console.log(item, ' ' ,index , ' ' )
 }) 

