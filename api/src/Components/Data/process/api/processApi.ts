import axios from 'axios';
import { ProcessToRedux } from '../types/processTypes';

// set api
const API_URL = 'http://localhost:3000'

export const fetchProcesses = async () => {
  const response = await axios.get(`${API_URL}/p`);
  return response.data;
};

export const createProcess = async (processData: ProcessToRedux) => {
  const response = await axios.post(`${API_URL}/processes`, processData);
  return response.data;
};

export const updateProcess = async (processId: number, processData: ProcessToRedux) => {
  const response = await axios.put(`${API_URL}/processes/${processId}`, processData);
  return response.data;
};

export const deleteProcess = async (processId: number) => {
  await axios.delete(`${API_URL}/processes/${processId}`);
};
