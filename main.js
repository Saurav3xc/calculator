let displays=document.getElementById('display');

let numbers=document.querySelectorAll('.number');
let operators=document.querySelectorAll('.operator');
let equalsbtn=document.querySelector('.equal');
let clears=document.querySelector('.clear');


const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function(){
  display.value=display.value.slice(0, -1);
}

);
numbers.forEach(number=>{
  
  number.addEventListener('click',function(){
    display.value+= number.value;
  })
})

operators.forEach(operator => {

  operator.addEventListener('click', function() {
    display.value += operator.value;
  });
})

equalsbtn.addEventListener('click',
()=>{
  display.value =eval(display.value);
})

clears.addEventListener('click',function(){
  display.value=""
})