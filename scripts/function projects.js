/*let count = 0;
const cardCounter = (card) =>{

    if(card >= 2 && card <= 10){
        let number = Number(card);
        
    } else if(card < 2 && card > 10){
        let string = String(card);
       
    } else if (typeof card === "string"){
        count += 2;
    }
   return count;
}
let num = cardCounter("4");
console.log(num)
*/

/*let score = String(8);
console.log(typeof score)
*/

let count = 0;
function cardCounter(card){
    if (card >= 2 && card <= 6){
        count += 1
        console.log(count)
    }else if (card >= 7 && card <= 9){
        count = 0;
        console.log(count);
    }

}
cardCounter(8)