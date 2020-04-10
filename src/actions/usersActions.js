export const bringEverything = () => (dispatch) => {
  dispatch({
    type: 'bring-users',
    payload: [1, 2, 3]
  })
}