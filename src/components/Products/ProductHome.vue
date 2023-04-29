<template>
    
    <ProductsLoading v-if="isLoading"/>
    <ProductsEmpty v-else-if="!products.length"/>
    <ProductList
    :products="products"
    />

    <!-- :products="products" passando a props do AJAX -->

</template>

<script setup>
import ProductsEmpty from './ProductsEmpty.vue';
import ProductsLoading from './ProductsLoading.vue';
import ProductList from './ProductList.vue';

//chamando o VUEUSE 
import { useAsyncState } from '@vueuse/core'

import axios from 'axios'


//fazendo o AJAX do VUEUSE
const { state: products, isLoading } = useAsyncState(
  axios
    .get('http://localhost:8000/products')
    .then(t => t.data),
  [],
)


</script>