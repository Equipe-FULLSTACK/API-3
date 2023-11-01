import { DataProcess } from "../Components/Process/Process"
import '../static/css/cadastro.css'

interface CadastroProps {
    setDataProcess: React.Dispatch<React.SetStateAction<DataProcess[]>>
}

export function Cadastro({setDataProcess}: CadastroProps) {
    
    function handleClick(){
        console.log('teste')
        const newProcess: DataProcess = {
            processId: 1000,
            processName
        }
        setDataProcess(prev => [...prev])
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
            <form className="cadastro-form-containerC" action="http://127.0.0.1:3000/register" method="post">

            <div className="cadastro-form-containerC">
                    <p>Nome de usuário</p>
                </div>

                <input className="cadastro-input" type="text" name="login" id="login" placeholder="Nome"/> 


            <div className="cadastro-form-containerC">
                    <p>Digite um Apelido</p>
                </div>

                <input className="cadastro-inputC" type="text" name="apelido" id="apelido" placeholder="Apelido"/>


                <div className="cadastro-form-containerC">
                    <p>Digite seu E-mail</p>
                </div>

                <input className="cadastro-input" type="text" name="email" id="email" placeholder="E-mail"/>


                <div className="cadastro-form-containerC">
                    <p>Senha</p>
                </div>

                <input type="password" name="senha" id="senha" placeholder="Senha"/>

                <div className="cadastro-form-containerC">
                    <p>Digite seu Telefone</p>
                </div>

                <input type="tel" name="tel" id="tel" placeholder="Telefone"/>

                <button type="submit">Cadastrar</button>

            </form>
            <div className="cadastro-criar-contaC">
                Já possui uma conta? <a href="http://localhost:5173/">Entrar</a>
            </div>
        </div>
    </div>
    )
}