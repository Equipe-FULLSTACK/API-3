import { useState } from "react";
import { DataProcess } from "../Process/Process"



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
        e.preventDefault()
        console.log(formData)
        const newProcess: DataProcess = {
            processId: 1000,
            processName: formData?.name,
            processDateFinshed: formData?.dateFinished,
            processHourFinshed: formData?.hourFinished,
            processPercentExecuted: 0,
            processStatus: "Aberto"
        }
        setDataProcess(prev => [newProcess, ...prev])
        setShowModal(false)
    }

    return (
        <div className="modal">
            <form onSubmit={(e) => handleSubmit(e)}>
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
                <button type="button" onClick={()=> setShowModal(false)}>Close</button>
            </form>
        </div>

    )
}