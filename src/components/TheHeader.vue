<template>

        <v-app-bar flat density="comfortable" class="text-center border-b">

        <v-app-bar-title :elevation="10">Vuetify Cart</v-app-bar-title>

            <!-- icone do carrinho-->
            <template #append>
            <v-btn icon @click="open()">

                <v-icon icon="mdi-cart" v-if="isEmpty"/>

                <v-badge color="info" dot v-else>
                    <v-icon icon="mdi-cart"/>
                </v-badge>
                
            </v-btn>
    
            </template>

        </v-app-bar>
    
</template>

<script setup>

import { useCart } from "@/composables/useCart"

const {open, isEmpty} = useCart()
 
</script>