function faultyCalc() {
  let randVal = Math.random();
  let a = prompt('Enter first number: ');
  let b = prompt('Enter second number: ');
  let c = prompt('Enter operation: ');

  
  res = '';

  let obj = {
    '+' : '-',
    '-' : '/',
    '/' : '**',
    '*' : '+'
  };

  if (randVal > 0.1) {
    alert('The result is',eval(a, b, c))
    // if (c === '+') {
    //   res = a + b;
    //   console.log(`${a} ${c} ${b} = ${res}`);
    // } else if (c === '-') {
    //   res = a - b;
    //   console.log(`${a} ${c} ${b} = ${res}`);
    // } else if (c === '*') {
    //   res = a * b;
    //   console.log(`${a} ${c} ${b} = ${res}`);
    // } else if (c === '/') {
    //   res = a / b;
    //   console.log(`${a} ${c} ${b} = ${res}`);
    // }
  } else {
    // console.log('consoling faulty operation...');
    let wrongVal = obj[c];
    alert('The faulty result is:', eval(a, b, wrongVal));
  //   if (wrongVal === '+') {
  //     res = a + b;
  //     console.log(`${a} ${c} ${b} = ${res}`);
  //   } else if (wrongVal === '-') {
  //     res = a - b;
  //     console.log(`${a} ${c} ${b} = ${res}`);
  //   } else if (wrongVal === '*') {
  //     res = a * b;
  //     console.log(`${a} ${c} ${b} = ${res}`);
  //   } else if (wrongVal === '/') {
  //     res = a / b;
  //     console.log(`${a} ${c} ${b} = ${res}`);
  //   }
  }
}

while (true) {
  faultyCalc();
}