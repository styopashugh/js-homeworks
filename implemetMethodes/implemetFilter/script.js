console.log('dddd');


const arr =[12,4,17,456,8,3,66]

Array.prototype.copyFilter =function(callBack){
    const newArr =[]
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        if(callBack(this[i],i,this)){
            newArr.push(this[i])
        }       
    }
    return newArr
    
    
}
arr.copyFilter()