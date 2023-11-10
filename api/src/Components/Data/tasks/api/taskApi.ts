import axios from 'axios';
import { TaskToRedux } from '../types/taskTypes';

const API_URL = 'http://localhost:3000';

export const fetchTasks = async () => {
  try {
    /* console.log('API fetchTasks enviado a rota ', API_URL,'/t - GET') */
    const response = await axios.get(`${API_URL}/t`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

export const createTask = async (newTaskData: TaskToRedux) => {
  try {
    const taskDataToSend = {
      process: newTaskData.process,
      active: newTaskData.active,
      status: newTaskData.status,
      name: newTaskData.name,
      deadline: newTaskData.deadline,
      description: newTaskData.description,
    };

    /* console.log('API createTask enviada a rota ', `${API_URL}/createtask`, '- POST', taskDataToSend); */
    
    const response = await axios.post(`${API_URL}/createtask`, taskDataToSend);
    
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

    /* console.log('API updateTask enviado a rota ', `${API_URL}/updatetask/${taskId}`, '- POST', updatedTaskData); */
    
    const response = await axios.post(`${API_URL}/updatetask/${taskId}`, updatedTaskData);
    
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    console.log('API deleteTask enviado a rota ', API_URL,'/deletetask - DELETE')
    await axios.post(`${API_URL}/deletetask/${taskId}`);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    throw error;
  }
};
