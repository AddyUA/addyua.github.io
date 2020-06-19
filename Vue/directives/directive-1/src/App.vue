<template>
  <div class="container" style="position: absolute; top: 10%; left: 25%">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>
          The Button
          <span style="color: orangered">{{ title }}</span>
        </h1>
        <button class="btn btn-primary" v-onClick:click="clicked">Click Me</button>
        <div
          class="mouse"
          v-onClick:mouseover="mouseOver"
          v-onClick:mouseout="mouseOut"
          v-onClick:mousedown="mouseDown"
          v-onClick:mouseup="mouseUp"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      lightColors: {
        lightGreen: "lightgreen",
        lightBlue: "lightblue"
      }
    };
  },
  directives: {
    onClick: {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },
  methods: {
    clicked() {
      this.title === "" ? (this.title = "is clicked") : (this.title = "");
    },
    mouseOver() {
      event.target.style.cursor = "pointer";
      event.target.style.background = this.lightColors.lightGreen;
      event.target.style.borderRadius = "50%";
    },
    mouseOut() {
      event.target.style.background = this.lightColors.lightBlue;
      event.target.style.borderRadius = "0";
    },
    mouseDown() {
      event.target.style.background = "orangered";
    },
    mouseUp() {
      event.target.style.background = this.lightColors.lightGreen;
    }
  }
};
</script>

<style scoped>
.mouse {
  outline: none;
  margin-top: 25px;
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: 0.2s;
}
</style>
