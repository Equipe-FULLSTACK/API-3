import React, { useState } from 'react';
import dataProcess from './dataProcess';

interface Process {
  processId: number;
  processName: string;
  processStatus: string;
  processDateFinished: string;
  processHourFinished: string;
  processPercentExecuted: string;
  processTasks: number;
}

const ProcessComponent: React.FC = () => {
  const [processList, setProcessList] = useState<Process[]>(dataProcess);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  const handleCreate = (newProcess: Process) => {
    setProcessList([...processList, newProcess]);
  };

  const handleRead = () => {
    console.log(processList);
  };

  const handleUpdate = (updatedProcess: Process) => {
    const updatedProcesses = processList.map(process => {
      if (process.processId === updatedProcess.processId) {
        return updatedProcess;
      }
      return process;
    });
    setProcessList(updatedProcesses);
  };

  const handleDelete = (processId: number) => {
    const updatedProcesses = processList.filter(process => process.processId !== processId);
    setProcessList(updatedProcesses);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSort = (key: string) => {
    setSortBy(key);
  };

  // Função para ordenar os processos com base na chave de ordenação
  const sortedProcesses = processList.sort((a, b) => {
    if (sortBy && a[sortBy] && b[sortBy]) {
      return a[sortBy].localeCompare(b[sortBy]);
    }
    return 0;
  });

  // Aplicar filtro de busca aos processos
  const filteredProcesses = sortedProcesses.filter(process =>
    process.processName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Restante do seu componente aqui */}
    </div>
  );
};

export default ProcessComponent;
