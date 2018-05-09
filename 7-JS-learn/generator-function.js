// ES6
function* generator() {
    let i = 0;
    // while (true) {
    //     i++;
    //     yield i;
    // }
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let it = generator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
