import React, { useState } from 'react';
import dataTask from './dataUser';

interface Task {
  taskId: number;
  taskProcessId: number;
  taskDescription: string;
  taskDate: string;
  taskStatus: string;
}

const TaskComponent: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>(dataTask);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  const handleCreate = (newTask: Task) => {
    setTaskList([...taskList, newTask]);
  };

  const handleRead = () => {
    console.log(taskList);
  };

  const handleUpdate = (updatedTask: Task) => {
    const updatedTasks = taskList.map(task => {
      if (task.taskId === updatedTask.taskId) {
        return updatedTask;
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const handleDelete = (taskId: number) => {
    const updatedTasks = taskList.filter(task => task.taskId !== taskId);
    setTaskList(updatedTasks);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSort = (key: string) => {
    setSortBy(key);
  };

  // Função para ordenar as tarefas com base na chave de ordenação
  const sortedTasks = taskList.sort((a, b) => {
    if (sortBy && a[sortBy] && b[sortBy]) {
      return a[sortBy].localeCompare(b[sortBy]);
    }
    return 0;
  });

  // Aplicar filtro de busca às tarefas
  const filteredTasks = sortedTasks.filter(task =>
    task.taskDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Restante do seu componente aqui */}
    </div>
  );
};

export default TaskComponent;
