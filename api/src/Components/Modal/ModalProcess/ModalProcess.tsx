// ModalComponent.tsx
import React from 'react';
import './style.css'

const ModalProcess: React.FC = () => {
  return (
    
    <>
        <div className="datatable-container">
            <header>
                <div className="ProcessModal">
                    <div className="subProcessModal">
                        <h2>Processo 1</h2>
                        <div className="Datahora">
                            <span>11/10/2023</span>
                            <span>19:00</span>
                        </div>
                    </div>
                    <span className="status">Atrasada</span>
                </div>
            </header>

            <div className="header-tools">
                <div className="tools">
                <ul>
                    <li>
                    <button>
                        <i className="material-icons">add_circle</i>
                    </button>
                    </li>
                    <li>
                    <button>
                        <i className="material-icons">edit</i>
                    </button>
                    </li>
                    <li>
                    <button>
                        <i className="material-icons">delete</i>
                    </button>
                    </li>
                </ul>
                </div>

                <div className="search">
                <input type="search" className="search-input" placeholder="Search..." />
                </div>
            </div>


            <table className="datatable">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Tarefa</th>
                        <th>Status</th> 
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>01</td>
                        <td>11/10/2023</td>
                        <td>Criar código html</td>
                        <td><span className="available"></span></td>
                    </tr>

                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>02</td>
                        <td>15/12/2023</td>
                        <td>Criar código CSS</td>
                        <td><span className="away"></span></td>
                    </tr>

                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>03</td>
                        <td>01/02/2024</td>
                        <td>Criar modelamento da página</td>
                        <td><span className="offline"></span></td>
                    </tr>

                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>04</td>
                        <td>15/03/2024</td>
                        <td>Sistematizar páginas no react</td>
                        <td><span className="offline"></span></td>
                    </tr>

                </tbody>
            </table>

            <div className="footer-tools">
                <div className="list-items">
                    Show
                    <select name="n-entries" id="n-entries" className="n-entries">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                    </select>
                    entries
                </div>

                <div className="pages">
                    <ul>
                        <li><span className="active">1</span></li>
                        <li><button>2</button></li>
                        <li><button>3</button></li>
                        <li><button>4</button></li>
                        <li><span>...</span></li>
                        <li><button>9</button></li>
                        <li><button>10</button></li>
                    </ul>
                </div>
            </div>
        </div>

     
    </>
  );
};

export default ModalProcess;
