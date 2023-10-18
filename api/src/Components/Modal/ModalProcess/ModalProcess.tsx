// ModalComponent.tsx
import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { AppState } from '../../../store/index'; //


import { selectProcessId } from '../../../store/index';



import './style.css'
import addIcon from '../../../assets/icons/icon_add.png'
import edit from '../../../assets/icons/icon_edit.png'
import trash from '../../../assets/icons/icon_trash.png'
import date from '../../../assets/icons/icon_calendar.png'
import hour from '../../../assets/icons/icon_hour.png'
import save from '../../../assets/icons/icon_save.png'



import { dataTask } from '../../Data/DataTask/dataTask'
import { useDispatch } from 'react-redux';

/* import { updateTaskData } from "../../Data/DataTask/dataTask"; /// atualiza as tasks
import { deleteTask } from "../../Data/DataTask/dataTask"; /// deleta as tasks */


import dataProcess from '../../Data/DataProcess/dataProcess'




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
    
    const dispatch = useDispatch();

    // LOAD TASKS
    const tasks = useSelector((state: AppState) => state.tasks);
    useEffect(() => {
        if (tasks) {
            console.log('Modal Process UseEffect tasks')
            console.log(tasks);
        }
    }, [tasks]);




    const processModalId = useSelector(selectProcessId); // VARIAVEL VEM REDUX MAINPULAÇÃO DOS DADOS A NIVEL GLOBAL.
    const [tasksFiltradas, setTasksFiltradas] = useState<Task[]>([]); /// DEFINE ESTADO DAS TASK PARA ALTERAÇÕES DINAMICAS.


    // PROCESSO DE ATUALIZAÇÃO DINAMICA DA PÁGINA QUANDO HÁ ALTERAÇÃO EM TEMPO REAL. 
    useEffect(() => {
        const filteredTasks = tasks.filter((task) => task.taskProcessId === processModalId);
        setTasksFiltradas(filteredTasks);
    }, [processModalId, tasks]);



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

    // ANIMAÇÃO DOS ESTILOS BASEADOS NOS STATUS.
    let statusProcess;

    if (taskAtrasada.length > 0) {
        statusProcess = 'Atrasada';
    } else if (taskAndamento.length > 0) {
        statusProcess = 'Em Andamento';
    } else {
        statusProcess = 'Concluida';
    }


    ////////////////////////////////////// MANIPULAÇÃO DAS EDIÇÕES EM TEMPO REAL DAS TASKS //////////////////////////////////////////////////////////


    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [editedDescriptions, setEditedDescriptions] = useState<Record<number, string>>({});
    const [editedDate, setEditedDate] = useState<Record<number, string>>({});
    const [editedPercent, setEditedPercent] = useState<Record<number, string>>({});
    const [editedStatus, setEditedStatus] = useState<Record<number, string>>({});

    const startEditing = (taskId: number) => {
        setEditTaskId(taskId);
        // Defina o valor do input para a descrição atual ao iniciar a edição
        setEditedDescriptions((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.taskId === taskId)?.taskDescription || '' }));
        setEditedDate((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.taskId === taskId)?.taskDate || '' }));
        setEditedPercent((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.taskId === taskId)?.taskPercent || '' }));
        setEditedStatus((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.taskId === taskId)?.taskStatus || '' }));

    };

    const stopEditing = () => {
        setEditTaskId(null);
    };


  const editTask = (taskId: number, editedTaskFields: Partial<TaskToRedux>) => {
    
    const updateTaskAction = {
      type: 'UPDATE_TASK',
      payload: {
        taskId: taskId,
        ...editedTaskFields,
      },
    };

    // Despache a ação para o Redux
    dispatch(updateTaskAction);
    stopEditing(); // Sai do modo de edição

  };


  const localDeleteTask = (taskId: number) => {
    // Disparar a ação DELETE_TASK usando dispatch
    dispatch({ type: 'DELETE_TASK', payload: { taskId } });
  
    const updatedTasks = tasksFiltradas.filter((task) => task.taskId !== taskId);
    setTasksFiltradas(updatedTasks);
  
    stopEditing();
  };


  const addNewTask = () => {

    const newTask: Task = {
      taskId: tasks.length + 1,
      taskProcessId: processModalId, //
      taskDescription: '',
      taskDate: '',
      taskStatus: 'Em Andamento',
      taskPercent: 0, //
    };
  
    // Disparar a ação ADD_TASK usando dispatch
    dispatch({ type: 'ADD_TASK', payload: newTask });
  
    // Restante do seu código para atualizar localmente as tasksFiltradas, se necessário
    const updatedTasks = [...tasksFiltradas, newTask];
    setTasksFiltradas(updatedTasks);
  
    
  };


    ////////////////////////////////////////////////////////////////////////////////////////////////


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
                                <button onClick={addNewTask}>
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
                                <td>{task.taskId}</td>
                                <td>
                                    {editTaskId === task.taskId ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedDate[task.taskId] || ''}
                                                onChange={(e) => {
                                                    const newEditedDate = { ...editedDate, [task.taskId]: e.target.value };
                                                    setEditedDate(newEditedDate);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.taskDate}

                                        </>
                                    )}

                                </td>
                                <td>
                                    {editTaskId === task.taskId ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedDescriptions[task.taskId] || ''}
                                                onChange={(e) => {
                                                    const newEditedDescriptions = { ...editedDescriptions, [task.taskId]: e.target.value };
                                                    setEditedDescriptions(newEditedDescriptions);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.taskDescription}

                                        </>
                                    )}


                                </td>

                                <td>
                                    {editTaskId === task.taskId ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedPercent[task.taskId] || ''}
                                                onChange={(e) => {
                                                    const newEditedPercent = { ...editedPercent, [task.taskId]: e.target.value };
                                                    setEditedPercent(newEditedPercent);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.taskPercent}
                                        </>
                                    )}

                                </td>

                                <td>

                                    {editTaskId === task.taskId ? (
                                        <>
                                            <select
                                                value={editedStatus[task.taskId] || ''}
                                                onChange={(e) => {
                                                    const newEditedStatus = { ...editedStatus, [task.taskId]: e.target.value };
                                                    setEditedStatus(newEditedStatus);
                                                }}
                                            >
                                                <option value="Atrasada">Atrasada</option>
                                                <option value="Concluida">Completada</option>
                                                <option value="Andamento">Andamento</option>
                                            </select>

                                        </>
                                    ) : (
                                        <>
                                            <span className={task.taskStatus}></span>
                                        </>
                                    )}
                                </td>


                                <div className="task-tools">
                                    <div className="tools">
                                        <ul>
                                            <li>
                                                {editTaskId === task.taskId ? (
                                                    <button onClick={() => {
                                                        const editedTaskFields = {
                                                            taskDate: editedDate[task.taskId] || task.taskDate,
                                                            taskDescription: editedDescriptions[task.taskId] || task.taskDescription,
                                                            taskPercent: editedPercent[task.taskId] || task.taskPercent,
                                                            taskStatus: editedStatus[task.taskId] || task.taskStatus,
                                                        };

                                                        editTask(task.taskId, editedTaskFields);
                                                    }}>
                                                        <i className="material-icons"><img src={save} alt="Save Task" /></i>
                                                    </button>
                                                ) : (
                                                    <button onClick={() => startEditing(task.taskId)}><i className="material-icons"><img src={edit} alt="Edit Task" /></i></button>
                                                )}
                                            </li>
                                            <li>
                                                {editTaskId === task.taskId ? (
                                                    ('')
                                                ) :
                                                    <button onClick={() => localDeleteTask(task.taskId)}>
                                                        <i className="material-icons"><img src={trash} alt="Delete Task" /></i>
                                                    </button>}
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <td>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table >

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
            </div >


        </>
    );
};

export default ModalProcess;
