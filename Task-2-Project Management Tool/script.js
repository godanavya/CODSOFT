let projects=JSON.parse(localStorage.getItem("projects"))||[];
alert("JS Working");
const projectInput = document.getElementById("projectName");
const dateInput = document.getElementById("projectDate");
const addBtn = document.getElementById("addProjectBtn");
const projectList = document.getElementById("projectList");

addBtn.addEventListener("click", () => {

    const name = projectInput.value;
    const date = dateInput.value;

    if (name === "") {
        alert("Enter Project Name");
        return;
    }

    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${name}</h3>
        <p>Deadline: ${date}</p>
        <p>Status: pending</p>
        <button class="completeBtn">Complete</button>
        <button class="deleteBtn">Delete</button>
    `;
    const completeBtn=div.querySelector(".completeBtn");
    completeBtn.addEventListener("click",()=>
    {
        div.querySelector("p:nth-of-type(2)").textContent="Status: Completed";
    });

    projectList.appendChild(div);
    const deleteBtn=div.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click",()=>{
        div.remove();
    });

    projectInput.value = "";
    dateInput.value = "";
});
const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
addTaskBtn.addEventListener("click",()=>
{
    const task=taskInput.value;
    if(task===""){
        alert("Enter Task");
        return;
    }
    const li = document.createElement("li");
li.innerHTML = '<input type="checkbox"> ' + task;

const checkbox = li.querySelector("input");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        li.style.color = "green";
        li.style.textDecoration = "line-through";
    } else {
        li.style.color = "black";
        li.style.textDecoration = "none";
    }
});

taskList.appendChild(li);

taskInput.value = "";
});