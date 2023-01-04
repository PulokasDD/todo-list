import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  form: FormGroup = new FormGroup({
    taskName: new FormControl('')
  })

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
  }

  public addTask() {
    this.taskService.addTask(this.form.value.taskName)
    this.form.reset()
  }

}
