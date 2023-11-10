import { TaskToRedux } from '../types/taskTypes';

export const SET_TASKS = 'SET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

interface SetTasksAction {
  type: typeof SET_TASKS;
  payload: TaskToRedux[];
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: TaskToRedux;
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: TaskToRedux;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: { taskId: number };
}

export type TaskActionTypes = 
      | SetTasksAction 
      | AddTaskAction 
      | UpdateTaskAction 
      | DeleteTaskAction;
