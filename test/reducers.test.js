import expect from 'expect';
import reducer from '../src/reducers/screen';
import * as types from '../src/constants/ActionTypes';

describe('screen reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      name: 'home',
      index: 0,
    });
  });



  it('should handle PUSH_SCREEN', () => {
    expect(
      reducer({}, {
        type: types.PUSH_SCREEN,
        name: 'Screen 2'
      })
    ).toEqual({
      name: 'Screen 2',
      index: 1,
    });

    expect(
      reducer({
        name: 'Screen 2',
        index: 2
      }, {
        type: types.PUSH_SCREEN,
        name: 'Screen 3',
      })
    ).toEqual({
      name: 'Screen 3',
      index: 3
    });
  });



  it('should handle POP_SCREEN', () => {
    expect(
      reducer({}, { type: types.POP_SCREEN })
    )
    .toEqual({ index: 0 });

    expect(
      reducer({ index: 0 }, { type: types.POP_SCREEN })
    )
    .toEqual({ index: 0 });

    expect(
      reducer({ index: 2 }, { type: types.POP_SCREEN })
    )
    .toEqual({ index: 1 });
  });
});