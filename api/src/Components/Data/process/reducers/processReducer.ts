import { SET_PROCESSES, ADD_PROCESS, UPDATE_PROCESS, DELETE_PROCESS, ProcessActionTypes } from '../types/processActionTypes';
import { ProcessToRedux } from '../types/processTypes';

<<<<<<< Updated upstream
interface State {
  processes: ProcessToRedux[];
}

const initialState: State = {
  processes: [],
};

const processReducer = (state = initialState, action: ProcessActionTypes): State => {
=======
export interface AppState {
  processes: ProcessToRedux[];
}

const initialState: AppState = {
  processes: [],
};

const processReducer = (state: AppState = initialState, action: ProcessActionTypes): AppState => {
>>>>>>> Stashed changes
  switch (action.type) {
    case SET_PROCESSES:
      return { ...state, processes: action.payload };

    case ADD_PROCESS:
      return { ...state, processes: [...state.processes, action.payload] };

    case UPDATE_PROCESS:
      return {
        ...state,
        processes: state.processes.map((process) =>
<<<<<<< Updated upstream
          process.processId === action.payload.processId ? { ...process, ...action.payload } : process
=======
          process.id === action.payload.id ? { ...process, ...action.payload } : process
>>>>>>> Stashed changes
        ),
      };

    case DELETE_PROCESS:
      return {
        ...state,
<<<<<<< Updated upstream
        processes: state.processes.filter((process) => process.processId !== action.payload.processId),
=======
        processes: state.processes.filter((process) => process.id !== action.payload.processId),
>>>>>>> Stashed changes
      };

    default:
      return state;
  }
};

export default processReducer;
