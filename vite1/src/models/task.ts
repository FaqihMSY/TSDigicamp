
interface ITask{
    id:number;
    task:string;
}
export abstract class Task{
    protected projectId:number;
    protected _tasks:ITask[];
    constructor(projectId:number){
        this.projectId=projectId;
        this._tasks=[{
            id:123,task:'example'
        }];
    }
    public first(){
        if(this._tasks.length>=1){
            return this._tasks[0];
        }
    }
    public last(){
        if(this._tasks.length>=1){
            return this._tasks[this._tasks.length-1];
        }
    }
    public findById(id:number){
        return this._tasks.find(task => task.id === id);
    }
    public getAll(){
        return this._tasks;

    }
    public delete(taskId:number){
        const taskIndex=this._tasks.findIndex(task=>task.id===taskId);
        this._tasks.splice(taskIndex,1);
    }
}


