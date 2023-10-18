import { Action} from 'redux';
import { createStore } from 'redux';
import taskReducer from '../Components/Data/DataTask/taskReducer';
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../Components/Data/DataTask/taskTypes'; // Importe suas constantes de ação aqui
import { TaskToRedux } from '../Components/Data/DataTask/taskTypes';
import { dataTask } from '../Components/Data/DataTask/dataTask';
import { TaskActionTypes } from '../Components/Data/DataTask/taskTypes';

export interface AppState {
  modalAberto: boolean;
  tamanhoModal: string;
  processId?: number;
  tasks: TaskToRedux[];
}

export const selectProcessId = (state: AppState) => state.processId;

interface ToggleModalAction extends Action {
  type: 'TOGGLE_MODAL';
  tamanho?: string;
  processId?: number;
}

interface FecharModalAction extends Action {
  type: 'FECHAR_MODAL';
}

const initialState: AppState = {
  modalAberto: false,
  tamanhoModal: '1200px',
  tasks: dataTask, 
};





const reducer = (
  state: AppState = initialState,
  action: ToggleModalAction | FecharModalAction | TaskActionTypes
): AppState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalAberto: !state.modalAberto,
        tamanhoModal: action.tamanho || initialState.tamanhoModal,
        processId: action.processId,
      };
    case 'FECHAR_MODAL':
      return {
        ...state,
        modalAberto: false,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskId === action.payload.taskId ? { ...task, ...action.payload } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.taskId !== action.payload.taskId),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
