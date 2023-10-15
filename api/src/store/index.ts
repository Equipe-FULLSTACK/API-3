// redux.ts
import { Action } from 'redux';
import { legacy_createStore as createStore} from 'redux';

export interface AppState {
  modalAberto: boolean;
  tamanhoModal: string;
  processId?: number; // Inclua processId no estado
}

interface ToggleModalAction extends Action {
  type: 'TOGGLE_MODAL';
  tamanho?: string;
  processId?: number; // Inclua processId na ação
}

export const selectProcessId = (state: AppState) => state.processId;

interface FecharModalAction extends Action {
  type: 'FECHAR_MODAL';
}

const initialState: AppState = {
  modalAberto: false,
  tamanhoModal: '1200px',
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
        processId: action.processId, // Atualize processId no estado com o valor da ação
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

const store = createStore(reducer);

export default store;
