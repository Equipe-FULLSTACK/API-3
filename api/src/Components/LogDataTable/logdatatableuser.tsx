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
  admin: number;
  name: boolean;
  nickname: string;
  password: string;
  phone: string;
  email: string;
  image: string;
}
export default function DataTableUser() {
const API_URL = 'http://localhost:3000';
const [data, setdata] = useState<Row[]>([]);

interface dataHomePage {
  name: string;
}



const fetchLogTask = async () => {
  try {
    console.log('API fetchTasks enviado a rota ', API_URL, '/log_users - GET');
    const response = await axios.get(`${API_URL}/log_users`);
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
  { field: 'admin', headerName: 'admin', width: 130 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'nickname', headerName: 'nickname', width: 130 },
  { field: 'password', headerName: 'password', width: 130 },
  { field: 'phone', headerName: 'phone', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'image', headerName: 'image', width: 130 },
];

const rows: Row[] = data.map((row) => ({
  id: row.id,
  originalid: row.originalid,
  changetime: row.changetime,
  admin: row.admin,
  name: row.name,
  nickname: row.nickname,
  password: row.password,
  phone: row.phone,
  email: row.email,
  image: row.image,
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