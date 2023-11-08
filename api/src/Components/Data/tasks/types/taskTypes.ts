/// DEFINIÇÃO TIPAGEM COMPÁTIVEL BANCO. /////

export interface TaskToRedux {
  id: number;
  process: number;
  active: number;
  status: string;
  name: string;
  created: string;
  deadline: string; 
  description: string;
}
