document.addEventListener("DOMContentLoaded", () => {
  // your code here
   
  let form = document.getElementById("create-task-form");

 
  form.addEventListener("submit", function (event) {

    event.preventDefault();

    
    let input = document.getElementById("new-task-description");


    let li = document.createElement("li");

    li.textContent = input.value;

   
    let taskList = document.getElementById("tasks");

    
    taskList.appendChild(li);

    input.value = "";
  });
});
