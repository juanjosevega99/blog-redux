import { BRING_TASKS, LOADING, ERROR} from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRING_TASKS:
      return { 
        ...state, 
        tasks: action.payload,
        loading: false,
        error: ''
      }

    case LOADING:
      return { ...state, loading: true }
    
      case ERROR:
      return { ...state, error: action.payload, loading: false}
    default: return state;
  }
}