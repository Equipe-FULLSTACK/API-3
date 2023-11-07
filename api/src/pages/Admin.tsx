import React, { useEffect, useState } from "react";

import NavBar from "../Components/Navbar/Navbar";
import { Divider } from "../Components/Layout/styles";

export default function Admin() {
  const posicaoID = window.location.href.indexOf("id=");
  const id = window.location.href.substring(posicaoID + 3);
  const [seuJSON, setSeuJSON] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/us?us${id}`)
      .then((response) => response.json())
      .then((data) => setSeuJSON(data))
      .catch((error) => console.error("Erro ao buscar o JSON", error));
  }, []);

  const handleAdminToggle = (userId) => {
    const userToUpdate = seuJSON.find((user) => user.id === userId);
    const updatedValue = userToUpdate.admin === 1 ? 0 : 1;

    fetch(`http://localhost:3000/atualizarAdmin/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin: updatedValue }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Atualização bem-sucedida no servidor.
          // Agora atualize o estado no cliente para refletir as alterações.
          const updatedUsers = seuJSON.map((user) => {
            if (user.id === userId) {
              user.admin = updatedValue;
            }
            return user;
          });
          setSeuJSON(updatedUsers);
        }
      })
      .catch((error) => console.error("Erro ao atualizar admin:", error));
  };

  const handleActiveToggle = (userActive) => {
    // Implemente a lógica para alternar o status de admin para o usuário com o userId.
    // Você pode enviar uma solicitação ao seu backend para atualizar o status do usuário.
  };

  return (
    <>
      <NavBar userName={"Juliano Prado"} pageName={"NavBar"} />
      
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
                        <th  className="admin-tr">Cargo</th>
                        <th  className="admin-tr">Status</th>
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
                            <label>
                              <span className="admin-text"> Admin</span>
                              <input
                                className="admin-check"
                                type="checkbox"
                                checked={user.admin}
                                onChange={() => handleAdminToggle(user.id)}
                              />
                            </label>
                          </div>
                        </td>
                        <td className="admin-td">
                          <div className="admin-text">
                            <label>
                              <span className="admin-text">Ativo</span>
                              <input
                                className="admin-check"
                                type="checkbox"
                                checked={user.active}
                                onChange={() => handleActiveToggle(user.id)}
                              />
                            </label>
                          </div>
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