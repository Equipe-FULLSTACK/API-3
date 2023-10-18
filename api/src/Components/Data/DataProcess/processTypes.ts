
export interface ProcessToRedux {
  processId: number,
  processName: string,
  processStatus: string,
  processDateFinshed: string,
  processHourFinshed: string,
}

export interface ProcessState {
  process: ProcessToRedux[];
}

export const ADD_PROCESS = 'ADD_PROCESS';
export const UPDATE_PROCESS = 'UPDATE_PROCESS';
export const DELETE_PROCESS = 'DELETE_PROCESS';

interface AddProcessAction {
  type: typeof ADD_PROCESS;
  payload: ProcessToRedux;
}

interface UpdateProcessAction {
  type: typeof UPDATE_PROCESS;
  payload: ProcessToRedux;
}

interface DeleteProcessAction {
  type: typeof DELETE_PROCESS;
  payload: { processId: number };
}

export type ProcessActionTypes = AddProcessAction | UpdateProcessAction | DeleteProcessAction;