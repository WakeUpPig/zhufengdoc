if(true){
    var name = 'zfpx';
}
//使用var声明的变量属于全局，所以可以在外部直接访问
console.log(name);


if(true){
    let name = 'zfpx';
}
// ReferenceError: name is not defined
//因为通过let声明的变量只能在大插号内访问，大括号外不能访问
console.log(name);

