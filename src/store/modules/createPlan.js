export default {
  state: {
    courses: [],
  },
  mutations: {
    addCourse(state, params) {
      if (params.edit) {
        state.courses[params.index] = params.data;
      } else {
        state.courses.push(params.data);
      }
    },
    removeCourse(state, num) {
      state.courses.splice(num, 1);
    },
  },
  getters: {},
  actions: {},
};

