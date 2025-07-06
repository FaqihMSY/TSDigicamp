import { Task } from "./task";
import { generateId } from "../utils/utils";
export class SimpleTask extends Task{

    public createTask(task:string){

        this._tasks.push({
            id:generateId(),
            task:task
        });
    }
    public update(taskId:number,task:string){
        const foundTask = this.findById(taskId);
        if(!foundTask){
            return 'ga nemu pak';
        }
        foundTask.task=task;
        return foundTask;
    }

}

function validationInputTask(){
const task= new SimpleTask(1);
  const inputTaskEl=document.getElementById('task');
  console.log(inputTaskEl)
  inputTaskEl?.addEventListener('change',(e:any)=>{
    task.createTask(e.target.value);
    const taskInputEl = document.getElementById('taskInput');
    if (taskInputEl) {
        taskInputEl.innerHTML = '';
        task.getAll().forEach(taskItem => { 
            const taskElement = document.createElement('p'); 
            taskElement.textContent = `ID: ${taskItem.id} - ${taskItem.task}`;
            taskInputEl.appendChild(taskElement); 
        });
    }
    
  })
}
validationInputTask()