const initialState = {};

function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    default:
      return { ...state };
  }
}

export default reducer;