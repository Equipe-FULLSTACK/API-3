/// DEFINIÇÃO TIPAGEM COMPÁTIVEL BANCO. /////

export interface TaskToRedux {
    taskId: number;
    taskProcessId: number;
    taskDescription: string;
    taskDate: string;
    taskStatus: string;
    taskPercent: number;
  }