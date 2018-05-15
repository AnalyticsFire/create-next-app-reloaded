import * as types from './actionTypes';

const INITIAL_STATE = {
  nextCharacterId: 1,
  characters: [],
  isFetchedOnServer: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, payload.response],
        isFetchedOnServer: payload.isServer,
        nextCharacterId: state.nextCharacterId + 1,
      };
    default:
      return state;
  }
};
