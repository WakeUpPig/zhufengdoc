/*
let name = 'zfpx';
let age = 8;
let getName = function(){
    console.log(this.name);
}
let person = {
    name,
    age,
    getName
}
person.getName();

console.log(Object.is(NaN,NaN));

var nameObj = {name:'zfpx'};
var ageObj = {age:8};
var obj = {};
Object.assign(obj,nameObj,ageObj);
console.log(obj);


var obj1  = {name:'zfpx1'};
var obj2 =  {name:'zfpx2'};
var obj = {};
Object.setPrototypeOf(obj,obj1);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj,obj2);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));

var obj3 = {
    __proto__:obj1
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));
*/



let person ={
    eat(){
        return 'milk';
    }
}

let student = {
    __proto__:person,
    eat(){
        return super.eat()+' bread'
    }
}
console.log(student.eat());

