import { DataProcess } from "../Components/Process/Process"

interface CadastroProps {
    setDataProcess: React.Dispatch<React.SetStateAction<DataProcess[]>>
}

export function Cadastro({setDataProcess}: CadastroProps) {
    
    function handleClick(){
        console.log('teste')
        const newProcess: DataProcess = {
            processId: 1000,
            processName
        }
        setDataProcess(prev => [...prev])
    }
    
    return (
        <div>
        <form>
        <h1>Cadastro de usuário</h1>
            <p>Aqui fica uma breve apresentação da página</p>
            <div>userName</div>
            <input type="text" name="userName"/>
            <div>userTag</div>
            <input type="text"/>
            <div>userEmail</div>
            <input type="text"/>
            <div>Digite uma senha</div>
            <input type="text"/>          
            <button onClick={handleClick}>Cadastrar</button>
        </form>
        </div>
      
    )
}