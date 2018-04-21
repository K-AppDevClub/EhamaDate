export default {
  state: {
    newCourses: [],
  },
  mutations: {
    addCourse(state, params) {
      state.newCourses.push(params);
    },
    removeCourse(state, num) {
      state.newCourses.splice(num, 1);
    },
  },
  getters: {
    getNewCourses: state => state.newCourses,
  },
  actions: {},
};

