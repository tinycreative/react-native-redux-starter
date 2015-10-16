import { REPLACE_SCREEN, PUSH_SCREEN, POP_SCREEN } from '../constants/ActionTypes';

/*
 * action creators
 */

export function pushScreen(name, navigator) {
  return {
    type: PUSH_SCREEN,
    name,
    navigator,
  };
}

export function popScreen(navigator) {
  return {
    type: POP_SCREEN,
    navigator,
  };
}

