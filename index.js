
let reset = document.getElementById("reset");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let display = document.getElementById("number");

let count = 0;

function current(){
    display.innerHTML = count;
    if(count < 0){
        display.innerHTML = "Error: Cannot go below 0";
    }
   
}

add.addEventListener('click',function(){
    count++;
    current();
});
reset.addEventListener('click',function(){
    count = 0;
    current();
})
subtract.addEventListener('click',function(){
    count--;
    current();
});