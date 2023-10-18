import { ProcessActionTypes, ProcessState, ADD_PROCESS, UPDATE_PROCESS, DELETE_PROCESS } from './processTypes';
import dataProcess from './dataProcess';



const initialState: ProcessState = {
  process: dataProcess,
};

const processReducer = (state = initialState, action: ProcessActionTypes): ProcessState => {
  switch (action.type) {
    case ADD_PROCESS:
      return {
        ...state,
        process: [...state.process, action.payload],
      };
    case UPDATE_PROCESS:
      return {
        ...state,
        process: state.process.map((p) =>
          p.processId === action.payload.processId ? { ...p, ...action.payload } : p
        ),
      };
    case DELETE_PROCESS:
      return {
        ...state,
        process: state.process.filter((p) => p.processId !== action.payload.processId),
      };
    default:
      return state;
  }
};

export default processReducer;