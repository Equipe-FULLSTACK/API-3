import React, { useState, useEffect, useRef } from 'react';
import { DataProcess } from "../Process/Process"

import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { ProcessToRedux } from '../Data/process/types/processTypes';
import { TaskToRedux } from '../Data/tasks/types/taskTypes';

import { useDispatch } from 'react-redux';
import Notificacao from '../../pages/Notificacao';
import emailjs from '@emailjs/browser';



import { fetchTasks, createTask, updateTask, deleteTask } from '../../Data/tasks/actions/taskActions';
import { fetchProcesses, createProcess, updateProcess, deleteProcess } from '../Data/process/actions/processActions';




interface CadastroProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

type FormData = {
    name: string,
    dateFinished: string,
    hourFinished: string,
}

export function ProcessForm({ setShowModal }: CadastroProps) {

    /// CARREGA DO STORE ESTADO ATUAL DOS DADOS
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const process = useSelector((state: RootState) => state.processes.processes);

    /// CARREGA VARIAVEL AUXILIAR MANIPULACAO NO COMPONENTE
    const [dataProcess, setDataProcess] = useState<ProcessToRedux[]>(useSelector((state: RootState) => state.processes.processes));
    const [dataTasks, setDataTasks] = useState<TaskToRedux[]>(useSelector((state: RootState) => state.tasks.tasks));


    /// ALIMENTA VARIAVEL AUXILIAR
    useEffect(() => {
        setDataProcess(process)
        setDataTasks(tasks)
    }, [process, tasks]);

    const dispatch = useDispatch();

    const form = useRef<HTMLFormElement | null>(null);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        dateFinished: '',
        hourFinished: '',
    });


    const addNewProcess = (newProcessData: ProcessToRedux) => {

        newProcessData.active = 1;
        newProcessData.status = 'Pendente';
        newProcessData.name = formData?.name;
        newProcessData.deadline = formData?.dateFinished,
        newProcessData.description = '';

        console.log('ModalProcess - addNewProcess ', newProcessData);
      
        dispatch(createProcess(newProcessData));
        setShowModal(false)

      };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        /*   console.log(formData) */
        
        
        const newProcess: ProcessToRedux = {
            id: dataProcess.length + 1,
            name: formData?.name,
            deadline: formData?.dateFinished,
            active: 1,
            status: 'Pendente',
            description: '',
            created:'',

        }
        addNewProcess(newProcess)

        /* Notificacao( newProcess ) */

    }



    return (
        <div className="modal">
            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                <button type="button" className="close-button" onClick={() => setShowModal(false)}>x</button>
                <h1>Novo Processo</h1>
                <div className="modaldiv">Nome</div>
                <input type="text" name="name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange(e)} />
                <div className="modaldiv">Data Final</div>
                <input type="date" name="dateFinished"
                    value={formData?.dateFinished}
                    onChange={handleInputChange} />
                {/* <div className="modaldiv">Hora Final</div>
                <input type="time" name="hourFinished"
                    value={formData?.hourFinished}
                    onChange={handleInputChange} /> */}
                <button type="submit" onClick={() => { alert('Processo criado!'); }}>Cadastrar</button>
            </form>
        </div>

    )
}