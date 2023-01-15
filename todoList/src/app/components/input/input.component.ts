import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/reducers/todoList/todoList.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  form: FormGroup = new FormGroup({
    taskName: new FormControl('')
  })

  constructor(private store$: Store<TaskState>) {}

  public addTask() {
    this.store$.dispatch(addTask({ name: this.form.value.taskName}))
    this.form.reset()
  }
}
