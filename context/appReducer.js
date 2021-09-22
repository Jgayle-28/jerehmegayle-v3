import { SET_INITIAL_LOAD } from './types';

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INITIAL_LOAD:
      return {
        ...state,
        initialLoad: payload,
        loading: false,
      };
    default:
      break;
  }
};
export default appReducer;
