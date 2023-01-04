export interface Task {
    name: string;
    done: Status;
    created?: Date
}

export type Status = 'yes' | 'no'