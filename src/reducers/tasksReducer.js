import { BRING_TASKS, LOADING, ERROR} from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: '',
  user_id: '',
  title: ''
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
    
    case 'change_user_id':
      return { ...state, user_id: action.payload }
    
    case 'change_title':
      return { ...state, title: action.payload }
    
    case 'added':
      return { ...state, tasks: {}, loading: false, error: '' }

    default: return state;
  }
}