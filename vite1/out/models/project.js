import projects from "../projects.json";
export class Project {
    id;
    name;
    status;
    manHour;
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
        this.manHour = data.manHour;
    }
}
export class ProjectCollection {
    renderAsSelectOptions(selectEl) {
        projects.forEach(project => {
            const projectOption = document.createElement('option');
            projectOption.value = project.id.toString();
            projectOption.innerText = project.name;
            selectEl?.append(projectOption);
        });
    }
    findProjectById(id) {
        return projects.find(pr => pr.id == id);
    }
}
