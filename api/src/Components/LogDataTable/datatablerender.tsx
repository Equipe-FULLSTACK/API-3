import React, { useEffect, useState } from 'react';
import DataTable from './logdatatable';
import DataTableTask from './logdatatabletask';
import DataTableEvidencia from './logdatatableevidences';
import DataTableRoles from './logdatatableroles';
import DataTableUser from './logdatatableuser';
import DataTableTemplate from './logdatatemplate';
import DataTableTemplateTask from './logdatatabletemplatetask';
import DataTableTemplateEvidencia from './logdatatabletemplatesevidencias';
import './index.css'
import NavBar from '../Navbar/Navbar';
import Divider from '@mui/material/Divider';
import { Modal } from '@mui/material';
import { Wrapper } from '../Slidebar/styles';
import SideBar from '../Slidebar/Slidebar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';






const DataTableRender: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('DataTable');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [name, setName] = useState('')
    const navigate = useNavigate()
  
    axios.defaults.withCredentials = true;
    useEffect(() =>{
        axios.get('http://localhost:3000/ck')
        .then( res => {
            if(res.data.valid) {
                setName(res.data.username);
            } else {
                navigate('/')
            }
            console.log(res)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div>
      <NavBar userName={name} pageName={'NavBar'} />
            <Divider />
            <Modal>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta velit, earum aperiam quas dolorum nesciunt inventore ullam tempore expedita neque beatae? Quidem ipsum enim porro, fugiat exercitationem asperiores omnis?</p>
            </Modal>
            <Wrapper
                display='flex'
                flexDirection='collum'
                justifyContent='flex-start'
                flexWrap='nowrap'
                >
            
            <SideBar pageName={'SideBar'} />
                

      <select className='select' name="datatable" id="data" onChange={handleOptionChange} value={selectedOption}>
        <option value="DataTable">LogProcessos</option>
        <option value="DataTableTask">LogTask</option>
        <option value="DataTableEvidencia">LogEvidencia</option>
        <option value="DataTableRoles">LogRoles</option>
        <option value="DataTableUser">LogUser</option>
        <option value="DataTableTemplate">LogTemplateProcessos</option>
        <option value="DataTableTemplateTask">LogTemplateTask</option>
        <option value="DataTableTemplateEvidencia">LogTemplateEvidencia</option>
      </select>

      <div>
      {selectedOption === 'DataTable' ? (
          <DataTable />
        ) : selectedOption === 'DataTableTask' ? (
          <DataTableTask />
        ) : selectedOption === 'DataTableEvidencia' ? (
          <DataTableEvidencia />
        ) : selectedOption === 'DataTableRoles' ? (
          <DataTableRoles />
        ) : selectedOption == 'DataTableUser' ?(
            <DataTableUser />
        ): selectedOption == 'DataTableTemplate' ?(
          <DataTableTemplate/>
        ):selectedOption == 'DataTableTemplateTask' ?(
          <DataTableTemplateTask/>
        ):selectedOption == 'DataTableTemplateEvidencia' ?(
          <DataTableTemplateEvidencia/>
        ):null}
      </div>


    </Wrapper>

            <Footer pageName={'Footer'} />
        
    </div>
  );
};

export default DataTableRender;