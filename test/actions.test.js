import expect from 'expect';
import * as actions from '../src/actions';
import * as types from '../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to push the screen', () => {
    const name = 'Screen 1';
    const navigator = {};
    const expectedAction = {
      type: types.PUSH_SCREEN,
      name,
      navigator,
    };
    expect(actions.pushScreen(name, navigator)).toEqual(expectedAction);
  });

  it('should create an action to pop the screen', () => {
    const navigator = {};
    const expectedAction = {
      type: types.POP_SCREEN,
      navigator,
    };
    expect(actions.popScreen(navigator)).toEqual(expectedAction);
  });
});