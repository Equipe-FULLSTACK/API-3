import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Divider, Modal } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { idID } from '@mui/material/locale';

import SideBar from '../Slidebar/Slidebar';
import { Wrapper } from '../Navbar/styles';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


interface Row {
  id: number;
  originalid: number; // Change the type to number based on your database schema
  changetime: string;
  process: number;
  name: string;
  description: string;
}
export default function DataTableTemplateTask() {
const API_URL = 'http://localhost:3000';
const [data, setdata] = useState<Row[]>([]);

interface dataHomePage {
  name: string;
}




const fetchLogTask = async () => {
  try {
    console.log('API fetchTasks enviado a rota ', API_URL, '/log_template_tasks - GET');
    const response = await axios.get(`${API_URL}/log_template_tasks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchLogTask();
      console.log('Data received:', data);
      setdata(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

}, []);

console.log(data)




const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'originalid', headerName: 'originalid', width: 130 },
  { field: 'changetime', headerName: 'changetime', width: 130 },
  { field: 'process', headerName: 'process', width: 130 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
];

const rows: Row[] = data.map((row) => ({
  id: row.id,
  originalid: row.originalid,
  changetime: row.changetime,
  process: row.process,
  name: row.name,
  description: row.description,
}));


  return (
    <div>

                <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
               pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                 },
                 }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

  
    </div>

  );
}