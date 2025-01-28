const arr =[1,2,3,4,5,6,7,8,10]
Array.prototype.copyFindMethod =function(callBack){
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        return this[i]
        
    }
    
}

arr.copyFindMethod()
