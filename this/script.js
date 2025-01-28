// const user ={
//     f:'jhon',
//     l:'smit',
//     allowMassige:function(){
//         const _this =this
//         setTimeout(()=>{
//             console.log(_this.f);

//         },3000)
//     }
// }
// user.allowMassige()
/////////////////////////////
////////////////////////////////////
/////////////////////////////////
// 1 step -------------
// const obj = {
//     firstName: 'John', //property
//     lastName: 'Smith',
//     getFullName: function() {
//         console.log(`Hello Dear ${this.firstName} ${this.lastName}`);
//     }
// }

// obj.getFullName();

// -----------------

// 2 step -------------

// function getUserLocation() {
//     return this.location;
// }

// const x = {
//     location: '47387748373'
// }

// const y = {
//     location: '17832547548'
// }

// x.getLocation = getUserLocation;
// y.getLocation = getUserLocation;

// console.log(x.getLocation(), 'x location');
// console.log(y.getLocation(), 'y location'); // .- ի
// -----------------

// 3 step -------------
// const obj = {
//     x: 10,
//     y: 20,
//     foo() {
//         console.log(this.x);
//     }
// }

// const boo = obj.foo;
// obj.foo(); //this
// boo(); //

// -----------------

// 4 step -------------

// window.firstName = 'Dav';
// window.lastName = 'Sargsyan';
// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         const _this = this;
//         setTimeout(function() {
//             console.log(this);
//             alert(`Welcome ${_this.firstName} ${_this.lastName}`)
//         }, 1000);
//     }
// }

// user.allowMessage();

// -----------------

// 5 step -------------

// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         setTimeout(() => {
//             alert(`Welcome ${this.firstName} ${this.lastName}`)
//         }, 1000);
//     }
// }

// user.allowMessage();

// -----------------

// 6 step -------------
// const obj1 = {
//     x: 10,
// }

// const obj2 = {
//     y: 20,
//     __proto__: obj1
// }

// const obj3 = {
//     z: 30,
//     __proto__: obj2
// }

// obj3.x = 1000;
// console.log(obj3.x);

// -----------------

//  7 step -------------

// const arr = new Array();

// const arr1 = []; //__proto__ = Array.prototype;
// const arr2 = []; //__proto__ = Array.prototype;
// const arr3 = []; //__proto__ = Array.prototype;

// -----------------

//  8 step -------------

// function Animal(weight, color, type) {
//     this.weight = weight;
//     this.color = color;
//     this.type = type;
// }

// Animal.prototype.run = function(speed) {
//     return `The ${this.type} runs at ${speed} speed`
// }
// console.log(typeof Animal)

// function customNew(Constructor,weight, color, type) {
//     const emptyObject =Object.create(Constructor.prototype)
//     Constructor.call(emptyObject,weight, color, type)
//     return emptyObject
// }
// const dog =customNew(Animal,'50kg', 'black', 'dog')
// console.log(dog);
// console.log(dog.run());



// const dog = new Animal('50kg', 'black', 'dog'); //{weight: '50kg', color: 'black', type: 'dog'}
// const cat = new Animal('10kg', 'gray', 'cat'); //{weight: '10kg', color: 'gray', type: 'cat'}

// console.log(dog.run(20));
// console.log(cat.run(10));
////////////////////////////////
///////////////////
////////////////////////////////////////////////////////////////////////////

// const obj ={ x:10}

// const obj2  =Object.create(obj)

// console.log(obj);

// const warehous = {
//   getObjVal: function () {
//     const result = [];
//     for (i in this) {
//       if (i === "getObjVal") continue;
//       result.push(this[i]);
//     }
//     return result;
//   }
// };

// const myCustomObj1 = {
//   x: 10,
//   y: 20,
// };

// const myCustomObj2 = {
//     x: 30,
//     y: 70,
//   };

// myCustomObj1.__proto__ =warehous
// myCustomObj2.__proto__ =warehous


// console.log(myCustomObj1.getObjVal());
// console.log(myCustomObj2.getObjVal());


///////////////
/////////////////////
///////////////
// function foo(x){
//     this.x =x
// }

// const obj1 ={}
// foo.call(obj1,10)

// const obj2={}
// foo.call(obj2,20)

// console.log(obj1);
// console.log(obj2);

/////////////////
//////////////////////
//forEach/////////////////------------------------------

// const arr =[10,20,30,40]
// Array.prototype.customForEach =function(callBack){
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i],i ,this);

        
        
//     }
    
// }
// arr.customForEach((item,i,arr) =>{
//     console.log(item,i,arr);
    
// })
///////////////////===================--------------------------------------
/////////////////////////////////////////

function Card(type,number,cvv,date){
        this.type =type;
        this.number =number;
        this.cvv =cvv;
        this.date =date;
        this.isActive =false;
    
}

Card.prototype.active =function(){
    if(this.isActive){
        alert('your card is already active')
    }else{
        this.isActive = true;
        alert('your card is active');
        return this;
    }
    
    return this
}
Card.prototype.block =function(){
    this.isActive =false
    alert('your card block')
    return this
    
}

const platinum =new Card('platinum','2323 2335 3632 3456','435','.07/26')
console.log(platinum);


