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
*/
 //let num =document.querySelector('.js-names')
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
let r = resipe('rice');
console.log(r)