

const Login = () => {
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
                <form action="post">

                    <div className="login-form-container">
                        <p>Login</p>
                    </div>

                    <input type="text" name="login" id="login" placeholder="Login"/>

                    <div className="login-form-container">
                        <p>Senha</p>
                    </div>

                    <input type="text" name="senha" id="senha" placeholder="Senha"/>
                    <div className="login-form-recuperar">
                        Esqueceu sua senha?
                    </div>
                    <button type="submit">Entrar</button>

                </form>
                <div className="login-criar-conta">
                    Não possui acesso? <a href="">Criar conta</a>
                </div>
            </div>
        </div>
    );
};

export default Login;