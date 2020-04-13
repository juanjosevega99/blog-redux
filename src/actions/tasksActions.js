import axios from 'axios'
import { 
  BRING_TASKS, 
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  ADD
} from '../types/tasksTypes';

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
    type: CHANGE_USER_ID,
    payload: user_id
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

export const add = (new_task) => async (dispatch) => {
  dispatch({
    type: LOADING,
  })

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', new_task)
    console.log(response.data)
    dispatch({
      type: ADD,
    })
  }
  catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Try after'
    })
  }
}

export const edit = (task_edited) => async (dispatch) => {
  console.log(task_edited)
}