import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]").map(task => {
      if (new Date(task.date) < new Date()) {
        task.status = "outdated";
      }
      return task;
    })
  },
  mutations: {
    ADD_TASK: (state, task) => {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    UPDATE_TASK: (state, { id, description, date }) => {
      const tasks = state.tasks.concat();
      const idx = tasks.findIndex(task => task.id === id);
      const task = tasks[idx];

      const status = new Date(date) > new Date() ? "active" : "outdated";

      tasks[idx] = { ...task, date, description, status };

      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    COMPLETE_TASK: (state, id) => {
      const idx = state.tasks.findIndex(task => task.id === id);
      state.tasks[idx].status = "completed";
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  },
  actions: {
    CREATE_TASK({ commit }, task) {
      commit("ADD_TASK", task);
    },
    UPDATE_TASK({ commit }, task) {
      commit("UPDATE_TASK", task);
    },
    COMPLETE_TASK({ commit }, id) {
      commit("COMPLETE_TASK", id);
    }
  },
  modules: {},
  getters: {
    TASKS: state => {
      return state.tasks;
    },
    TASK_BY_ID: state => {
      return id => {
        return state.tasks.find(task => task.id === id);
      };
    }
  }
});
