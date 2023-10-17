export interface Task {
  taskId: number;
  taskProcessId: number;
  taskDescription: string;
  taskDate: string;
  taskStatus: string;
  taskPercent: number;
}

export const dataTask: Task[] = [
  // Tarefas para Produção de Polímeros (processId: 67)
  {
    "taskId": 1,
    "taskProcessId": 67,
    "taskDescription": "Criar molde para Produção de Polímeros",
    "taskDate": "3/8/24",
    "taskStatus": "Atrasada",
    "taskPercent": 86
  },
  {
    "taskId": 2,
    "taskProcessId": 67,
    "taskDescription": "Testar material para Produção de Polímeros",
    "taskDate": "28/7/24",
    "taskStatus": "Concluida",
    "taskPercent": 61
  },
  {
    "taskId": 3,
    "taskProcessId": 67,
    "taskDescription": "Injetar plástico para Produção de Polímeros",
    "taskDate": "12/11/24",
    "taskStatus": "Andamento",
    "taskPercent": 34
  },
  {
    "taskId": 4,
    "taskProcessId": 67,
    "taskDescription": "Resfriar peças para Produção de Polímeros",
    "taskDate": "9/9/24",
    "taskStatus": "Atrasada",
    "taskPercent": 17
  },
  {
    "taskId": 5,
    "taskProcessId": 67,
    "taskDescription": "Empacotar produtos para Produção de Polímeros",
    "taskDate": "8/7/24",
    "taskStatus": "Andamento",
    "taskPercent": 43
  },
  // Tarefas para Montagem de Motores (processId: 42)
  {
    "taskId": 6,
    "taskProcessId": 42,
    "taskDescription": "Montar motor para Montagem de Motores",
    "taskDate": "6/7/24",
    "taskStatus": "Andamento",
    "taskPercent": 67
  },
  {
    "taskId": 7,
    "taskProcessId": 42,
    "taskDescription": "Testar sistemas elétricos para Montagem de Motores",
    "taskDate": "27/9/24",
    "taskStatus": "Atrasada",
    "taskPercent": 14
  },
  {
    "taskId": 8,
    "taskProcessId": 42,
    "taskDescription": "Calibrar motores para Montagem de Motores",
    "taskDate": "15/12/24",
    "taskStatus": "Concluida",
    "taskPercent": 39
  },
  {
    "taskId": 9,
    "taskProcessId": 42,
    "taskDescription": "Realizar testes de desempenho para Montagem de Motores",
    "taskDate": "7/2/24",
    "taskStatus": "Atrasada",
    "taskPercent": 62
  },
  // Tarefas para Fundição de Metais (processId: 93)
  {
    "taskId": 10,
    "taskProcessId": 93,
    "taskDescription": "Injetar metal para Fundição de Metais",
    "taskDate": "14/5/24",
    "taskStatus": "Atrasada",
    "taskPercent": 75
  },
  {
    "taskId": 11,
    "taskProcessId": 93,
    "taskDescription": "Fundir metal para Fundição de Metais",
    "taskDate": "5/8/24",
    "taskStatus": "Concluida",
    "taskPercent": 88
  },
  // Tarefas para Fabricação de Componentes Eletrônicos (processId: 81)
  {
    "taskId": 12,
    "taskProcessId": 81,
    "taskDescription": "Fabricar circuitos para Fabricação de Componentes Eletrônicos",
    "taskDate": "22/8/24",
    "taskStatus": "Concluida",
    "taskPercent": 92
  },
  {
    "taskId": 13,
    "taskProcessId": 81,
    "taskDescription": "Testar componentes para Fabricação de Componentes Eletrônicos",
    "taskDate": "11/11/24",
    "taskStatus": "Andamento",
    "taskPercent": 47
  },

  // Tarefas para Tratamento Térmico (processId: 56)
  {
    "taskId": 14,
    "taskProcessId": 56,
    "taskDescription": "Preparar peças para Tratamento Térmico",
    "taskDate": "2/12/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 15,
    "taskProcessId": 56,
    "taskDescription": "Aquecer peças para Tratamento Térmico",
    "taskDate": "18/1/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 16,
    "taskProcessId": 56,
    "taskDescription": "Resfriar peças para Tratamento Térmico",
    "taskDate": "5/3/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 17,
    "taskProcessId": 56,
    "taskDescription": "Realizar inspeção pós-tratamento térmico",
    "taskDate": "20/4/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },

  // Tarefas para Montagem de Equipamentos Industriais (processId: 11)
  {
    "taskId": 18,
    "taskProcessId": 11,
    "taskDescription": "Montar estrutura para Equipamentos Industriais",
    "taskDate": "10/7/24",
    "taskStatus": "Andamento",
    "taskPercent": 60
  },
  {
    "taskId": 19,
    "taskProcessId": 11,
    "taskDescription": "Instalar componentes elétricos para Equipamentos Industriais",
    "taskDate": "28/9/24",
    "taskStatus": "Atrasada",
    "taskPercent": 25
  },

  // Tarefas para Calibração de Instrumentos de Medição (processId: 75)
  {
    "taskId": 20,
    "taskProcessId": 75,
    "taskDescription": "Calibrar medidor de pressão para Instrumentos de Medição",
    "taskDate": "15/11/24",
    "taskStatus": "Andamento",
    "taskPercent": 45
  },

  // Tarefas para Soldagem de Estruturas Metálicas (processId: 29)
  {
    "taskId": 21,
    "taskProcessId": 29,
    "taskDescription": "Preparar peças para Soldagem de Estruturas Metálicas",
    "taskDate": "22/1/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 22,
    "taskProcessId": 29,
    "taskDescription": "Realizar soldagem para Estruturas Metálicas",
    "taskDate": "6/3/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },

  // Tarefas para Produção de Plásticos (processId: 19)
  {
    "taskId": 23,
    "taskProcessId": 19,
    "taskDescription": "Preparar material para Produção de Plásticos",
    "taskDate": "12/5/24",
    "taskStatus": "Andamento",
    "taskPercent": 75
  },

  // Tarefas para Montagem de Linhas de Produção (processId: 89)
  {
    "taskId": 24,
    "taskProcessId": 89,
    "taskDescription": "Montar esteiras para Linhas de Produção",
    "taskDate": "18/8/24",
    "taskStatus": "Atrasada",
    "taskPercent": 30
  },
  {
    "taskId": 25,
    "taskProcessId": 89,
    "taskDescription": "Instalar sensores para Linhas de Produção",
    "taskDate": "9/10/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },

  // Tarefas para Fabricação de Ferramentas Industriais (processId: 48)
  {
    "taskId": 26,
    "taskProcessId": 48,
    "taskDescription": "Usinar peças para Ferramentas Industriais",
    "taskDate": "5/12/24",
    "taskStatus": "Andamento",
    "taskPercent": 50
  },
  {
    "taskId": 27,
    "taskProcessId": 48,
    "taskDescription": "Realizar tratamento térmico para Ferramentas Industriais",
    "taskDate": "22/1/25",
    "taskStatus": "Atrasada",
    "taskPercent": 10
  },
  {
    "taskId": 28,
    "taskProcessId": 48,
    "taskDescription": "Afiação final para Ferramentas Industriais",
    "taskDate": "15/3/25",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },

  {
    "taskId": 29,
    "taskProcessId": 64,
    "taskDescription": "Preparar material para Usinagem de Peças",
    "taskDate": "10/6/24",
    "taskStatus": "Atrasada",
    "taskPercent": 20
  },
  {
    "taskId": 30,
    "taskProcessId": 64,
    "taskDescription": "Usinar peças para Usinagem de Peças",
    "taskDate": "28/7/24",
    "taskStatus": "Atrasada",
    "taskPercent": 35
  },
  {
    "taskId": 31,
    "taskProcessId": 64,
    "taskDescription": "Realizar inspeção dimensional para Usinagem de Peças",
    "taskDate": "15/9/24",
    "taskStatus": "Andamento",
    "taskPercent": 60
  },

  // Tarefas para Pintura e Acabamento (processId: 37)
  {
    "taskId": 32,
    "taskProcessId": 37,
    "taskDescription": "Preparar superfície para Pintura e Acabamento",
    "taskDate": "12/11/24",
    "taskStatus": "Atrasada",
    "taskPercent": 10
  },
  {
    "taskId": 33,
    "taskProcessId": 37,
    "taskDescription": "Aplicar primer para Pintura e Acabamento",
    "taskDate": "20/12/24",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 34,
    "taskProcessId": 37,
    "taskDescription": "Realizar pintura final para Pintura e Acabamento",
    "taskDate": "8/2/25",
    "taskStatus": "Andamento",
    "taskPercent": 50
  },

  // Tarefas para Produção de Produtos Químicos (processId: 22)
  {
    "taskId": 35,
    "taskProcessId": 22,
    "taskDescription": "Preparar reagentes para Produção de Produtos Químicos",
    "taskDate": "7/4/25",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 36,
    "taskProcessId": 22,
    "taskDescription": "Misturar componentes para Produção de Produtos Químicos",
    "taskDate": "16/5/25",
    "taskStatus": "Andamento",
    "taskPercent": 70
  },

  // Tarefas para Tratamento de Águas Industriais (processId: 95)
  {
    "taskId": 37,
    "taskProcessId": 95,
    "taskDescription": "Analisar amostras para Tratamento de Águas Industriais",
    "taskDate": "22/7/25",
    "taskStatus": "Atrasada",
    "taskPercent": 15
  },

  // Tarefas para Reciclagem de Materiais (processId: 72)
  {
    "taskId": 38,
    "taskProcessId": 72,
    "taskDescription": "Separar materiais para Reciclagem",
    "taskDate": "18/9/25",
    "taskStatus": "Andamento",
    "taskPercent": 40
  },
  {
    "taskId": 39,
    "taskProcessId": 72,
    "taskDescription": "Processar materiais recicláveis para Reciclagem",
    "taskDate": "7/11/25",
    "taskStatus": "Atrasada",
    "taskPercent": 25
  },

  // Tarefas para Produção de Energia Elétrica (processId: 59)
  {
    "taskId": 40,
    "taskProcessId": 59,
    "taskDescription": "Gerar energia a partir de fontes renováveis",
    "taskDate": "16/1/26",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 41,
    "taskProcessId": 59,
    "taskDescription": "Distribuir energia para rede elétrica",
    "taskDate": "5/3/26",
    "taskStatus": "Andamento",
    "taskPercent": 70
  },

  // Tarefas para Montagem de Painéis Solares (processId: 14)
  {
    "taskId": 42,
    "taskProcessId": 14,
    "taskDescription": "Preparar estrutura para Painéis Solares",
    "taskDate": "14/5/26",
    "taskStatus": "Atrasada",
    "taskPercent": 15
  },

  {
    "taskId": 43,
    "taskProcessId": 14,
    "taskDescription": "Instalar células solares nos painéis para Montagem de Painéis Solares",
    "taskDate": "2/7/26",
    "taskStatus": "Andamento",
    "taskPercent": 50
  },
  {
    "taskId": 44,
    "taskProcessId": 14,
    "taskDescription": "Realizar testes de eficiência para Montagem de Painéis Solares",
    "taskDate": "18/8/26",
    "taskStatus": "Atrasada",
    "taskPercent": 30
  },
  {
    "taskId": 45,
    "taskProcessId": 14,
    "taskDescription": "Finalizar montagem e realizar inspeção para Montagem de Painéis Solares",
    "taskDate": "5/10/26",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 46,
    "taskProcessId": 14,
    "taskDescription": "Empacotar e preparar para envio para Montagem de Painéis Solares",
    "taskDate": "21/11/26",
    "taskStatus": "Atrasada",
    "taskPercent": 20
  },

  // Tarefas adicionais para Produção de Equipamentos de Segurança (processId: 87)
  {
    "taskId": 47,
    "taskProcessId": 87,
    "taskDescription": "Inspeção de qualidade para Produção de Equipamentos de Segurança",
    "taskDate": "7/7/26",
    "taskStatus": "Atrasada",
    "taskPercent": 60
  },
  {
    "taskId": 48,
    "taskProcessId": 87,
    "taskDescription": "Embalagem final para Produção de Equipamentos de Segurança",
    "taskDate": "18/8/26",
    "taskStatus": "Andamento",
    "taskPercent": 40
  },
  {
    "taskId": 49,
    "taskProcessId": 87,
    "taskDescription": "Armazenamento dos equipamentos finalizados para Produção de Equipamentos de Segurança",
    "taskDate": "25/9/26",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },

  // Tarefas adicionais para Montagem de Veículos (processId: 38)
  {
    "taskId": 50,
    "taskProcessId": 38,
    "taskDescription": "Montar estrutura principal dos veículos para Montagem de Veículos",
    "taskDate": "3/8/26",
    "taskStatus": "Andamento",
    "taskPercent": 70
  },
  {
    "taskId": 51,
    "taskProcessId": 38,
    "taskDescription": "Instalar sistemas elétricos e mecânicos para Montagem de Veículos",
    "taskDate": "14/9/26",
    "taskStatus": "Atrasada",
    "taskPercent": 45
  },
  {
    "taskId": 52,
    "taskProcessId": 38,
    "taskDescription": "Realizar testes de segurança para Montagem de Veículos",
    "taskDate": "22/10/26",
    "taskStatus": "Concluida",
    "taskPercent": 100
  },
  {
    "taskId": 53,
    "taskProcessId": 38,
    "taskDescription": "Embalagem final para Montagem de Veículos",
    "taskDate": "5/12/26",
    "taskStatus": "Atrasada",
    "taskPercent": 20
  },

  // Tarefas adicionais para Tratamento Térmico (processId: 56)
  {
    "taskId": 54,
    "taskProcessId": 56,
    "taskDescription": "Preparar peças para o tratamento térmico",
    "taskDate": "3/8/26",
    "taskStatus": "Atrasada",
    "taskPercent": 80
  },
  {
    "taskId": 55,
    "taskProcessId": 56,
    "taskDescription": "Realizar tratamento térmico das peças",
    "taskDate": "14/9/26",
    "taskStatus": "Andamento",
    "taskPercent": 60
  },
  {
    "taskId": 56,
    "taskProcessId": 56,
    "taskDescription": "Inspeção de qualidade pós-tratamento térmico",
    "taskDate": "22/10/26",
    "taskStatus": "Concluida",
    "taskPercent": 100
  }
];


export function updateTaskData(newDataTask: Task[]): void {
  console.log('updateTaskData')
  
  newDataTask.forEach((newTask) => {
    const existingTaskIndex = dataTask.findIndex(
      (task) => task.taskId === newTask.taskId
    );

    if (existingTaskIndex !== -1) {
      dataTask[existingTaskIndex] = { ...dataTask[existingTaskIndex], ...newTask };
    } else {
      dataTask.push(newTask);
    }
  });
  console.log(dataTask)
}

export function deleteTask(taskId: number): void {
  console.log('deleteTask');

  // Encontre o índice da tarefa com o taskId fornecido
  const taskIndex = dataTask.findIndex((task) => task.taskId === taskId);

  if (taskIndex !== -1) {
    // Se a tarefa for encontrada, remova-a do array
    dataTask.splice(taskIndex, 1);
  }

  console.log(dataTask);
}