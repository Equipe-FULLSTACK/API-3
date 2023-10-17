import { TaskActionTypes, TaskState, ADD_TASK, UPDATE_TASK, DELETE_TASK } from './taskTypes';
import { dataTask } from './dataTask';



const initialState: TaskState = {
  tasks: dataTask,
};

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskId === action.payload.taskId ? { ...task, ...action.payload } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.taskId !== action.payload.taskId),
      };
    default:
      return state;
  }
};

export default taskReducer;