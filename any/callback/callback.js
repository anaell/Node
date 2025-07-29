// function print_name(name, callback) {
//     console.log(`Hello, ${name}! ${callback()}`);
// }

// function greet() {
//     return 'Welcome to the Node.js world!';
// }

// print_name('Chimeremma', greet);

(function print_name(name = 'Alice', callback = () => 'Welcome!') {
    console.log(`Hello, ${name}! ${callback()}`);
})()