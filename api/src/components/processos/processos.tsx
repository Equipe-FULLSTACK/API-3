import React from 'react'

type Props = {}

const Processos = (props: Props) => {
  return (

    <main className="grid-main">
        <header>
            <span>
                <h4 className="process-active">Processos Ativos</h4>
            </span>

            <button type="button" className="btn-newProcess" data-bs-toggle="button" aria-pressed="false"
                autocomplete="off">Novo Processo</button>

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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
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
                        <ol classNameName="card_bargraph">
                            <li className="bargraph-item1"></li>
                            <li className="bargraph-item2"></li>
                            <li className="bargraph-item3"></li>
                        </ol>
                    </div>

                    <div className="card_footer">
                        <button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
                            Detalhe
                        </button>
                        <button type="button" className="btn-help" data-bs-toggle="button" aria-pressed="false"
                            autocomplete="off">
                            Ajuda
                        </button>
                    </div>
                </li>

            </ol>



        </section>
    </main>
  )
}

export default Processos