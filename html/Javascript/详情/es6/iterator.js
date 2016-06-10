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