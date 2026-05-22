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

for(let i = 0;  i < number.length; i++){
    let foo = number[i];
    nos += foo;
    nums.push(foo *2)
    }
 console.log(nums)  
 
 const text = "abc";
const repeated = text.repeat(3); // "abcabcabc"
console.log(repeated)


const repeatString = function(word,num) {
    if(num > 0){
        let repeates = word.repeat(num);
        console.log(repeates) 

    }else{
        console.log('error')
    }
};

 repeatString('njambi', 6)