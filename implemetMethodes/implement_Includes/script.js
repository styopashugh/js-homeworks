const arr = [12, 3, 4, 5, 6, 7, 8, 9, 11];
Array.prototype.copyIncludes = function (val) {
  for (let i = 0; i < this.length; i++) {
    console.log(this);
    if (this[i] === val) {
      return true;
    }
    return false
  }
};

//arr.copyIncludes(12)
console.log(arr.copyIncludes(12));
