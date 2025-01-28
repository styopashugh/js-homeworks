
const arr =[1,2,3,4,5,6,7,8,9]

Array.prototype.copyMap =function(callBack){
    const newArr =[]
    for (let i = 0; i < this.length; i++) {
        newArr.push(callBack(this[i],i,this))
        
    }
    return newArr
    
}

arr.copyMap((val,i) => `<li>${i+1}  - ${val}</li>`)
console.log(arr.copyMap((val,i) => `<li>${i+1}  - ${val}</li>`));
document.getElementById('list').innerHTML = arr.copyMap((val,i) => `<li>${i+1}  - ${val}</li>`).join("")

console.log(arr.copyMap());
