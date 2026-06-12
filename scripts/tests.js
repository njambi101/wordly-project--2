/*function val(event){
    if(event.key === 'Enter'){
        names();
    }
    
}


let n =[]

function names(){
    let a = document.querySelector('.js-names');
    let b = a.value;
    console.log(n)
    n.push(b);
    document.querySelector('.js-display').innerHTML = n;
}

function a(){
    return 'how are you'
}
let d = a();
console.log(d)
document.querySelector('.js-display').innerHTML = a();

 //let num =document.querySelector('.js-names')

const { default: string } = require("figlet/fonts/babyface-lame");

    //let n = num.value;
function age(){
   let num = document.querySelector('.js-names');
    let n = num.value;
    if (n < 18){
        
        document.querySelector('.js-display').innerHTML ='sorry you are not allowed';
    }else{
        document.querySelector('.js-display').innerHTML = 'you are allowed to enter';
    }

//document.querySelector('.js-display').innerHTML = n;
}
function sayHello(y) {
    return y ;
}
function t(z){
    sayHello()
    return y + z;
}
let text = sayHello();

let a = 1000;
let c = 600;
function fullYear(firstYear, lastyear = 10){
    console.log('how are you');
    return firstYear - lastyear;
    
}
let p = fullYear(a,c) *1000;
console.log(p)

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}
let w = checkAge(166);
console.log(w)

function resipe(h){
    if (h === 'rice'){
        return 'add some water'
    }
        return 'just add some salt'
    
}
 resipe('rice');
// the example below is an arrow function.
 const ns =  (n, l) =>  n * l;

 let v = ns(2, 5);
 console.log(v)

 // assinging an array to a function.
 function number(x, ...y){
    console.log(x , y)
 }
 number(1,2,3,4,5,6,7,8,9)

 function foo(boo){
    boo();
 }
 foo(function boo (){
    console.log('go away')
 })
const uu = 3;
const yr = 7;
 const jay = (a,b) => {
    return 2*(a + b);
 }
 let hk = jay(uu, yr);
 console.log(hk)

 const my = (a, h=9) => {
    if (a > 100){
        return a + h;
    }
 }


 
 console.log(my(102,99))

 function i(){
    let name = 'grace';
    return name
 }

 console.log(i());
 console.log(name);
 */
 
 let no = 10;
 function numbers(food){
  food();
 }
numbers(function food(){
    console.log( "welcom all");
})

let x = 5;
let y = 3;
console.log(x | y);
console.log(y)


const number = 20;
const number2 = 40;
let nos =Math.floor( Math.random()* 9) ;

if(nos <= 10){
    console.log('good work you have found it.')
}
console.log(nos)

const max = 100;
const min = 10;

let random1 = Math.random() * (max - min) + min;
console.log(random1);


