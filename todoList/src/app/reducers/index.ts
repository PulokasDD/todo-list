import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { tasksReducer } from './todoList/todoList.reducer';

export const reducers: ActionReducerMap<any> = {
  'task': tasksReducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
