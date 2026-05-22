/*let i = 1;
while (i <= 10) {
    
    console.log(i)
    i ++
}


for( let i = 1; i <= 15; i++){
    console.log(i)
}
*/
const number = [
    1,2,3,4,5,6
]

let nos = 0;

let nums =[];

/*for(let i = 0;  i < number.length; i++){
    let foo = number[i];
    nos += foo;
    nums.push(foo *2)
    }
 console.log(nums)  
 */
const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
    console.log(string)
  }
  return string;
};
repeatString('john', 7)

const a = 4;
let b = 'food';
let s =''; 
for (let i = 0; i < 7; i++){
   // let c = a[i];
    s += a;
    console.log(s)

}



/*const repeatString = function(word,num) {
   for(let i = 0; i < num; i++){
    
    
   }
   console.log(words)
};

 repeatString('njambi', 6)
    

const name = 'fuufuu';
const numm = 4;
 for(let i = 0; i < 7; i++){
    // let names = name[i] 
    //console.log(names)
 }*/ 