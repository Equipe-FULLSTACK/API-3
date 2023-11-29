import React, { useEffect, useState } from 'react';

/* Page Import */
import Process from '../Process/Process';
import NavBar from '../Navbar/Navbar';
import SideBar from '../Slidebar/Slidebar';
import Footer from '../Footer/Footer';


import {
    Wrapper,
    Divider,
} from "./styles"

import Modal from '../Modal/Modal';
import { ProcessModal } from '../Modal/ModalProcess/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface dataHomePage {
    name: string;
}

const HomePage: React.FC<dataHomePage> = () => {
    const [name, setName] = useState('')
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    useEffect(() =>{
        axios.get('http://localhost:3000/ck')
        .then( res => {
            if(res.data.valid) {
                setName(res.data.username);
                setSelectedRole(res.data.role)
            } else {
                navigate('/')
            }
            console.log(res)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <>
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
                {selectedRole == '1' ? <SideBar pageName={'SideBar'} /> : null}
                
                <Process pageName={'Process'} dataProcess={[]} bg={''} />


            </Wrapper>

            <Footer pageName={'Footer'} />
        </>
    );
};

export default HomePage;