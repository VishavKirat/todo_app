let todoList = JSON.parse(localStorage.getItem('todoList')); //string is of no use --object di form ch array di form .
if(todoList==null){
  todoList = [];
}
retrieveDataFromList();
const olList = document.getElementById("todoList");
const textbox = document.getElementById("newItem");

olList.addEventListener('click',function(event){
  let elements  = Array.prototype.slice.call(olList.children); // Change HTML elements Object to array 
  let index = elements.indexOf(event.target);
  if(index>=0){
    event.target.classList.toggle('active');
      todoList[index].active= todoList[index].active=='active' ? '' : 'active';
      updateStorage(todoList);
  }
});

//Functions
function retrieveDataFromList(){
  const olList = document.getElementById("todoList");
  for(let i=0;i<todoList.length;i++){
    let value = todoList[i].value;
    let active = todoList[i].active;
    createElement(value,active); //active haiggi ke nai
  }
}

//This will create HTML Element
function createElement(value,active){
  const olList = document.getElementById("todoList");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(value)); //no over ride
  if(typeof(active)!=='undefined'){
    li.className = active;
  }
  olList.appendChild(li); 

  let deleteTaskBtn = document.createElement('button');
  deleteTaskBtn.appendChild(document.createTextNode("Delete"));
  deleteTaskBtn.className="right";

  li.appendChild(deleteTaskBtn);
  deleteTaskBtn.addEventListener('click',function(event){
    removeFromStorage(event.target.parentNode);
    event.target.parentNode.parentNode.removeChild(event.target.parentNode) 
  });  
}

//Remove from LocalStorage
function removeFromStorage(element) {
  var elements  = Array.prototype.slice.call(olList.children); // Change HTML elements Object to array
  var index = elements.indexOf(element);
  todoList.splice(index,1);
  updateStorage(todoList);
}

//This will update LocalStorage
function updateStorage(data){
  localStorage.setItem('todoList',JSON.stringify(data));
}

//Add New Element
function add(){
  let value = textbox.value; 
  if (value === '') {
    alert("You must write something!");
  }
  else{
    createElement(value);
    textbox.value=''; //Set textbox to empty
    todoList.push({value:value,active:''}); //Add New Object to todoList
     updateStorage(todoList);
  }
}


