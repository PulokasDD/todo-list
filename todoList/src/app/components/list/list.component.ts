import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, take } from 'rxjs';
import { TaskService } from '../../task.service';
import { Task, Action, TaskState } from '../../types';
import { DialogComponent } from '../dialog/dialog.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectTasks } from 'src/app/reducers/todoList/todoList.selectors';
import { editTask, removeTask } from 'src/app/reducers/todoList/todoList.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public tasks$: Observable<Task[]> = this.store$.pipe(select(selectTasks))

  constructor(private dialog: MatDialog, private store$: Store<TaskState>) {}

  private openDialog(name: string, action: Action) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: 'auto',
      width: 'auto',
      position: { top: '7%' },
      data: { name, action }
    })

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        result === 'yes' ? this.store$.dispatch(removeTask({ name })) :
                           this.store$.dispatch(editTask({ oldName: name, newName: result })) 
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
