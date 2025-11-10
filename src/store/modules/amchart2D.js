const state = {
  info: {
    count: 0
  }
};

const mutations = {
  addAmchartCount: (state) => {
    state.info.count = state.info.count + 1;
  },
  clearAmchartCount: (state) => {
    state.info.count = 0;
  }
};

const actions = {
  addCount({ commit }) {
    commit('addAmchartCount');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
