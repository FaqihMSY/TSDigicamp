import type { IProject, ProjectStatus } from "../interface";
export declare class Project implements IProject {
    id: number;
    name: string;
    status: ProjectStatus;
    manHour: number;
    constructor(data: Project);
}
export declare class ProjectCollection {
    renderAsSelectOptions(selectEl: HTMLSelectElement): void;
    findProjectById(id: number | string): any;
}