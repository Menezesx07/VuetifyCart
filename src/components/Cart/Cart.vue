<template>

  <CartEmpty v-if="isEmpty"/>
  <CartProducts v-else/>

</template>

<script setup>
import { useCart } from "@/composables/useCart"
import CartEmpty from "./CartEmpty.vue"
import CartProducts from "./CartProducts.vue"

const { isEmpty } = useCart()


</script>