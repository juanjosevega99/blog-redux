import axios from 'axios'
import { 
  UPDATE, 
  LOADING, 
  ERROR, 
  COM_ERROR, 
  COM_LOADING, 
  COM_UPDATE
} from '../types/publicationsTypes'
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
      type: UPDATE,
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

export const openClose = (pub_key, com_key) => (dispatch, getState) => {
  const { publications } = getState().publicationsReducer
  const selected = publications[pub_key][com_key]

  const update = {
    ...selected,
    open: !selected.open
  }

  const updated_publications = [...publications]
  updated_publications[pub_key] = [
    ...publications[pub_key]
  ]
  updated_publications[pub_key][com_key] = update

  dispatch({
    type: UPDATE,
    payload: updated_publications
  })
}

export const bringComments = (pub_key, com_key) => async (dispatch, getState) => {
  dispatch({
      type: COM_LOADING
  })
  const { publications } = getState().publicationsReducer
  const selected = publications[pub_key][com_key]

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`)
    
    const update = {
      ...selected,
      comments: response.data
    }

    const updated_publications = [...publications]
    updated_publications[pub_key] = [
      ...publications[pub_key]
    ]
    updated_publications[pub_key][com_key] = update
    
    dispatch({
      type: COM_UPDATE,
      payload: updated_publications
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: COM_ERROR,
      payload: 'Comments no available'
    })
  }
}