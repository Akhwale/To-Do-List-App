let submit = document.getElementById("submit");
let form = document.getElementById("form");
let taskNameInput = document.getElementById("task-name");
let dueDateInput = document.getElementById("due-date");
let description = document.getElementById("description");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Button Clicked");
    formValidation();
    
});


let formValidation = ()=>{
    if(taskNameInput.value === ""){
       msg.innerHTML = "You cannot Submit an Empty Field!";
    }
    else{
       msg.innerHTML = "";
       acceptData();
    }
};

let data = {};

let acceptData = ()=>{    
    data["text"] = taskNameInput.value;
    data["date"] = dueDateInput.value;
    data["description"] = description.value;

    console.log(data.text);

    createTask();
};

let createTask= ()=>{

    tasks.innerHTML += 
    `
    <div id="cardy">
                <h5>Task: ${data.text} </h5>
                    <p class="small text-secondary">Due Date: ${data.date} </p>
                    <p class="s">${data.description}</p>
                    <div class="mx-0 text-center options">
                        <span OnClick="editTask(this)" class="material-icons">edit</span>
                        <span OnClick="deleteTask(this)" class="material-icons">delete</span>
                    </div>
        </div>
    `;

    resetForm();
};

let resetForm = ()=>{
    taskNameInput.value = "";
    dueDateInput.value = "";
    description.value = "";
}

let deleteTask = (e)=>{
    e.parentElement.parentElement.remove();  
}
