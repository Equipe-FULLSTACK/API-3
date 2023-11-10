import { SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK, TaskActionTypes } from '../types/taskActionTypes';
import { TaskToRedux } from '../types/taskTypes';

export interface AppState {
  tasks: TaskToRedux[];
}

const initialState: AppState = {
  tasks: [],
};

const taskReducer = (state: AppState = initialState, action: TaskActionTypes): AppState => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
        
    case UPDATE_TASK:
      console.log('taskReducer - UPDATE_TASK');
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};

export default taskReducer;
