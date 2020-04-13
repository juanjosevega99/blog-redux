import axios from 'axios'
import { BRING_USERS, LOADING, ERROR} from '../types/publicationsTypes'

export const bringEverything = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: BRING_USERS,
      payload: response.data
    })
  } catch (error) {
    console.log('Error: ', error.message)
    dispatch({
      type: ERROR,
      payload: 'Something is bad, try after'
    })
  }
}


export const bringForUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer
  const user_id = users[key].id
  
  const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  dispatch({
    type: BRING_USERS,
    payload: response.data
  })
}