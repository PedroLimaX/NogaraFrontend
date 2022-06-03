let taskList = [];
let id = 0;


//create Task
function createTask(){

  let title = document.getElementById('taskTitle').value;
  let description = document.getElementById('taskDescription').value;

  let status;

  const date = new Date();
  date.getDate();

  let task = new Task(id, title, description, status, date);

  clearInputs();
  
  id++;
}

function clearInputs(){
  document.getElementsByTagName('form')[0].reset();
}


//create Obj
function Task(id,title, description, status = 'Pendiente', date){

  this.id=id;
  this.title = title;
  this.description = description;
  this.status = status;
  this.date = date;
  if(this.title=='') this.title = 'Sin titulo';
  if(this.description=='') this.description = 'Sin detalles';
  
  taskList.push(this);

  this.getId = () => this.id;
  this.getTitle = () => this.title;
  this.getDescription = () => this.description;
  this.getStatus = () => this.status;
  this.getDate = () => this.date;

  this.setId = (id)=> this.id = id;
  this.setTitle = (title)=> this.title = title;
  this.setDescrption = (description)=> this.description = description;
  this.setStatus = (status)=> this.status = status;
  this.setDate = (date)=> this.date = date;

  generateTask = (task) =>{
    let container = document.getElementsByTagName('main')[0];
    let element = document.createElement('div');
    element.innerHTML= `
      <div class="taskInfo">
      <div class='status-indicator'></div>
        <p class='title-txt'><span>Titulo: </span>${task.getTitle()}</p>
        <p class='description-txt'><span>Descripcion: </span>${task.getDescription()}</p>
        <p class='status-txt'>${task.getStatus()}</p>
        <p class='date-txt'><span>Ultima Actualizacion: </span>${task.getDate()}</p>
        <div class='task-btns'>
          <div class='edit-btn btn' onclick='editTask(${task.getId()})'><i class='bx bxs-edit-alt'></i></div>
          <div class='delete-btn btn' onclick='deleteTask(${task.getId()},event)'><i class='bx bx-trash'></i></div>
        </div>
      </div>
    `;
    container.appendChild(element);
    
  };


  editTask = (id) =>{
    let task = taskList[id];
      let container = document.getElementsByClassName('taskInfo')[task.getId()];
      while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
      }
    
      let element = document.createElement('div');
      element.innerHTML= `
          <div class='status-indicator'></div>
          <p class='title-txt'><span>Titulo: </span><input type='text' value='${task.getTitle()}' id='titleEdit' name='titleEdit'></p>
          <p class='description-txt'><span>Descripcion: </span><input type='text' value='${task.getDescription()}' id='descriptionEdit' name='descriptionEdit'></p>
          <p class='status-txt'><span>Estado: </span><input type='text' value='${task.getStatus()}' id='statusEdit' name='statusEdit' disabled></p>
          <div class='status-btns'>
            <div class='toDo-btn btn' onclick='changeStatus(0)'><i class='bx bx-time-five' ></i></div>
            <div class='workingOn-btn btn' onclick='changeStatus(1)'><i class='bx bx-run'></i></div>
            <div class='Done-btn btn' onclick='changeStatus(2)'><i class='bx bx-check-circle'></i></div>
          </div>
          <div class='task-btns'>
            <div class='save-btn btn' onclick='updateTask(${task.getId()})'><i class='bx bx-save' ></i></div>
          </div>
      `;
    
      container.appendChild(element);
      
    }

    changeStatus = (n) =>{
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

      updateTask = (id) =>{
          taskList[id].title = document.getElementById('titleEdit').value;
          taskList[id].description = document.getElementById('descriptionEdit').value;
          taskList[id].status = document.getElementById('statusEdit').value;
        
          const taskDate = new Date();
          taskDate.getDate();
        
          taskList[id].date = taskDate;
        
          
          let container = document.getElementsByClassName('taskInfo')[id];
          while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
          }
        
          let element = document.createElement('div');
          element.innerHTML= `
              <div class='status-indicator'></div>
              <div class='title-txt'><span>Titulo: </span>${taskList[id].title}</div>
              <p class='description-txt'><span>Descripcion: </span>${taskList[id].description}</p>
              <p class='status-txt'>${taskList[id].status}</p>
              <p class='date-txt'><span>Ultima Actualizacion: </span>${taskList[id].date}</p>
              <div class='task-btns'>
                <div class='edit-btn btn' onclick='editTask(${taskList[id].id})'><i class='bx bxs-edit-alt'></i></div>
                <div class='delete-btn btn' onclick='deleteTask(${taskList[id].id})'><i class='bx bx-trash'></i></div>
              </div>
          `;
        
          container.appendChild(element);
        
          if(taskList[id].status == 'En Progreso'){
            document.getElementsByClassName('status-indicator')[id].style.backgroundColor='var(--info-color)';
            document.getElementsByClassName('taskInfo')[id].style.backgroundColor='var(--bg-info-color)';
            document.getElementsByClassName('status-txt')[id].style.color='var(--info-color)';
          }
          else if(taskList[id].status == 'Terminado'){
            document.getElementsByClassName('status-indicator')[id].style.backgroundColor='var(--success-color)';
            document.getElementsByClassName('taskInfo')[id].style.backgroundColor='var(--bg-success-color)';
            document.getElementsByClassName('status-txt')[id].style.color='var(--success-color)';
          }
        }

        deleteTask = (id,event) =>{
          if(id==0) taskList.shift();
          else taskList.splice(id,1);
          event.target.parentNode.parentNode.parentNode.remove();
          console.log(taskList);
        }

  generateTask(this);

}