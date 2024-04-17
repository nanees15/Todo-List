import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { provideNativeDateAdapter } from '@angular/material/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [provideNativeDateAdapter()],
  
})
export class AddTaskComponent implements OnInit{

  date1: string = "";

  constructor(private tasksService: TasksService, private Router: Router){

  }
  ngOnInit(): void {
  }
  saveTask(title: any, description: any){
    this.tasksService.saveTask(title.value,description.value, this.date1);
    this.Router.navigate(['/']);
  }
}
