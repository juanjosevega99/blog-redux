import axios from 'axios'
import { BRING_TASKS, LOADING, ERROR } from '../types/tasksTypes'

export const bringTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

    const tasks = {}
    response.data.map((task) => (
      tasks[task.userId] = {
        ...tasks[task.userId],
        [task.id]: {
          ...task
        }
      }
    ))

    dispatch({
      type: BRING_TASKS,
      payload: tasks
    })
  } catch (error) {
    console.log('Error: ', error.message)
    dispatch({
      type: ERROR,
      payload: 'Tasks not available'
    })
  }
}

export const changeUserId = (user_id) => (dispatch) => {
  dispatch({
    type: 'change_user_id',
    payload: user_id
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: 'change_title',
    payload: title
  })
}