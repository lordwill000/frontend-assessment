export const types = {
  SET_WINDOW_WIDTH: 'SET_WINDOW_WIDTH',
};

const actions = {
  [types.SET_WINDOW_WIDTH]({ commit }, payload) {
    return commit(types.SET_WINDOW_WIDTH, payload);
  },
};
export default actions;
