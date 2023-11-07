import { Dispatch } from 'redux';
import * as api from '../api/taskApi';
import { SET_TASKS, TaskActionTypes } from '../types/taskActionTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../store/configureStore';

type AsyncAction<R> = ThunkAction<Promise<R>, RootState, undefined, TaskActionTypes>;

export const fetchTasks = (): AsyncAction<TaskActionTypes> => {
  return async (dispatch: Dispatch<TaskActionTypes>): Promise<TaskActionTypes> => {
    try {
      const tasks = await api.fetchTasks();
      dispatch({ type: SET_TASKS, payload: tasks });
      return { type: SET_TASKS, payload: tasks };
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      throw error;
    }
  };
};