<template>
    <div>
                <v-list>
                    <div v-for="product in cart" :key = "product.id">

                        <v-list-item>
                    <div class="d-flex">
                      <div class="bg-white px-2 mr-4">
                        <img 
                        :src="product.image"
                        style="width: 120px">
                      </div>

                      <div class="d-flex flex-column justify-space-between">
                        <div>
                          <h5 class="font-weight-regular"> {{ product.name }} </h5>
                          <div>

                            <!-- ?? prioriza o primeiro item-->
                            <!-- api do JavaScript para formatar valores, que está em helpers-->
                            <strong>{{ formatPrice(product.promotion ?? product.price)}}</strong>
                          </div>
                        </div>

                        <div class="d-flex align-item-center justify-space-between mt-4">

                          <div class="w-25">
                            <v-text-field 
                            type="number"
                            variant="outlined"
                            label="Qty"
                            min="1"
                            density="compact"
                            hide-details
                            v-model="product.qty"
                            />
                            
                          </div>

                          <div>
                            <a href="" @click.stop.prevent="remove(product.id)">Remover</a>
                          </div>

                        </div>
                        

                      </div>

                    </div>
                  </v-list-item>

                  <v-divider class="my-4"/>
                    
                    </div>
                  

                </v-list>

              <div class="mt-auto">
              

                <div class="pa-4">
                  <div class="d-flex align-center justify-space-between mb-4">
                      <div>
                        Total
                      </div>
                      <div>
                        <strong>
                          <!-- api do JavaScript para formatar valores, que está em helpers-->
                         {{ formatPrice(total)}}

                        </strong>
                      </div>
                  </div>

                  <v-btn color="primary" block size="large">Finalizar Compra</v-btn>

                  <div class="text-center mt-2">
                    ou
                    <a href="" @click.stop.prevent="close()">Continue Comprando</a>
                  </div>

                </div>

              </div>

          </div>
</template>

<script setup>

import { useCart } from "@/composables/useCart"

//api do JavaScript para formatar valores, que está em helpers
import { formatPrice } from "@/helpers/helpers"

const {close, cart, remove, total} = useCart()

</script>
