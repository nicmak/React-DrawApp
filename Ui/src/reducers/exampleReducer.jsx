let initialState = {
  test: false
}

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REDUCER_FIRST': {
      return {
        ...state,
        text: action.text,
        test: action.test
      }
    }
    default:
      return state
  }
}
