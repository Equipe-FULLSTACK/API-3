import React, { useState } from 'react';

interface CadastroProps {
    setDataProcess: React.Dispatch<React.SetStateAction<DataProcess[]>>,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

type FormData = {
    name: string,
    dateFinished: string,
    hourFinished: string,
}

type DataProcess = {
    processId: number,
    processName: string,
    processDateFinished: string,
    processHourFinished: string,
    processPercentExecuted: number,
    processStatus: string,
};

export function ProcessForm({ setDataProcess, setShowModal }: CadastroProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        dateFinished: '',
        hourFinished: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setDataProcess((prevDataProcess: DataProcess[]) => {
            const maxProcessId = Math.max(...prevDataProcess.map(process => process.processId), 0);

            const newProcess: DataProcess = {
                processId: maxProcessId + 1,
                processName: formData.name,
                processDateFinished: formData.dateFinished,
                processHourFinished: formData.hourFinished,
                processPercentExecuted: 0,
                processStatus: "Aberto"
            };

            return [newProcess, ...prevDataProcess];
        });

        setShowModal(false);
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