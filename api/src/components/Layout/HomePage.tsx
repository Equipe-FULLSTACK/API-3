import React from 'react';

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


interface dataHomePage {
    name: string;
}

const HomePage: React.FC<dataHomePage> = ({ name }) => {

    return (
        <>
            <NavBar userName={"Juliano Prado"} pageName={'NavBar'} />
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
                <Process pageName={'Process'} />

            </Wrapper>

            <Footer pageName={'Footer'} />
        </>
    );
};

export default HomePage;