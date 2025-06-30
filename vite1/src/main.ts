import { ProjectCollection } from "./models/project"



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

function validationInputTask(){
  const inputTaskEl=document.getElementById('task');
  console.log(inputTaskEl)
  inputTaskEl?.addEventListener('change',(e:any)=>{
    const taskInputEl= document.getElementById('taskInput')
    if(taskInputEl){
        taskInputEl.innerText=e.target.value||''
    }
    
  })
}
validationInputTask()
renderProjectOptions()