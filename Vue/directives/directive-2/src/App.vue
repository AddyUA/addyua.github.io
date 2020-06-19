<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p style="color: #000" v-highlight:background.delayed="'orangered'">Color This</p>
        <p
          style="color: #000"
          v-local-highlight:background.delayed.blink="{mainColor: 'orangered', secondColor: 'lightblue', delay: 500}"
        >Color This too</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor,
            secondColor = binding.value.secondColor,
            currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
                el.style.color = "#fff";
              } else el.style.color = currentColor;
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
              el.style.color = "#fff";
            } else el.style.color = binding.value.mainColor;
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
