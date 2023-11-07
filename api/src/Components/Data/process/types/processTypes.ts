/// DEFINIÇÃO TIPAGEM COMPATIVEL COM BANCO

export interface ProcessToRedux {
    processId: number;
    processActive: number;
    processStatus: string;
    processName: string;
    processCreate: string;
    processDeadLine: string;
    processDescription: string;
  }