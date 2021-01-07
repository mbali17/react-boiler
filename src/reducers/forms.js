export const defaultState = {
  values: {

  },
};

const formState = (state = defaultState, action) => {
  switch (action.type) {
    case 'CAPTURE_FIELD_INPUT': {
      const { id, value } = action;
      const newState = state;
      newState.values[id] = value;
      return newState;
    }
    default:
      return state;
  }
};

export default formState;
