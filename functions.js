" use srtict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello wOrld');


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello');  
};

logger();

const calc = (a, b) => a + b;