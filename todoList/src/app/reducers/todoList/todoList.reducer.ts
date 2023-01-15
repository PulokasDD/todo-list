import { createReducer, on } from '@ngrx/store';
import { addTask, editTask, removeTask } from './todoList.actions';
import { TaskState, Task } from '../../types';

export const initialState: TaskState = {
  task: [{name: 'test', done: 'no'}]
} 

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { name }) => ({
    task: [...state.task, { name, done: 'no' }]
  })),
  on(removeTask, (state, { name }) => ({
    task: [...state.task].filter((task: Task) => task.name !== name)
  })),
  on(editTask, (state, { oldName, newName }) => (
    {
    task: [...state.task].map((task: Task) => task.name === oldName ? {...task, name: newName} : task)
  })
))