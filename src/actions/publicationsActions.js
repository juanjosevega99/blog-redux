import axios from 'axios'
import { BRING_FOR_USER, LOADING, ERROR} from '../types/publicationsTypes'

export const bringForUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer
  const { publications } = getState().publicationsReducer
  const user_id = users[key].id
  
  const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

  const updated_publications = [
    ...publications,
    response.data
  ]

  dispatch({
    type: BRING_FOR_USER,
    payload: updated_publications
  })
}