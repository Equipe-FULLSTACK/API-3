
type Props = {};

const Processos = (props: Props) => {
  return (
    <>
      {/* Navbar */}
      
      <header className="grid-header">
        <figure>
          <img src="/icons/icon_ionicHealth.png" alt="iconIonicHealth" />
        </figure>
        <nav>
          <span>
            <h3 className="user-name">João Santos da Silva</h3>
          </span>
        </nav>
      </header>

      {/* Sidebar */}

      <aside className="grid-aside">
        <nav>
          <ul className="nav-sidebar">
            <li>
              <a href="#">
                <img src="/icons/icon_menu.png" alt="menu" className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/icon_lock.png" alt="lock" className="icon" />
                Permissões
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/icons/icon_detail.png"
                  alt="detail"
                  className="icon"
                />
                Editar Ordem
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/icons/icon_notification.png"
                  alt="notification"
                  className="icon"
                />
                Notificações
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icons/icon_graph.png" alt="graph" className="icon" />
                Gráficos
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Cards de Processos */}

      <main className="grid-main">
        <header>
          <span>
            <h4 className="process-active">Processos Ativos</h4>
          </span>

          <button
            type="button"
            className="btn-newProcess"
            data-bs-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            Novo Processo
          </button>

          <div className="search-box">
            <button className="btn-search">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Pesquisar"
            />
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
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
                <button
                  type="button"
                  className="btn-detail"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Detalhe
                </button>
                <button
                  type="button"
                  className="btn-help"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Ajuda
                </button>
              </div>
            </li>
          </ol>
        </section>
      </main>

      {/* Footer */}

      <footer className="grid-footer"></footer>
  </>
  );
};

export default Processos;
