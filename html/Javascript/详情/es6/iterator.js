/*
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
*/


//创建生成器
function* buy(books){
    for(var i=0;i<books.length;i++){
        yield books[i];
    }
}
let buying = buy(['js','html']);
var curr;
do {
    curr = buying.next();
    console.log(curr);
} while (!curr.done);