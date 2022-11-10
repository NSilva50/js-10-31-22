// var / Do Not Use
var a = 221;
var a = 1;

// let / Use This
let b = 221;
// let b = 1; // error
b = 1;

// const / Use This
const c = 221;
// const c = 1; // error
// const c = 1; // error
// c = 1; // error

let boolean = true | false;
let cost = 1.2 | 1.2e5 | 1.2e-5;
let name = "John" | 'John' | `John`; // super power

// Organize your code
// array
// object

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, ''];
const pet = {
    name: "Milo",
}

function myFunction(text) {
    // let a = 3;
    // let b = 2;
    // let answer = a * b;
    // console.log(answer);
    const li = document.createElement('li');
    li.innerText = text;
    document.querySelector('body').appendChild(li);
    li.style.backgroundColor = 'red';
    li.style.border = '1px solid black';
    li.style.padding = '10px';
    li.style.color = 'white';
    li.style.fontWeight = 'bold';
    li.style.fontSize = '20px';
}

let x = 200;
let y = 100;
myFunction('hello');
myFunction('world'  + '!');
myFunction(1 + 2);
myFunction( x > y);
myFunction( x < y);
myFunction( x == y);
myFunction( 'hello' !== 'hello');



// operators
// + - * / % **
// > < >= <= == === != !==
// && || !

