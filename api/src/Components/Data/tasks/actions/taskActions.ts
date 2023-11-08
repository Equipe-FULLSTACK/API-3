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
      dispatch({
        type: 'SET_TASKS', // Certifique-se de que 'SET_TASKS' seja definido em 'taskActionTypes.ts'
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
      dispatch({
        type: 'ADD_TASK', // Certifique-se de que 'ADD_TASK' seja definido em 'taskActionTypes.ts'
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
    try {
      const updatedTask = await updateTaskApi(taskId, updatedData);
      dispatch({
        type: 'UPDATE_TASK', // Certifique-se de que 'UPDATE_TASK' seja definido em 'taskActionTypes.ts'
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
      dispatch({
        type: 'DELETE_TASK', // Certifique-se de que 'DELETE_TASK' seja definido em 'taskActionTypes.ts'
        payload: { taskId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
