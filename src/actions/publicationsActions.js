import axios from 'axios'
import { BRING_FOR_USER, LOADING, ERROR} from '../types/publicationsTypes'
import * as usersTypes from '../types/usersTypes'

const { BRING_USERS: USERS_BRING_EVERYTHING } = usersTypes

export const bringForUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })
  const { users } = getState().usersReducer
  const { publications } = getState().publicationsReducer
  const user_id = users[key].id
  
  try {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

    const news = response.data.map((publication) => ({
      ...publication,
      comments: [],
      open: false
    }))

    const updated_publications = [
      ...publications,
      news
    ]

    dispatch({
      type: BRING_FOR_USER,
      payload: updated_publications
    })

    const publications_key = updated_publications.length -1
    const updated_users = [...users]
    updated_users[key] = {
      ...users[key],
      publications_key
    }

    dispatch({
      type: USERS_BRING_EVERYTHING,
      payload: updated_users
    })
  }
  catch(error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Publications not available'
    })
  }
}

export const openClose = (pub_key, com_key) => (dispatch) => {
  alert(pub_key, com_key)
}