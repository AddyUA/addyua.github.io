<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require(`../assets/img/${cartItemData.image}`)"
      alt="image"
    />
    <div class="v-cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.category }}</p>
      <p>Total: {{ cartItemData.price * cartItemData.quantity }}$</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <p>
        <span class="v-cart-item__quantity_button" @click="decItem">-</span>
        <span class="v-cart-item__quantity_qty">
          {{ cartItemData.quantity }}
        </span>
        <span class="v-cart-item__quantity_button" @click="incItem">+</span>
      </p>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    decItem() {
      this.$emit('decrement')
    },
    incItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1)
  },
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 10px 5px #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;

  &__image {
    max-width: 50px;
  }

  &__quantity_button {
    margin: $margin;
    padding: $padding;

    cursor: pointer;
  }

  &__quantity_qty {
    cursor: pointer;
  }
}
</style>
