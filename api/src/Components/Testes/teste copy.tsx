import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const fetchLogTask = async () => {
  try {
    console.log('API fetchTasks enviado a rota ', API_URL, '/logProcess - GET');
    const response = await axios.get(`${API_URL}/logProcess`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

const LogProcess: React.FC = () => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLogTask();
        console.log('Data received:', data);
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="container">
      {apiData && (
        <div>
          <h1>Processos e Tarefas</h1>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LogProcess;
