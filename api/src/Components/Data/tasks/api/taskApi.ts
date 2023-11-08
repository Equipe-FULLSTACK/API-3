<<<<<<< Updated upstream
/// FUNÇÃO CONSULTA COM API //// 
=======
>>>>>>> Stashed changes
import axios from 'axios';
import { TaskToRedux } from '../types/taskTypes';

const API_URL = 'http://localhost:3000';

export const fetchTasks = async () => {
<<<<<<< Updated upstream
  const response = await axios.get(`${API_URL}/t`);
  return response.data;
};

export const createTask = async (taskData: TaskToRedux) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const updateTask = async (taskId: number, taskData: TaskToRedux) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (taskId: number) => {
  await axios.delete(`${API_URL}/tasks/${taskId}`);
=======
  try {
    const response = await axios.get(`${API_URL}/t`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

export const createTask = async (taskData: TaskToRedux) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    throw error;
  }
};

export const updateTask = async (taskId: number, taskData: TaskToRedux) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    throw error;
  }
>>>>>>> Stashed changes
};
