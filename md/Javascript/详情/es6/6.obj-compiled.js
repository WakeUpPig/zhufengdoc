let name = 'zfpx';
let age = 8;
let getName = function () {
    console.log(this.name);
};
let person = {
    name,
    age,
    getName
};
person.getName();

//# sourceMappingURL=6.obj-compiled.js.map