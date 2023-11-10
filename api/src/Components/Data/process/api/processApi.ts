import axios from 'axios';
import { ProcessToRedux } from '../types/processTypes';

const API_URL = 'http://localhost:3000';

export const fetchProcesses = async () => {
  try {
    const response = await axios.get(`${API_URL}/p`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar processos:', error);
    throw error;
  }
};

export const createProcess = async (newProcessData: ProcessToRedux) => {
  try {
    const processDataToSend = {
      active: newProcessData.active,
      status: newProcessData.status,
      name: newProcessData.name,
      created: newProcessData.created, 
      deadline: newProcessData.deadline,
      description: newProcessData.description,
    };

    console.log('API createProcess enviada a rota ', `${API_URL}/createprocess`, '- POST', processDataToSend);
    
    const response = await axios.post(`${API_URL}/createprocess`, processDataToSend);
    
    return response.data;
  } catch (error) {
    console.error('Erro ao criar processo:', error);
    throw error;
  }
};


export const updateProcess = async (processId: number, processData: ProcessToRedux) => {
  try {
    const response = await axios.put(`${API_URL}/processes/${processId}`, processData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar processo:', error);
    throw error;
  }
};

export const deleteProcess = async (processId: number) => {
  try {
    await axios.delete(`${API_URL}/processes/${processId}`);
  } catch (error) {
    console.error('Erro ao excluir processo:', error);
    throw error;
  }
};
