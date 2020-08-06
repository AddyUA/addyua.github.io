<template>
  <div class="popup-wrapper" ref="popupWrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>"{{ popupTitle }}"</span>
        <span>
          <font-awesome-icon
            class="v-popup__header-close-btn"
            :icon="['fas', 'times-circle']"
            @click="closePopup"
          />
        </span>
      </div>
      <div class="v-popup__content">
        <slot class="v-popup__slot"></slot>
      </div>
      <div class="v-popup__footer">
        <!-- <button class="close-btn btn" @click="closePopup">Close</button> -->
        <button class="submit-btn btn" @click="popupBtnAction">
          <!-- <font-awesome-icon :icon="['fas', 'cart-plus']" /> -->
          {{ popupBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-popup',
  props: {
    popupTitle: {
      type: String,
      default: 'Product name'
    },
    popupBtnTitle: {
      type: String,
      default: 'Ok'
    }
  },
  methods: {
    popupBtnAction() {
      this.$emit('popupBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    document.addEventListener('click', (item) => {
      if (item.target === this.$refs.popupWrapper) {
        this.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.popup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(185, 185, 185, 0.7);

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.v-popup {
  padding: $padding * 2;
  position: fixed;
  top: 50px;
  min-width: 400px;
  border-radius: $radius * 2;

  background-color: #fff;
  box-shadow: 0 0 10px rgba(150, 150, 150, 0.588);

  z-index: 10;

  &__header {
    margin-bottom: $margin;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-close-btn {
      cursor: pointer;
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $margin;
  }
}
</style>
