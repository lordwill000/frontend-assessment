import { types } from './actions';

export default {
  [types.SET_WINDOW_WIDTH](state, payload) {
    state.windowWidth = payload;
  },
};
