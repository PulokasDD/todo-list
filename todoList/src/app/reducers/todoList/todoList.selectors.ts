import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "../../types";

export const selectTaskFeature = createFeatureSelector<TaskState>('task')

export const selectTasks = createSelector(
    selectTaskFeature,
    (state: TaskState) => state.task
)
