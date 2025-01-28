//forEach/////////////////------------------------------

const arr =[10,20,30,40]
Array.prototype.customForEach =function(callBack){
    for (let i = 0; i < this.length; i++) {
        callBack(this[i],i ,this);

        
        
    }
    
}
arr.customForEach((item,i,arr) =>{
    console.log(item,i,arr);
    
})
////////////////////////////////////////
////////////////////////////////////
///////////////////////////////
// const arr =[1,2,3,4,5,6,7]

// Array.prototype.copyForEach =function(callBack){
//     for (let i = 0; i<this.length; i++) {
//         console.log(this[i],i,this);
        
        
//     }
// }

// arr.copyForEach((item,i,arr)=>{
//     console.log(item,i,arr);
    
// })
