<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require(`../assets/img/${productData.image}`)"
      alt="image"
    />
    <p class="v-catalog-item__name">"{{ productData.name }}"</p>
    <p class="v-catalog-item__category">{{ productData.category }}</p>
    <p class="v-catalog-item__price">Price: {{ productData.price }}$</p>

    <button class="v-catalog-item__add btn" @click="addToCart">
      <font-awesome-icon :icon="['fas', 'cart-plus']" />
      <span>Add to cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData)
    },
  },
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;

  background-color: $item-color;
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
}
</style>
