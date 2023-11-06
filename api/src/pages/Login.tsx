import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

    const [values, setValues] = useState({
        username: '',
        senha: ''
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/login', values)
        .then((res) => {
            if (res.data.Login) {
                navigate('/processos');
            } else {
                alert('Usuário não cadastrado');
            }
            console.log(res);
        })
        .catch((err) => {
            console.error('Erro na solicitação Axios:', err);
            // Adicione tratamento de erros personalizado aqui, se necessário
        });
};
    

    return (

        <div className="login-container" id="fundo">
            <div className="login-imagem">
                <img src="/./icons/logo_ionic_health.png" alt="" />
            </div>
            <div className="login-form">
                <div className="login-header-main">
                    Bem Vindo
                </div>
                <div className="login-header-second">
                    Acesso sistema de gerenciamento de processos e tarefas da empresa
                </div>
                <form className="login-form-container" method='post' onSubmit={handleSubmit}>

                    <div className="login-form-container">
                        <p>Login</p>
                    </div>

                    <input className="login-input" 
                    type="text" 
                    onChange={handleInput}
                    autoComplete='off'
                    name="username" 
                    id="username" 
                    placeholder="Login"/>

                    <div className="login-form-container">
                        <p>Senha</p>
                    </div>

                    <input type="password" 
                    name="senha" 
                    onChange={handleInput}
                    id="senha" 
                    placeholder="Senha"/>

                    <div className="login-form-recuperar">
                        <a className="login-form-recuperar" href="/recuperar_senha">Esqueceu sua senha?</a>
                    </div>
                    <button type="submit">Entrar</button>

                </form>
                <div className="login-criar-conta">
                    Não possui acesso? <a href="/cadastro">Criar conta</a>
                </div>
            </div>
        </div>
    );
}