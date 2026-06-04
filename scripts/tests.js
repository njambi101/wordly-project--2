function val(event){
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

