import { SET_PROCESSES, ADD_PROCESS, UPDATE_PROCESS, DELETE_PROCESS, ProcessActionTypes } from '../types/processActionTypes';
import { ProcessToRedux } from '../types/processTypes';

export interface AppState {
  processes: ProcessToRedux[];
}

const initialState: AppState = {
  processes: [],
};

const processReducer = (state: AppState = initialState, action: ProcessActionTypes): AppState => {
  switch (action.type) {
    case SET_PROCESSES:
      return { ...state, processes: action.payload };

    case ADD_PROCESS:
      return { ...state, processes: [...state.processes, action.payload] };

    case UPDATE_PROCESS:
      return {
        ...state,
        processes: state.processes.map((process) =>
          process.id === action.payload.id ? { ...process, ...action.payload } : process
        ),
      };

    case DELETE_PROCESS:
      return {
        ...state,
        processes: state.processes.filter((process) => process.id !== action.payload.processId),
      };

    default:
      return state;
  }
};

export default processReducer;
