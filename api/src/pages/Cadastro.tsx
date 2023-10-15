export function Cadastro() {
    return (
        <div className="login-containerC" id="fundo">
        <div className="login-imagemC">
            <img src="/./icons/logo_ionic_health.png" alt="" />
        </div>
        <div className="login-formC">
            <div className="login-header-mainC">
                Cadastro de usuário
            </div>
            <div className="login-header-secondC">
                Crie sua conta e aproveite nossos serviços
            </div>
            <form className="login-form-containerC" action="post">

            <div className="login-form-containerC">
                    <p>Nome de usuário</p>
                </div>

                <input className="login-input" type="text" name="login" id="login" placeholder="Nome"/> 


            <div className="login-form-containerC">
                    <p>Digite um Apelido</p>
                </div>

                <input className="login-inputC" type="text" name="apelido" id="apelido" placeholder="Apelido"/>


                <div className="login-form-containerC">
                    <p>Digite seu E-mail</p>
                </div>

                <input className="login-input" type="text" name="email" id="email" placeholder="E-mail"/>


                <div className="login-form-containerC">
                    <p>Senha</p>
                </div>

                <input type="text" name="senha" id="senha" placeholder="Senha"/>


                <button type="submit">Cadastrar</button>

            </form>
            <div className="login-criar-contaC">
                Já possui uma conta? <a href="http://localhost:5173/">Entrar</a>
            </div>
        </div>
    </div>
    )
}