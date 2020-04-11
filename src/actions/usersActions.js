import axios from 'axios'
import { BRING_USERS, LOADING, ERROR } from '../types/usersTypes'

export const bringEverything = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: BRING_USERS,
      payload: response.data
    })
  } catch (error) {
    console.log('Error: ', error.message)
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}