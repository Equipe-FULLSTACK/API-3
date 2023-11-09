import axios from 'axios';
import { TaskToRedux } from '../types/taskTypes';

const API_URL = 'http://localhost:3000';

export const fetchTasks = async () => {
  try {
    console.log('API fetchTasks enviado a rota ', API_URL,'/t - GET')
    const response = await axios.get(`${API_URL}/t`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

export const createTask = async (taskData: TaskToRedux) => {
  try {
    console.log('API createTask enviado a rota ', API_URL,'/t - POST')
    const response = await axios.post(`${API_URL}/t`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    throw error;
  }
};

export const updateTask = async (taskId: number, taskData: TaskToRedux) => {
  try {
    
    const updatedTaskData = {
      process: taskData.process,
      active: taskData.active,
      status: taskData.status,
      name: taskData.name,
      deadline: taskData.deadline,
      description: taskData.description,
    };

    console.log('API updateTask enviado a rota ', API_URL,'/t - PUT',updatedTaskData);
    const response = await axios.put(`${API_URL}/t/${taskId}`, updatedTaskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    console.log('API deleteTask enviado a rota ', API_URL,'/t - DELETE')
    await axios.delete(`${API_URL}/tasks/${taskId}`);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    throw error;
  }
};
