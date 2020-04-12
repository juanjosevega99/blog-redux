import axios from 'axios'

export const bringEverything = () => async (dispatch) => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
  dispatch({
    type: 'bringEverything',
    payload: response.data
  })
}