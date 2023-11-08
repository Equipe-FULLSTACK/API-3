/// DEFINIÇÃO TIPAGEM COMPÁTIVEL BANCO. /////

export interface TaskToRedux {
<<<<<<< Updated upstream
    taskId: number;
    taskProcessId: number;
    taskDescription: string;
    taskDate: string;
    taskStatus: string;
    taskPercent: number;
  }
=======
  id: number;
  process: number;
  active: number;
  status: string;
  name: string;
  created: string;
  deadline: string; 
  description: string;
}
>>>>>>> Stashed changes
