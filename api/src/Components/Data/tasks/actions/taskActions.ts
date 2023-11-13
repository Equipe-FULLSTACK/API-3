import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../store/configureStore';
import { TaskActionTypes } from '../types/taskActionTypes';
import { TaskToRedux } from '../types/taskTypes'; 
import { fetchTasks as fetchTasksApi, createTask as createTaskApi, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/taskApi';
import { fetchProcesses } from '../../process/actions/processActions';

// Ação para buscar tarefas
export const fetchTasks = (): ThunkAction<void, RootState, null, TaskActionTypes> => {
  return async (dispatch) => {
    try {
      const tasks = await fetchTasksApi();
      console.log('taskAction fetchTasks', tasks); /// CONTROLE ERRO

      dispatch({
        type: 'SET_TASKS',
        payload: tasks,
      });
      
    } catch (error) {
      console.error(error);
    }
  };
};

// Ação para criar uma tarefa
export const createTask = (taskData: TaskToRedux): ThunkAction<void, RootState, null, TaskActionTypes> => {
  return async (dispatch) => {
    try {
      const newTask = await createTaskApi(taskData);
      console.log('taskAction createTask', newTask); /// CONTROLE ERRO
      { alert('Tarefa CRIADA com Sucesso!'); }
      dispatch(fetchTasks());
    } catch (error) {
      console.error(error);
    }
  };
};

// Ação para atualizar uma tarefa
export const updateTask = (taskId: number, updatedData: TaskToRedux): ThunkAction<void, RootState, null, TaskActionTypes> => {
  return async (dispatch) => {
    console.log('taskAction updateTask', updatedData); /// CONTROLE ERRO
    try {
      const updateTaskToBackend = await updateTaskApi(taskId, updatedData);
      console.log('taskAction updatedTask',updateTaskToBackend)
      { alert('Tarefa Atualizada com Sucesso!'); }
      dispatch({
        type: 'UPDATE_TASK', 
        payload: updatedData,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Ação para excluir uma tarefa
export const deleteTask = (taskId: number): ThunkAction<void, RootState, null, TaskActionTypes> => {
  return async (dispatch) => {
    try {
      console.log('taskAction deleteTaskApi', taskId); /// CONTROLE ERRO
      await deleteTaskApi(taskId);
      { alert('Tarefa DELETADA com Sucesso!'); }
      dispatch({
        type: 'DELETE_TASK',
        payload: { taskId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
