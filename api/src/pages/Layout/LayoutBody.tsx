import React from 'react';

/* Pages Imports */
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LayoutMain from './LayoutMain';


interface dataLayoutBody {
    name: string;
}

const LayoutBody: React.FC<dataLayoutBody> = ({ name }) => {

    return (
        <div className='templateBody'>
            <NavBar name={'Thiago Carvalho da Silva'}/>
            <LayoutMain name='' styleMain='templateBody'/>
            <Footer name='Thiago'/>
        </div>
    );
};

export default LayoutBody;