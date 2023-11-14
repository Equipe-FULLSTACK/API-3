import React, { useEffect, useState } from 'react';
import axios from 'axios';



interface Row{
    id: number,
    process: number,
    active: boolean,
    status: string, 
    name: string,
    created: string ,
    deadline ,
    description ,
}

const API_URL = 'http://localhost:3000';

const fetchlogTask = async () => {
  try {
    console.log('API fetchlogTask enviado a rota ', API_URL, '/logTask - GET');
    const response = await axios.get(`${API_URL}/logTask`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

const DataTableTask: React.FC = () => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchlogTask();
        console.log('Data received:', data);
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    
  );
};

export default DataTableTask;
