import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{

  date1: string =  "";
  taskId: any;
  task: any;
  constructor(private route:ActivatedRoute,private tasksService: TasksService, private router:Router){

  }

  ngOnInit(): void {
      this.taskId = this.route.snapshot.paramMap.get('id');
      this.task = this.tasksService.tasks[this.taskId];
  }
  updateTask(){
    this.tasksService.updateTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }
}
