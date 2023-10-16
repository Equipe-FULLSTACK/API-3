// ModalComponent.tsx
import React from 'react';

import { selectProcessId } from '../../../store/index';
import { useSelector } from 'react-redux';

import './style.css'
import addIcon from '../../../assets/icons/icon_add.png'
import edit from '../../../assets/icons/icon_edit.png'
import trash from '../../../assets/icons/icon_trash.png'
import date from '../../../assets/icons/icon_calendar.png'
import hour from '../../../assets/icons/icon_hour.png'

import dataTask from '../../Data/DataTask/dataTask'
import editTask from '../../Data/DataTask/editTask'

import dataProcess from '../../Data/DataProcess/dataProcess'
import editProcess from '../../Data/DataProcess/editProcess'



interface dataProcessModal {

    processId: number;
    processName: string;
    processStatus: string;
    processDate: string;
    processHour: string;
    
    processBarBackground: string;
    processBarFill: string;
  
    taskId: number;
    taskProcessId: number;
    taskDescription: string;
    taskDate: string;
    taskStatus: string;
    taskPercent: number;
  }


const ModalProcess: React.FC<dataProcessModal> = () => {

    const processModalId = useSelector(selectProcessId);
   /*  console.log('Aberto modal o processo que vem via redux ' + processModalId) */


    const tasksFiltradas = dataTask.filter((task) => task.taskProcessId === processModalId);

    const processName = dataProcess
    .filter((f) => f.processId === processModalId)
    .map((n) => n.processName);

    const processHour = dataProcess
    .filter((f) => f.processId === processModalId)
    .map((n) => n.processHourFinshed);

    const taskTotal = tasksFiltradas.length;


    // VERIFICA SE EXISTE ALGUMA TAREFA ATRASADA
    const taskAtrasada = tasksFiltradas.filter((f) => f.taskStatus === 'Atrasada');

    // VERIFICA SE EXISTE ALGUMA TAREFA EM ANDAMENTO
    const taskAndamento = tasksFiltradas.filter((f) => f.taskStatus === 'Andamento');

    let statusProcess;

    if (taskAtrasada.length > 0) {
        statusProcess = 'Atrasada';
    } else if (taskAndamento.length > 0) {
        statusProcess = 'Em Andamento';
    } else {
        statusProcess = 'Concluida';
    }

    

  return (
    
    <>
        <div className="datatable-container">
            <header>
                <div className="ProcessModal">
                    <div className="subProcessModal">
                        <h2>Processo {processModalId} - {processName} ( {taskTotal} )</h2>
                        <div className="Datahora">
                            <span><img src={date} alt="dateProcess" />11/10/2023</span>
                            <span><img src={hour} alt="dateHour" />{processHour}</span>
                        </div>
                    </div>
                    <span className={statusProcess}>{statusProcess}</span>
                </div>
            </header>

            <div className="header-tools">
                <div className="tools">
                <ul>
                    <li>
                        <button>
                            <a className="material-icons"><img src={addIcon} alt="Add Task" />Adicionar nova tarefa</a>
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
                        {/* <th><input type="checkbox" /></th> */}
                        <th>Id</th>
                        <th>Data</th>
                        <th>Tarefa</th>
                        <th>Percentual</th>
                        <th>Status</th> 
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                {tasksFiltradas.map((task) => (
                    <tr key={task.taskId}>
                        {/* <td><input type="checkbox" /></td> */}
                        <td>{task.taskId}</td>
                        <td>{task.taskDate}</td>
                        <td>{task.taskDescription}</td>
                        <td>{task.taskPercent}%</td>
                        <td><span className={task.taskStatus}></span></td>
                        <div className="task-tools">

                            <div className="tools">
                                <ul>
                                    <li>
                                        <button>
                                            <i className="material-icons"><img src={edit} alt="Edit Task" /></i>
                                        </button>
                                    </li>
                                    <li>
                                    <button>
                                        <i className="material-icons"><img src={trash} alt="Edit Task" /></i>
                                    </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </tr>
                ))}

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
