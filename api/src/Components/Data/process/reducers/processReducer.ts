import { SET_PROCESSES, ADD_PROCESS, UPDATE_PROCESS, DELETE_PROCESS, ProcessActionTypes } from '../types/processActionTypes';
import { ProcessToRedux } from '../types/processTypes';

interface State {
  processes: ProcessToRedux[];
}

const initialState: State = {
  processes: [],
};

const processReducer = (state = initialState, action: ProcessActionTypes): State => {
  switch (action.type) {
    case SET_PROCESSES:
      return { ...state, processes: action.payload };

    case ADD_PROCESS:
      return { ...state, processes: [...state.processes, action.payload] };

    case UPDATE_PROCESS:
      return {
        ...state,
        processes: state.processes.map((process) =>
          process.processId === action.payload.processId ? { ...process, ...action.payload } : process
        ),
      };

    case DELETE_PROCESS:
      return {
        ...state,
        processes: state.processes.filter((process) => process.processId !== action.payload.processId),
      };

    default:
      return state;
  }
};

export default processReducer;
