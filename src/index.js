document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.querySelector('#create-task-form')

  // submit new task
  newTask.addEventListener('submit', function(e){
    e.preventDefault();
    //creating the new task
    const taskInput = document.querySelector('#new-task-description')

    const listPost = document.createElement('li')

    const tasks = document.querySelector('#tasks')

    const priority = document.querySelector('#priority')




    listPost.innerHTML = `<li style=\'color: ${priority.value};\'>${taskInput.value}</li>`

    // console.log(typeof(taskText))
    // debugger;
    listPost.innerText.fontcolor(priority.value);



    switch(priority.value) {
    case "green":
    listPost.class = 3
     break;

    case "yellow":
    listPost.class = 2

     break;

    case "red":

    listPost.class = 1
    // code block
     break;
    code block
}

tasks.appendChild(listPost);





    // creating the delete button






    const deleteButton = document.createElement('button')

    deleteButton.innerText = 'Delete Task'
    listPost.appendChild(deleteButton)
    //Delete tasks

    deleteButton.addEventListener('click', function(e){

      listPost.remove();
    })



  })

const orderList = document.querySelectorAll("#tasks, li")



orderList.sort


});
