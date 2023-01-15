import { createAction, props } from '@ngrx/store';
import { Task, taskActionsType, TaskRename } from './../../types';

export const addTask = createAction(taskActionsType.add, props<Pick<Task, 'name'>>());
export const removeTask = createAction(taskActionsType.remove, props<Pick<Task, 'name'>>());
export const editTask = createAction(taskActionsType.clear, props<TaskRename>());