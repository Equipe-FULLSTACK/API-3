// ModalComponent.tsx
import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { AppState } from '../../../store/index'; //
import { useDispatch } from 'react-redux';

import { selectuserId } from '../../../store/index';



import './style.css'
import addIcon from '../../../assets/icons/icon_add.png'
import edit from '../../../assets/icons/icon_edit.png'
import trash from '../../../assets/icons/icon_trash.png'
import date from '../../../assets/icons/icon_calendar.png'
import hour from '../../../assets/icons/icon_hour.png'
import save from '../../../assets/icons/icon_save.png'
import attach from '../../../assets/icons/attach.png'


import { datauser } from '../../Data/Datauser/datauser'


/* import { updateuserData } from "../../Data/Datauser/datauser"; /// atualiza as users
import { deleteuser } from "../../Data/Datauser/datauser"; /// deleta as users */




interface userModal {

    userId: number;
    userName: string;
    userEmail: string;
    userAdmin: number;

    userBarBackground: string;

}


const Modaluser: React.FC<userModal> = () => {
    
    const dispatch = useDispatch();

     // LOAD userS
     const user = useSelector((state: AppState) => state.user);
     useEffect(() => {
         if (user) {
            /*  console.log('user Form UseEffect user')
             console.log(user); */
         }
     }, [user]);




    const userModalId = useSelector(selectuserId); // VARIAVEL VEM REDUX MAINPULAÇÃO DOS DADOS A NIVEL GLOBAL.




    const userName = user
        .filter((f) => f.userId === userModalId)
        .map((n) => n.userName);

    const userEmail = user
        .filter((f) => f.userId === userModalId)
        .map((n) => n.userEmailFinshed);


  /*   console.log(statususer) */

    ////////////////////////////////////// MANIPULAÇÃO DAS EDIÇÕES EM TEMPO REAL DAS userS //////////////////////////////////////////////////////////


    const [editUserId, seteditUserId] = useState<number | null>(null);
    const [editedUsername, seteditedUsername] = useState<Record<number, string>>({});
    const [editedEmail, seteditedEmail] = useState<Record<number, string>>({});
    const [editedAdmin, seteditedAdmin] = useState<Record<number, string>>({});


    const stopEditing = () => {
        seteditUserId(null);
    };


  const edituser = (userId: number, editeduserFields: Partial<userToRedux>) => {
    
    const updateuserAction = {
      type: 'UPDATE_user',
      payload: {
        userId: userId,
        ...editeduserFields,
      },
    };

    // Despache a ação para o Redux
    dispatch(updateuserAction);
    stopEditing(); // Sai do modo de edição

  };


    return (

        <>
            <div className="datatable-container">
                <header>
                    <div className="userModal">
                        <div className="subuserModal">
                            <h2>user {userModalId} - {userName}</h2>                           
                        </div>
                    </div>
                </header>

                <table className="datatable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Nome</th>
                            <th>Admin</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((user) => (
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div >


        </>
    );
};

export default Modaluser;
