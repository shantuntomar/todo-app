let addBtn = document.querySelector('#add-btn');
displayTask();

addBtn.addEventListener('click' , (e) => {
    //extracting the value from the input field.
    let task = document.querySelector('.input-container input').value; // jogging
    //if the length of inpul field is 0 then alert is shown. 
    if(task.length == 0) alert('Please Enter The task'); // false 
    else {
        //getting the data that is present in localStorage with the respective key("task_Key").
        //it return the data in the form of string.
        let getData = localStorage.getItem("task_Key"); 
        if(getData == null) {
            // create the taskArray that store the value of respective key. 
            taskArray = [];
        }
        else {
            //it return the string and assign in the array by respective indexing.
            taskArray = JSON.parse(getData);
        }
        //pushing the task into the taskArray.
        taskArray.push(task);
        //assigning the task in the local storage by KEY("task_Key") and VALUE in the form of string.
        localStorage.setItem("task_Key" , JSON.stringify(taskArray));
        // clear the input field value.
        document.querySelector('.input-container input').value = "";
        //function to display the task.
        displayTask();
    }
});

function displayTask() {
    //getting value from localstorage.
    let info = localStorage.getItem("task_Key");
    if(info == null) {
        taskArray = [];
    }
    else {
        //it return the string and assign in the array by respective indexing.
        taskArray = JSON.parse(info);
    }
    let container = "";
    //traverse each string from taskArray.
    taskArray.forEach(function(ele , index) {
        //adding the html to the container 
        container +=
        `<div class="task">
            <span class="task-name">${ele}</span>
            <button onclick="deleteTask(this.id)" id="${index}" class="delete">
                <i class="fa-thin fa fa-trash"></i>
            </button>
        </div>
        `;
    });
    //select the main div where we have to show the task div.
    let mainDiv = document.querySelector('.tasks');
    mainDiv.innerHTML = container;
}

//function to delete the task by passing the index value. 
function deleteTask(index) {
    let myData = localStorage.getItem("task_Key");
    //getting the data.
    if(myData == null) taskArray = []; // empty array.
    //it return the string and assign in the array by respective indexing. 
    else taskArray = JSON.parse(myData);

    taskArray.splice(index , 1);
    localStorage.setItem("task_Key" , JSON.stringify(taskArray));

    displayTask();
}

//enter key functionality :
let inp = document.getElementById('text-task');
inp.addEventListener('keypress' , (event) => {
    if(event.key == 'Enter')  {
        let task = document.querySelector('.input-container input').value;
        if(task.length == 0) alert('Please Enter The task');
        else {
            //getting the data that is present in localStorage with the respective key("task_Key").
            //it return the data in the form of string.
            let getData = localStorage.getItem("task_Key"); 
            if(getData == null) {
                // create the taskArray that store the value of respective key. 
                taskArray = [];
            }
            else {
                //it return the string and assign in the array by respective indexing.
                taskArray = JSON.parse(getData);
            }
            //pushing the task into the taskArray.
            taskArray.push(task);
            //assigning the task in the local storage by KEY("task_Key") and VALUE in the form of string.
            localStorage.setItem("task_Key" , JSON.stringify(taskArray));
            // clear the input field value.
            document.querySelector('.input-container input').value = "";
            //function to display the task.
            displayTask();
        } 
    }
});