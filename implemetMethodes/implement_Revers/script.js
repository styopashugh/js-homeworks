console.log('dddd');

const arr =[1,2,3]



Array.prototype.copyRevers =function(){
    const temp =[]
    for (let i = this.length-1; i>=0 ; i--) {
        console.log(this[i]);
        temp.push(this[i])
        
    }
    return temp
}
arr.copyRevers()
console.log(arr.copyRevers()
);
