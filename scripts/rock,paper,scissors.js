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
 console.log(nos) 