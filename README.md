In this we application I am using node.js
the step by step procedure of it is as following :

*Firstly,
let a variable named todolist and i ahve parsed this 
string of todolist with json so that i could be able
to convert the string to arry or objects.
In the second line of code i have declared that if 
list = null then array should be emepty.
then i have used a retrieveDataFromList(); function in which
i'm getin the value and active key pair set for the todo list.
then on line-9 i ahve created a addEventListener function in 
which i ahve declared a element var and coverted the html ements to
an array.then i have create a item variable which holds the itemlists 
and in "if-condition" it checks wheather the current event is active 
or not by putting line through to that item and updates the local storeage


Perticularly in localStorage fuction at line 59 :
function updateStorage(data){
  localStorage.setItem('todoList',JSON.stringify(data));
}


i'm setting the storage of the todolist items  to store locally in the pc.
and at line 51 :
function removeFromStorage(element) i'm using splice function to get rid of a 
perticular item and again update it.

At line 30 :
function createElement(value,active)
i'm creating a function in which in which there is ollist and lilist
whenever a new item is created it is in active mode so olist will get 
append with li as per my code.

then i have created a deleteTaskbtn and appened that into its parentwhich
is li.A line 
event.target.parentNode.parentNode.removeChild(event.target.parentNode)
in this code i need to delete a task so i used event.target for the current
task then .parentnode for ollist again .parentNodefot li .remove(event.target.parentNode)
to remove that task from the parentNode.

Last but not the least
At line 64 :
i ahve created function add() 
which implies that if value to text box is empty and we click submit
it shows the alert msg or oterwise it bypasses and reach the code
where we are pushing the new tasks into todolist.# Todo-App
# Todo-App
# Todo-App
# Todo-App
