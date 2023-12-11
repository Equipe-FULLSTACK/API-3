// ModalComponent.tsx
//PROCESSO DE UTILIZAÇÃO DO STORE THUNK
import { useSelector } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import React, { useState, useEffect } from 'react';
import { RootState } from '../../../store/configureStore';
import { ProcessToRedux } from '../../Data/process/types/processTypes';
import { TaskToRedux } from '../../Data/tasks/types/taskTypes';

import { fetchTasks, createTask, updateTask, deleteTask } from '../../Data/tasks/actions/taskActions';
import { fetchProcesses, createProcess, updateProcess, deleteProcess } from '../../Data/process/actions/processActions';

import { useDispatch } from 'react-redux';



import './style.css'
import addIcon from '../../../assets/icons/icon_add.png'
import edit from '../../../assets/icons/icon_edit.png'
import trash from '../../../assets/icons/icon_trash.png'
import date from '../../../assets/icons/icon_calendar.png'
import hour from '../../../assets/icons/icon_hour.png'
import save from '../../../assets/icons/icon_save.png'
import attach from '../../../assets/icons/attach.png'
import ModalAttachment from '../ModalAttachment/ModalAttachment';


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
    taskName: string;
    taskDescription: string;
    taskDate: string;
    taskStatus: string;
    taskPercent: number;
    taskActive: number;
}


const ModalProcess: React.FC<dataProcessModal> = () => {

    //const dispatch = useDispatch();
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();

    /// CARREGA DO STORE ESTADO ATUAL DOS DADOS
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const process = useSelector((state: RootState) => state.processes.processes);
    const processModalId = useSelector((state: RootState) => state.modal.processId);


    /// CARREGA VARIAVEL AUXILIAR MANIPULACAO NO COMPONENTE
    const [dataProcess, setDataProcess] = useState<ProcessToRedux[]>(useSelector((state: RootState) => state.processes.processes));
    const [dataTasks, setDataTasks] = useState<TaskToRedux[]>(useSelector((state: RootState) => state.tasks.tasks));

    /// MANIPULACAO ANEXOS MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);

    /// ALIMENTA VARIAVEL AUXILIAR
    useEffect(() => {
        setDataProcess(process)
        setDataTasks(tasks)
    }, [process, tasks]);

    /* console.log('Modal aberto com id ', processModalId )
    console.log('dataProcess', dataProcess);
    console.log('dataTasks', dataTasks); */



    const [tasksFiltradas, setTasksFiltradas] = useState<TaskToRedux[]>(useSelector((state: RootState) => state.tasks.tasks));


    // PROCESSO DE ATUALIZAÇÃO DINAMICA DA PÁGINA QUANDO HÁ ALTERAÇÃO EM TEMPO REAL. 
    useEffect(() => {
        const filteredTasks = dataTasks.filter((task) => task.process === processModalId);
        setTasksFiltradas(filteredTasks);
    }, [processModalId, dataTasks]);





    const processName = process
        .filter((f) => f.id === processModalId)
        .map((n) => n.name);

    const processHour = process
        .filter((f) => f.id === processModalId)
        .map((n) => n.deadline);

    const taskTotal = tasksFiltradas.length;


    // VERIFICA SE EXISTE ALGUMA TAREFA ATRASADA
    const taskAtrasada = tasksFiltradas.filter((f) => f.status === 'Atrasada');

    // VERIFICA SE EXISTE ALGUMA TAREFA EM ANDAMENTO
    const taskAndamento = tasksFiltradas.filter((f) => f.status === 'Em andamento');

    // ANIMAÇÃO DOS ESTILOS BASEADOS NOS STATUS.
    const dataProcessStatus = dataProcess
        .filter((f) => f.id === processModalId)
        .map((f) => f.status)[0]; // Acesso ao primeiro elemento do array

    let statusProcess;


    if (dataProcessStatus === 'Atrasada') {
        statusProcess = 'Atrasada';
    } else if (dataProcessStatus === 'Andamento') {
        statusProcess = 'Andamento';
    } else if (dataProcessStatus === 'Pendente') {
        statusProcess = 'Pendente';
    } else {
        statusProcess = 'Concluida';
    }

    /*   console.log(statusProcess) */

    ////////////////////////////////////// MANIPULAÇÃO DAS EDIÇÕES EM TEMPO REAL DAS TASKS //////////////////////////////////////////////////////////


    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [editedDescriptions, setEditedDescriptions] = useState<Record<number, string>>({});
    const [editedDate, setEditedDate] = useState<Record<number, string>>({});
    const [editedPercent, setEditedPercent] = useState<Record<number, string>>({});
    const [editedStatus, setEditedStatus] = useState<Record<number, string>>({});

    const startEditing = (taskId: number) => {
        setEditTaskId(taskId);
        // Defina o valor do input para a descrição atual ao iniciar a edição
        setEditedDescriptions((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.id === taskId)?.description || '' }));
        setEditedDate((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.id === taskId)?.created || '' }));
        setEditedPercent((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.id === taskId)?.active.toString() || '' }));
        setEditedStatus((prev) => ({ ...prev, [taskId]: tasksFiltradas.find((task) => task.id === taskId)?.status || '' }));

    };

    const stopEditing = () => {
        setEditTaskId(null);
    };


    // ESTRUTURAÇÃO PARA DESPACHO DA EDIÇÃO DAS TASKS PARA O BACKEND
    const editTask = (taskId: number, editedTaskFields: TaskToRedux) => {

        dispatch(updateTask(taskId, editedTaskFields));
        /* console.log(taskId, editedTaskFields); */
        stopEditing(); // Sai do modo de edição
    };


    // ESTRUTURAÇÃO PARA DESPACHO DA EDIÇÃO DAS TASKS PARA O BACKEND
    const localDeleteTask = (taskId: number) => {

        dispatch(deleteTask(taskId));

        stopEditing();
    };




    const addNewTask = (newTaskData: TaskToRedux) => {

        newTaskData.process = processModalId;
        newTaskData.active = 1;
        newTaskData.name = '';
        newTaskData.description = '';
        newTaskData.deadline = '';
        newTaskData.status = 'Pendente';

        console.log('ModalProcess - addNewTask ', newTaskData);

        dispatch(createTask(newTaskData));

        stopEditing();
    };


    /* 
        const addNewTask = () => {
    
            const createdTaskLocal(task: TaskToRedux)
    
    
            dispatch(createTask(editedTaskFields: TaskToRedux)
    
            const newTask: TaskToRedux = {
                id: tasks.length + 1,
                process: processModalId, //
                name: '',
                description: '',
                created: '',
                status: 'Em Andamento',
                deadline: '',
                active: 1, 
            }; 
    
            // Disparar a ação ADD_TASK usando dispatch
            dispatch({ type: 'ADD_TASK', payload: newTask });
    
            // Restante do seu código para atualizar localmente as tasksFiltradas, se necessário
            const updatedTasks = [...tasksFiltradas, newTask];
            setTasksFiltradas(updatedTasks);
    
    
        };
    */
    const [selectedFiles, setSelectedFiles] = useState<Record<number, File | null>>({});


    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, taskId: number) => {
        const fileInput = event.target; // O elemento <input type="file> que acionou o evento
        const selectedFile = fileInput.files ? fileInput.files[0] : null; // O arquivo selecionado pelo usuário

        if (selectedFile) {
            setSelectedFiles((prev) => ({ ...prev, [taskId]: selectedFile }));


            const formData = new FormData();
            formData.append('file', selectedFile);
            fileInput.value = '';

            fetch('/seu-endpoint-de-upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Arquivo enviado com sucesso:', data);

                })
                .catch(error => {
                    console.error('Erro ao enviar o arquivo:', error);
                });

            fileInput.value = '';
        }
    }




    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                            <th>Ativa</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasksFiltradas.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>
                                    {editTaskId === task.id ? (
                                        <>
                                            <input
                                                type="date"
                                                value={editedDate[task.id] || ''}
                                                onChange={(e) => {
                                                    const newEditedDate = { ...editedDate, [task.id]: e.target.value };
                                                    setEditedDate(newEditedDate);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.created}

                                        </>
                                    )}

                                </td>
                                <td>
                                    {editTaskId === task.id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedDescriptions[task.id] || ''}
                                                onChange={(e) => {
                                                    const newEditedDescriptions = { ...editedDescriptions, [task.id]: e.target.value };
                                                    setEditedDescriptions(newEditedDescriptions);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.description}

                                        </>
                                    )}


                                </td>

                                <td>
                                    {editTaskId === task.id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedPercent[task.id] || ''}
                                                onChange={(e) => {
                                                    const newEditedPercent = { ...editedPercent, [task.id]: e.target.value };
                                                    setEditedPercent(newEditedPercent);
                                                }}
                                            />

                                        </>
                                    ) : (
                                        <>
                                            {task.active}
                                        </>
                                    )}

                                </td>

                                <td>

                                    {editTaskId === task.id ? (
                                        <>
                                            <select
                                                value={editedStatus[task.id] || ''}
                                                onChange={(e) => {
                                                    const newEditedStatus = { ...editedStatus, [task.id]: e.target.value };
                                                    setEditedStatus(newEditedStatus);
                                                }}
                                            >
                                                <option className={'Pendente'} value="Pendente">Pendente</option>
                                                <option className={'Atrasada'} value="Atrasada">Atrasada</option>
                                                <option className={'Concluida'} value="Concluida">Completada</option>
                                                <option className={'Andamento'} value="Andamento">Andamento</option>
                                            </select>

                                        </>
                                    ) : (
                                        <>
                                            <span className={task.status}></span>
                                        </>
                                    )}
                                </td>


                                <div className="task-tools">
                                    <div className="tools">
                                        <ul>
                                            <li>
                                                {editTaskId === task.id ? (
                                                    <button onClick={() => {
                                                        const editedTaskFields: TaskToRedux = {
                                                            id: task.id,
                                                            process: task.process,
                                                            active: parseInt(editedPercent[task.id]) || task.active,
                                                            status: editedStatus[task.id] || task.status,
                                                            name: task.name,
                                                            created: editedDate[task.id] || task.created,
                                                            deadline: task.deadline,
                                                            description: editedDescriptions[task.id] || task.description,
                                                        };

                                                        editTask(task.id, editedTaskFields);
                                                    }}>
                                                        <i className="material-icons"><img src={save} alt="Save Task" /></i>
                                                    </button>
                                                ) : (
                                                    <button onClick={() => startEditing(task.id)}><i className="material-icons"><img src={edit} alt="Edit Task" /></i></button>
                                                )}
                                            </li>
                                            <li>
                                                {editTaskId === task.id ? (
                                                    ('')
                                                ) : (
                                                    <button>
                                                        <label htmlFor={`file-input-${task.id}`} className="file-label">
                                                            <i className="material-icons"><img src={attach} alt="Attach File" /></i>
                                                            <input
                                                                type="file"
                                                                id={`file-input-${task.id}`}
                                                                style={{ display: 'none' }}
                                                                onChange={(e) => handleFileUpload(e, task.id)}
                                                            />
                                                        </label>
                                                    </button>
                                                    
                                                    /* <div>
                                                        <button onClick={handleOpenModal}>
                                                            <i className="material-icons"><img src={attach} alt="Attach File" /></i>
                                                        </button>

                                                        <ModalAttachment
                                                            isOpen={isModalOpen}
                                                            handleClose={handleCloseModal}
                                                            idNumber={task.id}
                                                        />
                                                    </div>*/

                                                )}

                                                {selectedFiles[task.id] ? (
                                                    <a href={URL.createObjectURL(selectedFiles[task.id]!)} target="_blank">
                                                        Visualizar Arquivo
                                                    </a>
                                                ) : null}
                                            </li>


                                            <li>
                                                {editTaskId === task.id ? (
                                                    ('')
                                                ) :
                                                    <button onClick={() => localDeleteTask(task.id)}>
                                                        <i className="material-icons"><img src={trash} alt="Delete Task" /></i>
                                                    </button>
                                                }
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
