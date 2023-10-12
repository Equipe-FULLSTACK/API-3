import React from 'react';

/* Pages Imports */
import SideBar from '../Slidebar/Slidebar';
import Process from '../Process/Process';


interface dataLayoutMain {
    name: string;
    styleMain: string;
}

const LayoutMain: React.FC<dataLayoutMain> = ({ styleMain }) => {

    return (
        <div className='templateMain'>
            <SideBar name='Teste Side Bar'/>
            <Process name='Processos'/>
        </div>
    );
};

export default LayoutMain;