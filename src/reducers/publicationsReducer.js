import { 
  UPDATE, 
  LOADING, 
  ERROR, 
  COM_ERROR, 
  COM_LOADING, 
  COM_UPDATE
} from '../types/publicationsTypes'

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: '',
  com_loading: false,
  com_error: ''
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
    
    case COM_UPDATE:
      return { 
        ...state, 
        publications: action.payload,
        com_loading: false,
        com_error: ''
      }
      
    case COM_LOADING:
      return { ...state, com_loading: true }
    
    case COM_ERROR:
    return { ...state, com_error: action.payload, com_loading: false}
    
    default: return state;
  }
}