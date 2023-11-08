import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { useState } from 'react';

import { ProcessToRedux } from '../Data/process/types/processTypes';
import { TaskToRedux } from '../Data/tasks/types/taskTypes';
import { useDispatch } from 'react-redux';

import './style.css'

const TestComponent: React.FC = () => {

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


  /* console.log('dataProcess', dataProcess);
  console.log('dataTasks', dataTasks); */



  const dispatch = useDispatch();



  return (
    <div className="container">
      <h1>Processos e Tarefas</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Data de Criação</th>
            <th>Prazo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {dataProcess.map((processo) => (
            <React.Fragment key={processo.id}>
              <tr className="process-row">
                <td colSpan={6}>
                  <strong>ID:</strong> {processo.id}<br />
                  <strong>Nome:</strong> {processo.name}<br />
                  <strong>Status:</strong> {processo.status}<br />
                  <strong>Data de Criação:</strong> {processo.created}<br />
                  <strong>Prazo:</strong> {processo.deadline}<br />
                  <strong>Descrição:</strong> {processo.description}
                </td>
              </tr>
              {dataTasks.map((tarefa) => {
                if (tarefa.process === processo.id) {
                  return (
                    <tr className="task-row" key={tarefa.id}>
                      <td>{tarefa.id}</td>
                      <td>{tarefa.name}</td>
                      <td>{tarefa.status}</td>
                      <td>{tarefa.created}</td>
                      <td>{tarefa.deadline}</td>
                      <td>{tarefa.description}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestComponent;
