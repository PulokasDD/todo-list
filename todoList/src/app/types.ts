export interface Task {
    name: string;
    done: Status;
    created?: Date
}

export interface DialogData {
    name: string;
    action: Action;
  }

  export interface State {
    task: TaskState[],
  }
  
export interface TaskState {
  task: Task[]
}

export interface TaskRename {
  oldName: string;
  newName: string;
}

export type Status = 'yes' | 'no'
export type Action = 'remove' | 'edit'

export enum taskActionsType {
  add = '[ADD] addTask',
  remove = '[REMOVE] removeTask',
  clear = '[EDIT] editTask',
}
