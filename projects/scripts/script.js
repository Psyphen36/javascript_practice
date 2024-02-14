console.log('Hello folks');

let b = 'Hi gecko';

let a = 'Hello geeks';
console.log(a + b);

if (true) {
    let a = 'Hello world';
    console.log(a);
}

let person = 17;
let grace = 2;
let num = 3;
let pname = 'anupam';

if ((person + grace) >= 18) {
    num++;
    console.log(num, 'You are eligible for a driving license', pname);
} else if ((person + grace * 2) >= 18) {
    console.log('You can easily make a driving license');
} else {
    console.log('You aren\'t eligible for a driving license!!');
}