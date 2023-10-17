
export interface TaskToRedux {
    taskId: number;
    taskProcessId: number;
    taskDescription: string;
    taskDate: string;
    taskStatus: string;
    taskPercent: number;
  }
  
  export interface TaskState {
    tasks: TaskToRedux[];
  }
  
  export const ADD_TASK = 'ADD_TASK';
  export const UPDATE_TASK = 'UPDATE_TASK';
  export const DELETE_TASK = 'DELETE_TASK';
  
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
  
  export type TaskActionTypes = AddTaskAction | UpdateTaskAction | DeleteTaskAction;