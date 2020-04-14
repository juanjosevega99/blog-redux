import axios from 'axios'
import { 
  BRING_TASKS, 
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  SAVE,
  UPDATE,
  CLEAN
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
    dispatch({
      type: SAVE,
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
  dispatch({
    type: LOADING,
  })

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task_edited.id}`, task_edited)
    dispatch({
      type: SAVE,
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

export const changeCheck = (user_id, tas_id) => (dispatch, getState) => {
  const { tasks } = getState().tasksReducer;
  const selected = tasks[user_id][tas_id]

  const updated = {
    ...tasks
  }
  updated[user_id] = {
    ...tasks[user_id]
  }
  updated[user_id][tas_id] = {
    ...tasks[user_id][tas_id],
    completed: !selected.completed
  }

  dispatch({
    type: UPDATE,
    payload: updated
  })
}

export const deleted = (tas_id) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${tas_id.id}`)
    dispatch({
      type: BRING_TASKS,
      payload: {}
    })
  }
  catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      tasks: 'Service not available'
    })
  }
}

export const cleanForma = () => (dispatch) => {
  dispatch({
    type: CLEAN,
  })
}