export enum ProjectStatus {
    active =1, 
    pending =0
}
export interface IProject{
    id : number;
    name : string;
    status : ProjectStatus;
    manHour : number;
}