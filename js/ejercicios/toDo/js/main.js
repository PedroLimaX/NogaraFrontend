let taskList = [];
let taskId = 0;


//create Task
function getTask(){

  let taskTitle = document.getElementById('taskTitle').value;
  if (taskTitle == ''){
    taskTitle = 'Unknown';
  }

  let taskDescription = document.getElementById('taskDescription').value;
  if (taskDescription == ''){
    taskDescription = 'No Description';
  }

  let taskStatus = 'Pendiente'

  const taskDate = new Date();
  taskDate.getDate();

  let taskObj = new Task(taskId, taskTitle, taskDescription, taskStatus, taskDate);
  taskId++;

  //console.log(taskObj);
  taskList.push(taskObj);

}


//create Obj
function Task(taskId,taskTitle, taskDescription, taskStatus, taskDate){

  this.id=taskId;
  this.title = taskTitle;
  this.description = taskDescription;
  this.status = taskStatus;
  this.date = taskDate;

  generateTask(this);
}

//create DOM task
function generateTask(Task){
  let container = document.getElementsByTagName('main')[0];
  let element = document.createElement('div');
  element.innerHTML= `
    <div class="taskInfo">
    <div class='status-indicator'></div>
      <p class='title-txt'><span>Titulo: </span>${Task.title}</p>
      <p class='description-txt'><span>Descripcion: </span>${Task.description}</p>
      <p class='status-txt'>${Task.status}</p>
      <p class='date-txt'><span>Ultima Actualizacion: </span>${Task.date}</p>
      <div class='task-btns'>
        <div class='edit-btn btn' onclick='editTask(${Task.id})'><i class='bx bxs-edit-alt'></i></div>
        <div class='delete-btn btn' onclick='deleteTask(${Task.id})'><i class='bx bx-trash'></i></div>
      </div>
    </div>
  `;

  container.appendChild(element);
}



//Create input to edit
function editTask(id){
  
  editableTask = taskList[id];
  // console.log(taskList[id]);

  let container = document.getElementsByClassName('taskInfo')[id];
  while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }

  let element = document.createElement('div');
  element.innerHTML= `
      <div class='status-indicator'></div>estado
      <p class='title-txt'><span>Titulo: </span><input type='text' value='${editableTask.title}' id='titleEdit' name='titleEdit'></p>
      <p class='description-txt'><span>Descripcion: </span><input type='text' value='${editableTask.description}' id='descriptionEdit' name='descriptionEdit'></p>
      <p class='status-txt'><span>Estado: </span><input type='text' value='${editableTask.status}' id='statusEdit' name='statusEdit' disabled></p>
      <div class='status-btns'>
        <div class='toDo-btn btn' onclick='changeStatus(0)'><i class='bx bx-time-five' ></i></div>
        <div class='workingOn-btn btn' onclick='changeStatus(1)'><i class='bx bx-run'></i></div>
        <div class='Done-btn btn' onclick='changeStatus(2)'><i class='bx bx-check-circle'></i></div>
      </div>
      <div class='task-btns'>
        <div class='save-btn btn' onclick='updateTask(${editableTask.id})'><i class='bx bx-save' ></i></div>
      </div>
  `;

  container.appendChild(element);
  
}

function changeStatus(n){
  let status = null;
  // let status = document.getElementById('statusEdit').value;
  switch (n) {
    case 0:
        
        status='Pendiente'
      break;

    case 1:
        status='En Progreso'
      break;

    case 2:
        status='Terminado'
      break;
  
    default:
      status = 'Pendiente'
      break;
  }
  document.getElementById('statusEdit').value = status;
}

//Update task
function updateTask(taskId){
  taskList[taskId].title = document.getElementById('titleEdit').value;
  taskList[taskId].description = document.getElementById('descriptionEdit').value;
  taskList[taskId].status = document.getElementById('statusEdit').value;

  const taskDate = new Date();
  taskDate.getDate();

  taskList[taskId].date = taskDate;

  
  let container = document.getElementsByClassName('taskInfo')[taskId];
  while(container.hasChildNodes()){
    container.removeChild(container.lastChild);
  }

  let element = document.createElement('div');
  element.innerHTML= `
      <div class='status-indicator'></div>
      <div class='title-txt'><span>Titulo: </span>${taskList[taskId].title}</div>
      <p class='description-txt'><span>Descripcion: </span>${taskList[taskId].description}</p>
      <p class='status-txt'>${taskList[taskId].status}</p>
      <p class='date-txt'><span>Ultima Actualizacion: </span>${taskList[taskId].date}</p>
      <div class='task-btns'>
        <div class='edit-btn btn' onclick='editTask(${taskList[taskId].id})'><i class='bx bxs-edit-alt'></i></div>
        <div class='delete-btn btn' onclick='deleteTask(${taskList[taskId].id})'><i class='bx bx-trash'></i></div>
      </div>
  `;

  container.appendChild(element);

  if(taskList[taskId].status == 'En Progreso'){
    document.getElementsByClassName('status-indicator')[taskId].style.backgroundColor='var(--info-color)';
  }
  else if(taskList[taskId].status == 'Terminado'){
    document.getElementsByClassName('status-indicator')[taskId].style.backgroundColor='var(--success-color)';
  }
}

//delete task
function deleteTask(id){
  delete taskList[id]
  let container = document.getElementsByClassName('taskInfo')[id];
  container.remove();
}