import { ProjectCollection } from "./models/project"
import { SimpleTask } from "./models/sampleTask"



function renderProjectOptions(){
    const selectedProjectEl=document.getElementById('selectedProject')
    const ProjectsEl = document.getElementById('projects')
    
    // console.log(ProjectsEl)
    const collection = new ProjectCollection()
    collection.renderAsSelectOptions(ProjectsEl as HTMLSelectElement)
    
    ProjectsEl?.addEventListener('change',(e : any)=>{
      const value = collection.findProjectById(e.target.value);
      // console.log(e.target.value)
      if(selectedProjectEl){
        selectedProjectEl.innerText=value?.name||''
      }
    })
    
    
    //TODO : saat berubah selected projectnya terisi
}


renderProjectOptions()

// const task= new SimpleTask(1);
// console.log("task",task);
// console.log("task : ",task.createTask("Makan"));
// console.log("update task : ",task.update(123,"makanan"));
// console.log("first task",task.first());
// console.log("last task",task.last());
// console.log("getAll",task.getAll());