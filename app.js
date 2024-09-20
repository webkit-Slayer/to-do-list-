let inputBox = document.getElementById("task-box");
let listContainer = document.getElementById("unordered");
let add = document.getElementById("Add-task");
 inputBox.addEventListener('keyup' , (e) => {
     if (e.keyCode === 13) {
      data();
      inputBox.value = "";
       }     
 });
    add.addEventListener('click' , () => {
   if (inputBox.value === "") {
		alert('you must write something!');
	}
	else {
		data();
	}
	inputBox.value = "";
	saveData();
    });
    listContainer.addEventListener('click' , (e) => {
       if (e.target.tagName === "LI") {
       	e.target.classList.toggle('checked');
       		saveData();
       }
       else if(e.target.tagName === "SPAN"){
       	e.target.parentElement.remove()
       	saveData();
       }
    });
    function saveData(){
    	localStorage.setItem("Data" , listContainer.innerHTML);
    }
    function showData(){
    	listContainer.innerHTML = localStorage.getItem("Data");
    }
    function data(){
    	let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		li.classList.add('list-items');
		let span = document.createElement("span");
		li.appendChild(span);
    }
    showData();
	
