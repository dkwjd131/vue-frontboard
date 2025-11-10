const state = {
  breadcrumb: ['home', 'dashboard']
};

const mutations = {
  SET_BREADCRUMB: (state, parentNames) => {
    state.breadcrumb = parentNames;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
