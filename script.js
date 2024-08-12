document.addEventListener('DOMContentLoaded', function() {
let container= document.querySelector
("#container");
let push= document.querySelector
("#push");
let newtasks= document.querySelector
("#newtasks");
let tasks= document.querySelector
("#tasks");
let input= document.querySelector
("#input");


/*check if there is some value in newtasks*/
push.onclick= function () {
  if(input.value != 0) {
  tasks.innerHTML+= `<div class="task"><span id="taskname">${input.value}</span><button id="deete"><i class="fa-solid fa-trash"></i></button></div>`;
  input.value = '';
  var current_task= document.querySelectorAll("#deete");
  for( var i=0 ;i <current_task.length ; i++){
      current_task[i].onclick = function () {
      this.parentNode.remove()
          
      }
  }
   
    
}
else{
    console.log("it dosnt work")
}
    
}
   
  
   
   
   
   
   
    });