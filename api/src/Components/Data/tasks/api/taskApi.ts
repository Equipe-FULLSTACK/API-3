/// FUNÇÃO CONSULTA COM API //// 
import axios from 'axios';
import { TaskToRedux } from '../types/taskTypes';

const API_URL = 'http://localhost:3000';

export const fetchTasks = async () => {
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
};
