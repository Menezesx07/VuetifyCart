<template>
  <v-app theme="dark">

    <!-- Drawer lateral do carrinho-->
    <!--o v-model atribuido, serve para da como false o isOpen ao fechar o drawer-->
    <v-navigation-drawer location="right" width="600" v-model="isOpen" temporary>

        <div class="d-flex flex-column h-100">

          <div class="d-flex align-center justify-space-between pa-4">
            <h3>Carrinho de Compras</h3>
            <v-btn icon="mdi-close" @click="close()"></v-btn>
          </div>

          <!-- Importando o carrinho de comprar-->
          <Cart/>

        </div>
    </v-navigation-drawer>
    <!-- Final do Drawer lateral do carrinho-->

    <!--Corpo do site em si-->
    <v-layout>

      <!-- titulo da pagina -->
      <TheHeader/>

        <v-main class="mt-6">

              <ProductHome/>

        </v-main>

    </v-layout>
  </v-app>
</template>

<script setup>


//{useCart} está como objeto pois recebe o retorno das variaveis e funções do composables retornados
import {useCart} from "./composables/useCart"
import Cart from './components/Cart/Cart.vue';
import TheHeader from './components/TheHeader.vue';
import ProductHome from "./components/Products/ProductHome.vue";
const {isOpen, close} = useCart()

</script>
