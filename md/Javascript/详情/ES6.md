## ECMAScript6
ECMAScript 简称就是 ES ，你可以把它看成是一套标准， JavaScript 就是实施了这套标准的一门语言。 现在主流浏览器使用的是 ECMASciprt 5 。

## 1. 级块作用域变量-let
作用域就是一个变量的为作用范围。也就是你声明一个变量以后，这个变量可以在什么场合下使用    
以前的*JavaScript*只有全局作用域，还有一个函数作用域    
现在*JavaScript*也有了块级作用域,用一组大括号定义一个块,使用 let 定义的变量在大括号的外面是访问不到的   
```javascript
if(true){
    let name = 'zfpx';
}
console.log(name);// ReferenceError: name is not defined
```

## 2. 常量-const
使用`const`我们可以去声明一个常量，常量一旦赋值就不能再修改了
```javascript
const fruit = 'zfpx';
fruit = 'zfpx2';//Assignment to constant variable
```

> 注意`const`限制的是不能给变量重新赋值，而变量的值本身是可以改变的,下面的操作是可以的

```javascript
const names = ['zfpx1'];
names.push('zfpx2');
console.log(names);
```

## 3. 解构
### 3.1 解析数组
解构意思就是分解一个东西的结构,可以用解构把数组中的值依次赋值给一组变量

```javascript
var [name,age] = ['zfpx',8];
console.log(name,age);
```

> 这样数组里的第一个项目就会交给前面`name`这个变量，第二个项目的值会分配给`age`这个变量

### 3.2 解构对象
对象也可以被解构
```javascript
var {name,age} = {name:'zfpx',age:8};
console.log(name,age);
```
> 对象里的name属性的值会交给name这个变量，age的值会交给age这个变量

## 4. 模板字符串
### 4.1 模板字符串
模板字符串用反引号(数字1左边的那个键)包含，其中的变量用`${}`括起来
```javascript
var name = 'zfpx',age = 8;
let desc = `${name} is ${age} old!`;
console.log(desc);
```
> 其中的变量会用变量的值替换掉

### 4.2 带标签的模板字符串
可以在模板字符串的前面添加一个标签，这个标签可以去处理模板字符串  
标签其实就是一个函数,函数可以接收两个参数,一个是`strings`,就是模板字符串里的每个部分的字符  
还有一个参数可以使用`rest`的形式`values`,这个参数里面是模板字符串里的值
```javascript
var name = 'zfpx',age = 8;
function desc(strings,...values){
    console.log(strings,values);
}
desc`${name} is ${age} old!`;

```

### 4.3 字符串新方法
```javascript
let desc = 'zfpx is 8 years old';
console.log(desc.endsWith('old')); //字符串是否以`old`结尾
console.log(desc.startsWith('zfpx'));// 字符串是否以`zfpx`开头
console.log(desc.includes('is'));//字符串是否包含`is`
```

## 5. 函数
### 5.1 默认参数
可以给定义的函数接收的参数设置默认的值  
在执行这个函数的时候，如果不指定函数的参数的值，就会使用参数的这些默认的值
```javascript
let desc  = function(name='zfpx',age=8){
    console.log(`${name} is ${age} years old!`);
}
desc('zfpx2');
```

### 5.1 展开操作符
把...放在数组前面可以把一个数组进行展开,可以把一个数组直接传入一个函数而不需要使用`apply`
```javascript
let print = function(a,b,c){
    console.log(a,b,c);
}
print([1,2,3]);
print(...[1,2,3]);
```
### 5.1 剩余操作符
剩余操作符可以把其余的参数的值都放到一个叫`b`的数组里面
```javascript
let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);
```
### 5.1 解构参数
```javascript
let destruct = function({name,age}){
    console.log(name,age);
}
destruct({name:'zfpx',age:6});
            
```

### 5.1 函数的名字
ECMAScript 6 给函数添加了一个`name`属性
```javascript
var desc = function descname(){}
console.log(desc.name);
```
### 5.1 箭头函数
箭头函数简化了函数的的定义方式，一般以 "=>" 操作符左边为输入的参数，而右边则是进行的操作以及返回的值`inputs=>output`
```javascript
[1,2,3].forEach(val => console.log(val)););
```
> 输入参数如果多于一个要用()包起来，函数体如果有多条语句需要用{}包起来

箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
正是因为它没有this，从而避免了this指向的问题。
```diff
var person = {
    name:'zfpx',
    getName:function(){
-        setTimeout(function(){console.log(this);},1000); //在浏览器执行的话this指向window
+        setTimeout(() => console.log(this),1000);//在浏览器执行的话this指向person
    }
}
person.getName();
```

## 6. 对象
### 6.1 对象字面量
如果你想在对象里添加跟变量名一样的属性，并且属性的值就是变量表示的值就可以直接在对象里加上这些属性
```javascript
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
```

### 6.2 Object.is
对比两个值是否相等
```javascript
console.log(Object.is(NaN,NaN));

```
### 6.3 Object.assign
把多个对象的属性复制到一个对象中,第一个参数是复制的对象,从第二个参数开始往后,都是复制的源对象
```javascript
var nameObj = {name:'zfpx'};
var ageObj = {age:8};
var obj = {};
Object.assign(obj,nameObj,ageObj);
console.log(obj);
```

### 6.5 Object.setPrototypeOf
将一个指定的对象的原型设置为另一个对象或者null
```javascript
var obj1  = {name:'zfpx1'};
var obj2 =  {name:'zfpx2'};
var obj = {};
Object.setPrototypeOf(obj,obj1);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj,obj2);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
```

### 6.6 __proto__
直接在对象表达式中设置prototype
```javascript
var obj1  = {name:'zfpx1'};
var obj3 = {
    __proto__:obj1
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));
```


### 6.7 super
通过super可以调用prototype上的属性或方法
```javascript
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
```

## 7.生成器与迭代器
### 7.1 Iterators
迭代器有一个next方法，每次执行的时候会返回一个对象
对象里面有两个属性，一个是`value`表示返回的值，还有就是布尔值`done`,表示是否迭代完成
```javascript
function buy(books) {
    let i = 0;
    return {
        next(){
            let done = i == books.length;
            let value = !done ? books[i++] : undefined;
            return {
                value: value,
                done: done
            }
        }
    }
}

let interator = buy(['js', 'html']);
var curr;
do {
    curr = interator.next();
    console.log(curr);
} while (!curr.done);
```


