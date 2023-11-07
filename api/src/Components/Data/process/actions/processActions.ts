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

