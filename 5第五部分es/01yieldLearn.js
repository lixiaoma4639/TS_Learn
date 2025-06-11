function* simpleGenerator() {
    console.log('Execution started');
    yield 1;
    console.log('Execution resumed');
    yield 2;
    console.log('Execution resumed again');
    yield 3;
    console.log('Execution ended');
}

// 创建一个 generator
const gen = simpleGenerator();

console.log(gen.next());
// 输出: Execution started
// { value: 1, done: false }

console.log(gen.next());
// 输出: Execution resumed
// { value: 2, done: false }

console.log(gen.next());
// 输出: Execution resumed again
// { value: 3, done: false }

console.log(gen.next());
// 输出: Execution ended
// { value: undefined, done: true }

console.log("---------yield穿参数-----")
function* generatorWithInput() {
    const name = yield 'What is your name?';
    yield `Hello, ${name}!`;
}

// 创建一个 generator
const greeter = generatorWithInput();
console.log(greeter.next()); 
// 输出: { value: 'What is your name?', done: false }

console.log(greeter.next('Alice')); 
// 输出: { value: 'Hello, Alice!', done: false }

console.log(greeter.next()); 
// 输出: { value: undefined, done: true }


console.log('-----示例 3：生成无限的序列-----')
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
// 创建一个 generator
const seq = infiniteSequence();
console.log(seq.next()); // 输出: 0
console.log(seq.next()); // 输出: 1
console.log(seq.next()); // 输出: 2
// 继续调用下去会生成无限递增的数值
