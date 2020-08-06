<template>
  <div class="v-catalog-item">
    <app-popup
      v-if="isInfoPopup"
      @closePopup="closePopup"
      @popupBtnAction="addToCart"
      popupBtnTitle="Add to cart"
      :popupTitle="productData.name"
    >
      <img
        class="v-catalog-item__popup-image"
        :src="require(`../assets/img/${productData.image}`)"
        alt="image"
      />
      <div>
        <p class="v-catalog-item__description">"{{ productData.description }}"</p>
        <p class="v-catalog-item__category">{{ productData.category }}</p>
        <p class="v-catalog-item__price">Price: {{ productData.price }}$</p>
      </div>
    </app-popup>

    <img
      class="v-catalog-item__image"
      :src="require(`../assets/img/${productData.image}`)"
      alt="image"
    />
    <p class="v-catalog-item__name">"{{ productData.name }}"</p>
    <p class="v-catalog-item__category">{{ productData.category }}</p>
    <p class="v-catalog-item__price">Price: {{ productData.price }}$</p>
    <button class="v-catalog-item__show-info btn" @click="showPopup">Show info</button>
    <button class="v-catalog-item__add btn" @click="addToCart">
      <font-awesome-icon :icon="['fas', 'cart-plus']" />
      <span>Add to cart</span>
    </button>
  </div>
</template>

<script>
import VPopup from './v-popup'

export default {
  name: 'v-catalog-item',
  data() {
    return {
      isInfoPopup: false
    }
  },
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    appPopup: VPopup
  },
  methods: {
    showPopup() {
      this.isInfoPopup = true
    },
    closePopup() {
      this.isInfoPopup = false
    },
    addToCart() {
      this.$emit('addToCart', this.productData)
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px #bbbbbb;
  padding: $padding * 1.5;
  margin: $margin * 1.5;

  background-color: $item-color;

  &__popup-image {
    max-width: 100px;
  }
  &__description {
    max-width: 250px;
  }
  &__image {
    max-width: 150px;
  }

  &__category {
    font-weight: bold;
  }
  &__add {
    min-width: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
  }
  &__show-info {
    margin-bottom: 5px;
  }
}
</style>
