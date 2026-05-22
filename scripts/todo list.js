let words =['good work', 'lets play'];  

 getaction();

 function getaction(){
     let todolist ='';

for(let i = 0; i < words.length; i++){   
    const a = words[i];
    //w += words;
    const html = `<p>${a}</p>`;
    todolist += html;
    console.log(todolist)
}
document.querySelector('.js-division').innerHTML = todolist;
 }

function display(){
    const b = document.querySelector('.js-text');
    let c = b.value;
     words.push(c)
     //console.log(words)
     getaction();
}