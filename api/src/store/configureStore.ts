import { createStore, combineReducers, applyMiddleware, Dispatch, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import taskReducer from '../Components/Data/tasks/reducers/taskReducer';
import processReducer from '../Components/Data/process/reducers/processReducer';
import { fetchTasks } from '../Components/Data/tasks/actions/taskActions';
import { fetchProcesses } from '../Components/Data/process/actions/processActions';


// EXPORTAÇÃO DE ESTADOS DA APLICAÇÃO
export interface AppState {
  modalAberto: boolean;
  tamanhoModal: string;
<<<<<<< Updated upstream
  processId?: number;
}

=======
  processId: number;
  loading?: boolean;
}


export const selectProcessId = (state: AppState) => state.processId;
export const loading = (state: AppState) => state.loading;

>>>>>>> Stashed changes
export type RootState = ReturnType<typeof rootReducer>;



//TODO SEPARAR AS AÇÕES EM DOCUMENTOS SEPARADOS FUTURO. 
interface ToggleModalAction extends Action {
  type: 'TOGGLE_MODAL';
  tamanho?: string;
<<<<<<< Updated upstream
  processId?: number;
=======
  processId: number;
>>>>>>> Stashed changes
}

interface FecharModalAction extends Action {
  type: 'FECHAR_MODAL';
}

const initialState: AppState = {
  modalAberto: false,
  tamanhoModal: '1200px',
<<<<<<< Updated upstream
=======
  loading: false,
  processId: 0,
>>>>>>> Stashed changes
};

const reducer = (
  state: AppState = initialState,
  action: ToggleModalAction | FecharModalAction
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
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  tasks: taskReducer,
  processes: processReducer,
  modal: reducer,
});






const store = createStore(rootReducer, applyMiddleware(thunk));

/// DESPACHO INICIAL PARA CARREGAR DADOS DA API
(store.dispatch as ThunkDispatch<RootState, undefined, any>)(fetchTasks()).then(() => {
  (store.dispatch as ThunkDispatch<RootState, undefined, any>)(fetchProcesses()).then(() => {
    console.log('Dados da API foram carregados com sucesso.');
<<<<<<< Updated upstream
=======

    const tasks = store.getState().tasks.tasks; 
    const processes = store.getState().processes.processes; 

    console.log('Tarefas:', tasks);
    console.log('Processos:', processes);
>>>>>>> Stashed changes
  });
});

export default store;

