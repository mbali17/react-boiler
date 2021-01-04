const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  console.log(`type: ${action.type}`);
  const newState = { ...state };
  switch (action.type) {
    case 'INCREMENT_NUMBER':
      newState.number += action.value;
      break;
    case 'DECREMENT_NUMBER':
      newState.number -= action.value;
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
