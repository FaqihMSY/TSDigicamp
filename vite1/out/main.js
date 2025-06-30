import { ProjectCollection } from "./models/project";
function renderProjectOptions() {
    const selectedProjectEl = document.getElementById('selectedProject');
    const ProjectsEl = document.getElementById('projects');
    // console.log(ProjectsEl)
    const collection = new ProjectCollection();
    collection.renderAsSelectOptions(ProjectsEl);
    ProjectsEl?.addEventListener('change', (e) => {
        const value = collection.findProjectById(e.target.value);
        // console.log(e.target.value)
        if (selectedProjectEl) {
            selectedProjectEl.innerText = value?.name || '';
        }
    });
    //TODO : saat berubah selected projectnya terisi
}
renderProjectOptions();
