import { UPDATE, LOADING, ERROR} from '../types/publicationsTypes'

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      return { 
        ...state, 
        publications: action.payload,
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