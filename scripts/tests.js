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
 /*
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

*/
const fortune1 ="Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";
let selectedFortune = '';
let randomNumber = Math.floor( Math.random() * 6) + 1;

if (randomNumber === 1){
    selectedFortune = fortune1;
} else if (randomNumber === 2){
    selectedFortune = fortune2;
} else if(randomNumber === 3){
    selectedFortune = fortune3;
} else if(randomNumber === 4){
    selectedFortune = fortune4;
} else if(randomNumber === 5){
    selectedFortune = fortune5;
}
console.log(selectedFortune)
//console.log(randomNumber);
/*
let name = 2;
switch(name){
    case 1:
        console.log("welcome! day 1")
        break;
    case 2:
        console.log("welcom back day 2")
        break;
    case 3:
        console.log('okay bye')
        break;  
    default:
        console.log("that is not a legit input")              
}
  */ 
 /*     
let name = {fname: "john",
    sname: "dhoe"
}
function boowhoo(a){
    if (a === true){
        console.log(true)
    } else if(a === false){
        console.log(true)
    } else if(Array.isArray(a)){
        console.log(false)
    } else if(a === [].slice){
        console.log('right')
    } else if(typeof(a)){
        console.log('we have found it')
    }
}

boowhoo(name)
*/
/*
//slice method
const y = 'johndoe@gmail.com';
let s = y.slice( 8, 17 )
console.log(s)

//repeat method
 
let a = y.repeat(3)
console.log(a)

//indexof method 
let f = y.indexOf("@");
console.log(f);

// replace method 
let m = " why is your bag so big";
let g = m.replace("bag", " dog")
let t = m.replace(/bag/gi, "birds")
console.log(g)
console.log(t)
 
*/

const email = "johndoe@gmail.com";
const domainIndex = email.indexOf('@');
console.log(domainIndex);
const username = email.slice(0, domainIndex);
console.log(username);
const masked = username[0] + "*".repeat(username.longth - 1) + email.slice(domainIndex);
console.log(masked);

/*let email ='';
function maskEmail(name){
    
}
*/


const y = 'johndoe@gmail.com';

let p = y.replace("ohndoe", "******");

let em = y.split('@')
console.log(em)

function maskEmail(email) {
  // Validate input existence and ensure it contains an @ symbol
  if (!email || !email.includes('@')) {
    return 'Invalid email';
  }

  // Split the email into username and domain parts
  const [username, domain] = email.split('@');
  
  // If username is extremely short (1-2 characters), mask it dynamically
  if (username.length <= 2) {
    return '*'.repeat(username.length) + '@' + domain;
  }

  // Keep first and last char, replace the rest with asterisks matching original length
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedLength = username.length - 2;
  const asterisks = '*'.repeat(maskedLength);

  return `${firstChar}${asterisks}${lastChar}@${domain}`;
}

console.log(maskEmail(y))

