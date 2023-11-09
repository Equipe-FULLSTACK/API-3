import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../store/configureStore';
import { TaskActionTypes } from '../types/taskActionTypes';
import { TaskToRedux } from '../types/taskTypes'; 
import { fetchTasks as fetchTasksApi, createTask as createTaskApi, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/taskApi';

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
      dispatch({
        type: 'ADD_TASK',
        payload: newTask,
      });
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
      const updatedTask = await updateTaskApi(taskId, updatedData);
      dispatch({
        type: 'UPDATE_TASK', 
        payload: updatedTask,
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
      await deleteTaskApi(taskId);
      console.log('taskAction deleteTaskApi', taskId); /// CONTROLE ERRO
      dispatch({
        type: 'DELETE_TASK',
        payload: { taskId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
