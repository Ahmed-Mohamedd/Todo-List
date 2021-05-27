//selectors 
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const modal = document.getElementById('modal');
const show = document.getElementById('show');
const closee = document.getElementById('closee');
const notask = document.getElementById('notask');
const tasks = document.getElementById('tasks');


// eventlisteners 
todobutton.addEventListener('click' , addtodo)
todolist.addEventListener('click',deletecheck)


// functions 

let shownotask = () => {
    if(tasks.childElementCount == 0){
     notask.classList.remove('none');
    }
 }
 let task = todoinput.value;
 

 function addtodo(event){
   // prevent forn from submitting
    event.preventDefault();
    // todo div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    // li item
    const todoitem = document.createElement("li");
    todoitem.innerText = todoinput.value;
    
    todoitem.classList.add('todo-item');
    tododiv.appendChild(todoitem);
    // completed button
    const completebtn = document.createElement('button');
    completebtn.innerHTML = '<i class=" fas fa-check "> </i>' ; 
    completebtn.classList.add('complete-btn');
    tododiv.appendChild(completebtn);
    // trash button
    const trashbtn = document.createElement('button');
    trashbtn.innerHTML = '<i class=" fas fa-trash "> </i>' ; 
    trashbtn.classList.add('trash-btn');
    tododiv.appendChild(trashbtn);
    // append to todolist
    todolist.appendChild(tododiv);
    // clear todoinput value 
    todoinput.value = "";
    showmodal();
    notask.classList.add('none')
 
 }
    


 function deletecheck(e){
    const item = e.target ;
    // delete todo
    if(item.classList[0] === "trash-btn"){
      const todo = item.parentElement;
      // Animation
      todo.classList.add('fall');
      todo.addEventListener('transitionend' , function(){
          todo.remove();
          shownotask();
      })
      
      
    }
   
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed')

    }

 }



 let showmodal = () => {
     modal.classList.toggle('display');
 }
 
 show.addEventListener('click' , showmodal );
 closee.addEventListener('click' , showmodal );
