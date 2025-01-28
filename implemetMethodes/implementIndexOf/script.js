const arr = [1, 2, 3, 4, 5, 67, 7, 9];
Array.prototype.copyIndexOf = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1
};

// arr.copyIndexOf((item,i,arr)=>{
//     console.log(item,i,arr);

// })
arr.copyIndexOf();
