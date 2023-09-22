
function MyApp() {
    return(
<div id="teste">

    <header classnamename="grid-header">
        <figure>
            <img src="assets/img/icons/icon_ionicHealth.png" alt="iconIonicHealth"/>
        </figure>
        <nav>
            <span>
                <h3 classnamename="user-name">
                    João Santos da Silva
                </h3>
            </span>
        </nav>
    </header>
    {/* comeca aqui */}
     
     <div className="sidebarteste">
        <a href="#"><img src="/assets/img/icons/icon_menu.png" alt="menu" className="icon"></img></a>
        <a href="#"><img src="/assets/img/icons/icon_lock.png" alt="lock" className="icon"></img></a>
        <a href="#"><img src="/assets/img/icons/icon_detail.png" alt="detail" className="icon"></img></a>
        <a href="#"><img src="/assets/img/icons/icon_notification.png" alt="notification" className="icon"></img></a>
        <a href="#"><img src="/assets/img/icons/icon_graph.png" alt="graph" className="icon"></img></a>
     </div>

    {/* <aside classnamename="grid-aside">
        <nav>
            <ul className="nav-sidebar">
                <li><a href="#"><img src="/assets/img/icons/icon_menu.png" alt="menu" className="icon"/></a></li>
                <li><a href="#"><img src="/assets/img/icons/icon_lock.png" alt="lock" className="icon"/>Permissões</a></li>
                <li><a href="#"><img src="/assets/img/icons/icon_detail.png" alt="detail" className="icon"/>Editar Ordem</a></li>
                <li><a href="#"><img src="/assets/img/icons/icon_notification.png" alt="notification" className="icon"/>Notificações</a></li>
                <li><a href="#"><img src="/assets/img/icons/icon_graph.png" alt="graph" className="icon"/>Gráficos</a></li>
            </ul>
        </nav>
    </aside> */}

    <main className="grid-main">
        <header>
            <span>
                <h4 className="process-active">Processos Ativos</h4>
            </span>

            <button type="button" className="btn-newProcess" data-bs-toggle="button" aria-pressed="false"
                autoComplete="off">Novo Processo</button>

            <div className="search-box">
                <button className="btn-search"><i className="fas fa-search"></i></button>
                <input type="text" className="input-search" placeholder="Pesquisar"/>
            </div>
        </header>

        <section>
            <ol>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>
                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>

                <li className="card">
                    <div className="card-header">
                        <span className="process-name">Processo 01</span>
                        <span className="process-status">Atrasado</span>
                    </div>

                    <div className="card_subtitle">
                        <span className="process-date">12 de Setembro, 2023</span>
                        <span className="process-hour">23:00</span>
                    </div>

                    <div className="card_body">
                        <span className="card_percent">60%</span>
                        <ol className="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autoComplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>

            </ol>



        </section>
    </main>

    <footer className="grid-footer"></footer>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>



  <script src="/assets/js/acordeon.js"></script>
    <script src="/assets/js/api.js"></script>
    <script src="/assets/js/main.js"></script> 

</div>
    )
}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
