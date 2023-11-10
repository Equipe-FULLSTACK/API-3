import { useRef, useState } from "react";
import { DataProcess } from "../Components/Process/Process";
import '../static/css/cadastro.css';
import emailjs from '@emailjs/browser';

interface CadastroProps {
    setDataProcess: React.Dispatch<React.SetStateAction<DataProcess[]>>;
}

export function Cadastro({ setDataProcess }: CadastroProps) {
    const form = useRef<HTMLFormElement>(null);
    const [authString, setAuthString] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        sendEmail();
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    function handleModalSubmit() {
        
        if (authString === 'gfs5f') {
            closeModal();
        } else {
            alert('Autenticação inválida');
        }
    }

    function sendEmail() {
        if (form.current){
            emailjs.sendForm('service_rm2otvc', 'template_o19yk8l', form.current, 'uTQ5qjDTE9qEl_Ekt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    }

    return (
        <div className="cadastro-containerC" id="fundo">
            <div className="cadastro-imagemC">
                <img src="/./icons/logo_ionic_health.png" alt="" />
            </div>
            <div className="cadastro-formC">
                <div className="cadastro-header-mainC">
                    Cadastro de usuário
                </div>
                <div className="cadastro-header-secondC">
                    Crie sua conta e aproveite nossos serviços
                </div>
                <form ref={form} className="cadastro-form-containerC" action="http://127.0.0.1:3000/register" method="post">

                    <div className="cadastro-form-containerC">
                        <p>Nome de usuário</p>
                    </div>

                    <input className="cadastro-input" type="text" name="to_name" id="login" placeholder="Nome" />


                    <div className="cadastro-form-containerC">
                        <p>Digite um Apelido</p>
                    </div>

                    <input className="cadastro-inputC" type="text" name="apelido" id="apelido" placeholder="Apelido" />


                    <div className="cadastro-form-containerC">
                        <p>Digite seu E-mail</p>
                    </div>

                    <input className="cadastro-input" type="text" name="to_email" id="email" placeholder="E-mail" />


                    <div className="cadastro-form-containerC">
                        <p>Senha</p>
                    </div>

                    <input type="password" name="senha" id="senha" placeholder="Senha" />

                    <div className="cadastro-form-containerC">
                        <p>Digite seu Telefone</p>
                    </div>

                    <input type="tel" name="tel" id="tel" placeholder="Telefone" />

                    <button type="button" onClick={openModal}>Cadastrar</button>

                </form>
                <div className="cadastro-criar-contaC">
                    Já possui uma conta? <a href="http://localhost:5173/">Entrar</a>
                </div>
            </div>

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <input
                            type="text"
                            onChange={(e) => setAuthString(e.target.value)}
                            value={authString}
                            placeholder="Digite a autenticação"
                        />
                        <button onClick={handleModalSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    )
}

