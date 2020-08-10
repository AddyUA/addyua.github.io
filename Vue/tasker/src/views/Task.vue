<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>

      <form @submit.prevent="submitHandler">
        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea
            style="min-height: 150px"
            v-model="description"
            id="description"
            class="materialize-textarea"
            data-length="120"
          ></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;"
            >{{ description.length }}/2048</span
          >
        </div>

        <input type="text" ref="datepicker" />

        <div class="btns" v-if="task.status !== 'completed'">
          <button class="btn" type="submit">Update</button>
          <button class="btn blue" type="button" @click="completeTask">
            Complete task
          </button>
        </div>
      </form>
    </div>
    <p v-else>Task no found</p>
  </div>
</template>

<script>
export default {
  name: "task",
  computed: {
    task() {
      console.log(this.$store.getters.TASK_BY_ID(+this.$route.params.id));
      return this.$store.getters.TASK_BY_ID(+this.$route.params.id);
    }
  },
  data() {
    return {
      description: "",
      chips: null,
      date: null
    };
  },
  components: {},
  methods: {
    submitHandler() {
      this.$store.dispatch("UPDATE_TASK", {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      });
      this.$router.push("/list");
    },
    completeTask() {
      this.$store.dispatch("COMPLETE_TASK", this.task.id);
      this.$router.push("/list");
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
    if (this.chips && this.chips.destroy) {
      this.chips.destroy();
    }
  },
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
      data: this.task.tags
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    });
    setTimeout(() => {
      M.updateTextFields();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
.btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
