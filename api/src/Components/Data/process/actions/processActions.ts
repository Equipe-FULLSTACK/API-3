<<<<<<< Updated upstream
import { Dispatch } from 'redux';
import * as api from '../api/processApi';
import { SET_PROCESSES, ProcessActionTypes } from '../types/processActionTypes';
import { ProcessToRedux } from '../types/processTypes';

export const fetchProcesses = () => async (dispatch: Dispatch<ProcessActionTypes>) => {
  try {
    const processes = await api.fetchProcesses();
    dispatch({ type: SET_PROCESSES, payload: processes });
  } catch (error) {
    console.error('Erro ao buscar processos:', error);
  }
};

=======
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../store/configureStore';
import { ProcessToRedux } from '../types/processTypes';
import { ProcessActionTypes } from '../types/processActionTypes';
import {
  fetchProcesses as fetchProcessesApi,
  createProcess as createProcessApi,
  updateProcess as updateProcessApi,
  deleteProcess as deleteProcessApi,
} from '../api/processApi';

export const fetchProcesses = (): ThunkAction<void, RootState, null, ProcessActionTypes> => {
  return async (dispatch) => {
    try {
      const processes = await fetchProcessesApi();
      dispatch({
        type: 'SET_PROCESSES',
        payload: processes,
      });
    } catch (error) {
      console.error(error);
    }
  };
};


// Ação para criar um processo
export const createProcess = (processData: ProcessToRedux): ThunkAction<void, RootState, null, ProcessActionTypes> => {
  return async (dispatch) => {
    try {
      const newProcess = await createProcessApi(processData);
      dispatch({
        type: 'ADD_PROCESS',
        payload: newProcess,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Ação para atualizar um processo
export const updateProcess = (processId: number, updatedData: ProcessToRedux): ThunkAction<void, RootState, null, ProcessActionTypes> => {
  return async (dispatch) => {
    try {
      const updatedProcess = await updateProcessApi(processId, updatedData);
      dispatch({
        type: 'UPDATE_PROCESS',
        payload: updatedProcess,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Ação para excluir um processo
export const deleteProcess = (processId: number): ThunkAction<void, RootState, null, ProcessActionTypes> => {
  return async (dispatch) => {
    try {
      await deleteProcessApi(processId);
      dispatch({
        type: 'DELETE_PROCESS',
        payload: { processId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
>>>>>>> Stashed changes
