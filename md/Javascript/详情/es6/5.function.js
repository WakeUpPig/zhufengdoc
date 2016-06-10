/*let desc  = function(name='zfpx',age=8){
    console.log(`${name} is ${age} years old!`);
}
desc('zfpx2');*/

/*let print = function(a,b,c){
    console.log(a,b,c);
}
print([1,2,3]);
print(...[1,2,3]);*/

/*let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);*/


/*
let destruct = function({name,age}){
    console.log(name,age);
}
destruct({name:'zfpx',age:6});

*/

/*var desc = function descname(){}
console.log(desc.name);*/

[1,2,3].forEach(val => console.log(val));

var person = {
    name:'zfpx',
    getName:function(){
-        setTimeout(function(){console.log(this);},1000);
+        setTimeout(() => console.log(this),1000);
    }
}
person.getName();