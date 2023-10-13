import React from 'react';

/* Page Import */
import Process from '../Process/Process';
import NavBar from '../Navbar/Navbar';
import SideBar from '../Slidebar/Slidebar';
import Footer from '../Footer/Footer';


import {
    Wrapper,
  } from "./styles"

interface dataHomePage {
    name: string;
}

const HomePage: React.FC<dataHomePage> = ({ name }) => {

    return (
        <>
        <NavBar userName={"Thiago Carvalho da Silva"} pageName={'NavBar'}/>
        
            <Wrapper 
                display='flex'
                flexDirection='collum'
                justifyContent='flex-start'
                flexWrap='nowrap'
                >

                <SideBar pageName={'SideBar'}/>
                <Process pageName={'Process'}/>
                    
            </Wrapper>
              
        <Footer pageName={'Footer'}/>
        </>
    );
};

export default HomePage;