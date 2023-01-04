import { Task } from './types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _state: Task[] = [{name: 'test', done: 'no'}]

  private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this._state)

  public get tasks$() {
    return this._tasks$
  }

  public addTask(name: string) {
    this._state.push({ name, done: 'no' })
    this._tasks$.next(this._state)
  }

  public removeTask(name: string) {
    this._state = this._state.filter(task => task.name !== name)
    this._tasks$.next(this._state)
  }
}
