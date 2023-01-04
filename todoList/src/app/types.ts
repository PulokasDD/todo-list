export interface Task {
    name: string;
    done: Status;
    created?: Date
}

export interface DialogData {
    name: string;
    action: Action;
  }

export type Status = 'yes' | 'no'
export type Action = 'remove' | 'edit'