import { ProcessToRedux } from '../types/processTypes';


export const SET_PROCESSES = 'SET_PROCESSES';
export const ADD_PROCESS = 'ADD_PROCESS';
export const UPDATE_PROCESS = 'UPDATE_PROCESS';
export const DELETE_PROCESS = 'DELETE_PROCESS';

interface SetProcessesAction {
  type: typeof SET_PROCESSES;
  payload: ProcessToRedux[];
}

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

export type ProcessActionTypes =
  | SetProcessesAction
  | AddProcessAction
  | UpdateProcessAction
  | DeleteProcessAction;
