import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, take } from 'rxjs';
import { TaskService } from '../../task.service';
import { Task, Action } from '../../types';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

  constructor(private taskService: TaskService, private dialog: MatDialog) {
    this.tasks$ = this.taskService.tasks$
  }

  private openDialog(name: string, action: Action) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: 'auto',
      width: 'auto',
      position: { top: '7%' },
      data: { name, action }
    })

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        result === 'yes' ? this.taskService.removeTask(name) : this.taskService.editTask(name, result)
      }
    });
  }

  public editTask(name: string) {
    this.openDialog(name, 'edit')
  }

  public removeTask(name: string) {
    this.openDialog(name, 'remove')
  }

}
