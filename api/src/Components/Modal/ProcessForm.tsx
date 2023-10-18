import React, { useState, useEffect } from 'react';
import { DataProcess } from "../Process/Process"

import { useSelector } from 'react-redux';
import { AppState } from '../../store/index'; //
import { useDispatch } from 'react-redux';



interface CadastroProps {
    setDataProcess: React.Dispatch<React.SetStateAction<DataProcess[]>>,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

type FormData = {
    name: string,
    dateFinished: string,
    hourFinished: string,
}

export function ProcessForm({ setDataProcess, setShowModal }: CadastroProps) {
    const dispatch = useDispatch();

    // LOAD TASKS
    const process = useSelector((state: AppState) => state.process);
    useEffect(() => {
        if (process) {
           /*  console.log('Process Form UseEffect Process')
            console.log(process); */
        }
    }, [process]);


    const [formData, setFormData] = useState<FormData>({
        name: '',
        dateFinished: '',
        hourFinished: '',
    });

    const [lastProcessId, setLastProcessId] = useState(0); // Inicializado com 1000
    const idLast = Math.max(...process.map(p => p.processId))+1;
    /* console.log(idLast) */

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
      /*   console.log(formData) */


        const newProcess: DataProcess = {
            processId: idLast,
            processName: formData?.name,
            processDateFinshed: formData?.dateFinished,
            processHourFinshed: formData?.hourFinished,
            processPercentExecuted: 0,
            processStatus: 'Andamento',
        }
        // Disparar a ação ADD_TASK usando dispatch
        dispatch({ type: 'ADD_PROCESS', payload: newProcess });


        setDataProcess(prev => [newProcess, ...prev])
        setLastProcessId(prev => prev + 1);
        setShowModal(false)
    }



    return (
        <div className="modal">
            <form onSubmit={(e) => handleSubmit(e)}>
            <button type="button" className="close-button" onClick={()=> setShowModal(false)}>x</button>
                <h1>Novo Processo</h1>
                <div className="modaldiv">Nome</div>
                <input type="text" name="name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange(e)} />
                <div className="modaldiv">Data Final</div>
                <input type="date" name="dateFinished"
                    value={formData?.dateFinished}
                    onChange={handleInputChange} />
                <div className="modaldiv">Hora Final</div>
                <input type="time" name="hourFinished"
                    value={formData?.hourFinished}
                    onChange={handleInputChange} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>

    )
}