import axios from 'axios'

export const bringEverything = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: 'bring-users',
    payload: response.data
  })
}