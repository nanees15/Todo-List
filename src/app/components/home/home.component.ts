import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent implements OnInit{

  constructor(protected tasksService: TasksService){}

  ngOnInit(): void {   
  }

  DeleteTask(i:number){
    this.tasksService.deleteTask(i);
  }

}
