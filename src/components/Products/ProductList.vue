<template>

   <!--V-row é a lista dos produtos-->
   <v-row>
            <!--cols para limitar a quantidade de imagens na linha, sm e md tão no doc do Grid do Vuetify-->
            <!--do menor para o maior, cols padrão é 12, que é dividido pelo valor de acordo com o tamanho da tela
            ficando por exemplo "lg= 12/3" ou seja, 4 itens por coluna-->
            
            <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">

              <v-card flat width="300" class="border">

                  <div class="bg-white px-6 py-2">

                    <v-img :src=product.image>
                    </v-img>

                  </div>


                  <v-card-text>
                    <h4>
                      {{ product.name }}
                    </h4>

                    <div class="my-4">

                      <!-- se tiver promoção (preço riscado) ele faz esse, se não, faz o de baixo fora do template-->
                      <template v-if="product.promotion">
                        <div class="font-weight-light text-decoration-line-through mb-n2">R$: {{ product.price }}</div>
                        <div class="text-h5 font-weight-bold">{{ formatPrice(product.promotion) }}</div>
                      </template>

                      <template v-else>
                        <div class="text-h5 font-weight-bold">{{ formatPrice(product.price) }}</div>
                      </template>
                      
                      <div v-if="product.conditions" class="font-weight-light">{{ product.conditions }}</div>
                    </div>

                    <v-btn flat block color="primary" @click="add(product)">
                      
                      Adicionar

                      <template #prepend>

                        <v-badge color="success" dot v-if="inCart(product.id)">
                          <v-icon icon="mdi-cart"/>
                        </v-badge>

                        <v-icon icon="mdi-cart" v-else/>

                        

                      </template>
                      
                    </v-btn>

                  </v-card-text>

                  </v-card>
            </v-col>
            

          </v-row>
    
</template>

<script setup>

//api do JavaScript para formatar valores, que está em helpers
import { formatPrice } from "@/helpers/helpers"

import { useCart } from "@/composables/useCart"

const { add, inCart } = useCart()

defineProps({
    products: Array
})

</script>
