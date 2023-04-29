<template>
    <div class="d-flex flex-column align-center justify-center h-100">
          <div class="text-center">
            Carrinho vazio <br>
            <v-btn color="primary" class="mt-2" @click="close()">Continuar Comprando</v-btn>
          </div>
    </div>
</template>

<script setup>

import { useCart } from "@/composables/useCart"

const { close } = useCart()

</script>