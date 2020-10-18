export const initialState = {
  user: "rishab",
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  // Listen on the data layer....
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
