import { REPLACE_SCREEN, PUSH_SCREEN, POP_SCREEN } from '../constants/ActionTypes';

const defaultScreen = {
  name: 'home',
  index: 0,
};

function changeScreen(state = defaultScreen, action) {
  let newState;

  switch (action.type) {
    case PUSH_SCREEN:
      newState = {
        ...state,
        name: action.name,
        index: (state.index || 0) + 1,
      };

      if (action.navigator) {
        action.navigator.push(newState);
      };

      return newState;


    case POP_SCREEN:
      if (!state.index || state.index < 1) {
        return { index: 0 };
      };

      newState = {
        ...state,
        index: (state.index || 0) - 1,
      };

      if (action.navigator) {
        action.navigator.pop();
      };

      return newState;

    default:
      return state;
  }
}

export default changeScreen;