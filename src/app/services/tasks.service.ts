import { Injectable , ElementRef } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      title: "Assignment HCI",
      description: "Angular assignment - To Do List",
      due_date: "18/4/2024"
    },
    {
      title: "Quiz GIS",
      description: "Quiz on Labs Content",
      due_date: "20/4/2024"
    }
  ]
  constructor() { }

  deleteTask(i:number){
    this.tasks.splice(i,1);
  }

  saveTask(title: any, description:any, date1:any){
    this.tasks.push({
      title,
      description,
      due_date: date1
    })
  }

  updateTask(id:any, item:any){
    this.tasks[id] = item;
  }
}
