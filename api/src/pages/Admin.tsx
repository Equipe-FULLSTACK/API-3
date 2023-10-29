import React, { useEffect, useState } from 'react';

import NavBar from '../Components/Navbar/Navbar';
import { Divider } from '../Components/Layout/styles';

export default function Admin() {
    const posicaoID = window.location.href.indexOf("id=");
    const id = window.location.href.substring(posicaoID + 3);
    const [seuJSON, setSeuJSON] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/us?us${id}`)
            .then(response => response.json())
            .then(data => setSeuJSON(data))
            .catch(error => console.error('Erro ao buscar o JSON', error));
    }, []);

    const handleAdminToggle = (userId) => {
        const userToUpdate = seuJSON.find(user => user.id === userId);
        const updatedValue = userToUpdate.admin === 1 ? 0 : 1;
        
        fetch(`http://localhost:3000/atualizarAdmin/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ admin: updatedValue }),
        })
        .then(response => {
            if (response.status === 200) {
                // Atualização bem-sucedida no servidor.
                // Agora atualize o estado no cliente para refletir as alterações.
                const updatedUsers = seuJSON.map(user => {
                    if (user.id === userId) {
                        user.admin = updatedValue;
                    }
                    return user;
                });
                setSeuJSON(updatedUsers);
            }
        })
        .catch(error => console.error('Erro ao atualizar admin:', error));
    };

    const handleActiveToggle = (userActive) => {
        // Implemente a lógica para alternar o status de admin para o usuário com o userId.
        // Você pode enviar uma solicitação ao seu backend para atualizar o status do usuário.
    };

    return (
        
        <>
        <NavBar userName={"Juliano Prado"} pageName={'NavBar'} />
        <Divider />
            <div>
                <div>
                    <h2>Lista de Usuários</h2>
                    <ul>
                    <Divider />
                        {seuJSON.map(user => (
                            <li key={user.id}>
                                
                                <div>
                                    <strong>E-mail:</strong> {user.email}
                                    <strong>Nome:</strong> {user.name}
                                    <label>
                                    <input
                                        type="checkbox"
                                        checked={user.admin}
                                        onChange={() => handleAdminToggle(user.id)}
                                        />
                                        Admin
                                    </label>
                                    <label>
                                    <input
                                        type="checkbox"
                                        checked={user.active}
                                        onChange={() => handleActiveToggle(user.id)}
                                        />
                                        Ativo
                                    </label>
                                </div>
                                <Divider />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}