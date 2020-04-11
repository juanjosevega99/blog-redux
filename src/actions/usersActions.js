import axios from 'axios'
import { BRING_USERS} from '../types/usersTypes'

export const bringEverything = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: 'BRING_USERS',
    payload: response.data
  })
}