import { 
  BRING_TASKS, 
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  ADD
} from '../types/tasksTypes';

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
  user_id: '',
  title: '',
  back: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRING_TASKS:
      return { 
        ...state, 
        tasks: action.payload,
        loading: false,
        error: '',
        back: false
      }

    case LOADING:
      return { ...state, loading: true }
    
    case ERROR:
      return { ...state, error: action.payload, loading: false}
    
    case CHANGE_USER_ID:
      return { ...state, user_id: action.payload }
    
    case CHANGE_TITLE:
      return { ...state, title: action.payload }
    
    case ADD:
      return { ...state, 
        tasks: {}, 
        loading: false, 
        error: '',
        back: true,
        user_id: '',
        title: '',
      }

    default: return state;
  }
}