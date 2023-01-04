import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskService } from '../../task.service';
import { Task } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

  constructor(private taskService: TaskService) { 
    this.tasks$ = this.taskService.tasks$
    
  }

  ngOnInit(): void {
  }

  public removeTask(name: string) {
    this.taskService.removeTask(name)
  }

}
