//não esquecer de imporat o {ref}
import { useStorage } from "@vueuse/core"
import {computed, ref} from "vue"

//colocando a variavel fora da função para ser acessada globalmente
//e também a reatividade ficar certinha
//estado inicial do carrinho
//ref para reatividade (igual acontece no react com o "use" que não pode
//ser alterado diretamente)
const isOpen = ref(false)

//array do carrinho
//é usado o useStorage do VUEUSE para armazenar os dados localmente
const cart = useStorage("cart", [])

//abrindo o drawer do carrinho
//detalho que ao clicar fora do drawer, por conta do v-model do vuetify atribuido a classe
//ele fecha o drawer e altera a variavel is open para close por conta do v-model
//ou também fecha com o @click="close()"
export const useCart = () => {
   
    function open() {
        isOpen.value = true
    }

    function close() {
        isOpen.value = false
    }

    //adicionando produto ao carrinho
    //recebe o produto do v-for (product in products) com o @click do botão "adicionar"
    function add(product) {

        //FAZENDO A VERIFICAÇÃO se o item está ou não no carrinho (criado lá em cima) 
        //usar o console.log(index) vai ver que, se ele for -1 é pq esse item não existe no carrinho, porém se retornar
        //um numero maior ou igual a 0, ele existe, e esse numero é a posição do item no array
        //sendo assim, é só explorar no if else usando o >= 0 como parametrto para saber se existe ou não
        const index = cart.value.findIndex(o => o.id === product.id)

        //se o item já existir, só vai adicionar em quantidade, se não, é inserido um novo
        if(index >= 0) {
            //se o item já existir, captura o index (posição do item) e criada
            //uma nova variavel chamada qty no objeto P, que é incrementado mais um numero
            const p = cart.value[index]
            p.qty += 1
    
        } else {
            //caso o produto não exista, vai da um Push no array, criar o P e setar qty como 1 
            product.qty = 1;
            cart.value.push(product)
        }
    }

    
    function remove(id) {

         //mesma ideia do add
        const index = cart.value.findIndex(o => o.id === id)

        if(index >= 0) {
            //removendo o item do array, o 1 é a quantidade de casa que ele remove para frente
            //se for 3, e o index por ex: 2, ele remove do 2 até o 5, então sempre deixar em 1
            cart.value.splice(index, 1)
        } 

    }

    //recebe o id do item pela função
    function inCart(id) {

        //se ele encontrar algum item com o mesmo id no Cart, ele retorna true e a da o IF no ProductList
        return cart.value.some(o => o.id === id)
       
    }

    //computeds logo abaixo --------------------------------------------------------------

    //computed serve para observar tal variavel, se ela for alterada, ele entra em ação
    //no caso, se o lenght for alterado (array maior que um) a variavel isEmpty vai ser alterada
    //caso o leght for false (ou seja, for 0) o isEmpty é true, mas se o lenght for true (1 ou mais) isEmpty é false
    const isEmpty = computed ( () => !cart.value.length)

    
    //computed vai olhar para cada produto que for adicionado no carrinho
    const total = computed(() => {
        return cart.value.reduce((total, product) => {

            // ?? vai priorizar o primeiro operador, se não achar, parte para o segundo
            //no caso, o json-server retorna o produto que pode ou não ter promoção
            //se tiver finalPrice vai ser a promoção, se não, vai ser o preço normal mesmo
            const finalPrice = product.promotion ?? product.price
            
            //vai pegar o valor total já existente e somar com o novo produto adicionado 
            return total + (finalPrice * product.qty)

        }, 0)
    })



    //exportando as variaveis e funções
    return {
        isOpen,
        open,
        close,
        add,
        cart,
        isEmpty, 
        remove,
        total,
        inCart
    }
}