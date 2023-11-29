import React, { useEffect, useState } from "react";

import NavBar from "../Components/Navbar/Navbar";
import { Divider } from "../Components/Layout/styles";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Admin() {
  const posicaoID = window.location.href.indexOf("id=");
  const id = window.location.href.substring(posicaoID + 3);
  const [seuJSON, setSeuJSON] = useState([]);
  const [name, setName] = useState('')
  const [admin, setAdmin] = useState('')
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('');


  useEffect(() => {
    fetch(`http://localhost:3000/us?us${id}`)
    .then((response) => response.json())
    .then((data) => setSeuJSON(data))
    .catch((error) => console.error("Erro ao buscar o JSON", error));
}, []);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/ck')
        .then( res => {
            if(res.data.valid) {
                setName(res.data.username);
                setAdmin(res.data.admin);
                setSelectedRole(res.data.role)
                if(res.data.role == 1){
                  console.log('Usuario admin confirmado')
                } else{
                  alert('Acesso Negado')
                  console.log(res)
                  navigate('/')                  
                }
            } else{
              alert('Acesso Negado')
              console.log(res)
              navigate('/')}
            console.log(res)
        })
        .catch(err => console.log(err))
    },[])

    
    const handleAtualizar = async (userID) => {
      const userToUpdate = seuJSON.find((user) => user.id === userID);
    
      try {
        const response = await fetch(`http://localhost:3000/atualizarRole/${userID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role: selectedRole }),
        });
    
        if (response.status === 200) {
          // Atualização bem-sucedida no servidor.
          // Atualize o estado no cliente para refletir as alterações.
          const updatedUsers = seuJSON.map((user) => {
            if (user.id === userID) {
              user.role = selectedRole;
            }
            return user;
          });
    
          setSeuJSON(updatedUsers);
          alert(`Atualização Bem Sucedida`);
        }
      } catch (error) {
        console.error("Erro ao atualizar a role:", error);
      }
    };
    



  return (
    <>
      <NavBar userName={name} pageName={"NavBar"} />
      
      <Divider />
      <div className="admin-lista">
        <div>
          <div>
            <h2 className="admin-title">Lista de Usuários</h2>
            <a className="admin-cadastro" href="/cadastro">Criar novo usuario</a>
          </div>
          <div className="admin-user-list">
            {seuJSON.map((user) => (
              <div key={user.id}>
                <div>
                  <table className="admin-table">
                    <thead>
                      <tr >
                        <th className="admin-tr">Nome</th>
                        <th  className="admin-tr">E-mail</th>
                        <th  className="admin-tr">Role</th>
                        <th  className="admin-tr"></th>
                      </tr>
                      <tr className="admin-tr">
                        <td className="admin-td">
                          <strong className="admin-n"> {user.name}</strong>
                        </td>
                        <td className="admin-td">
                          <strong className="admin-m"> {user.email}</strong>
                        </td>
                        <td className="admin-td">
                          <div>
                            <select
                              name="role"
                              id="role"
                              className="admin-combo"
                              defaultValue={user.role}
                              onChange={(e) => setSelectedRole(e.target.value)}
                            >
                              <option value="1">Administrador</option>
                              <option value="4">C-level</option>
                              <option value="2">Gerente</option>
                              <option value="3">Desenvolvedor</option>
                            </select>
                          </div>
                        </td>
                        <td className="admin-td">
                          <button className="admin-button" onClick={() => handleAtualizar(user.id)}>Atualizar</button>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <Divider />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
