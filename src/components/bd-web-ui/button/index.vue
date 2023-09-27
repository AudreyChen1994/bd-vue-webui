<script setup>
import { ref } from 'vue';
defineProps({
    btnname: String,
})

const count = ref(0)
</script>
<script>
export default {
    name:'BdButton'
}
</script>

<template>
    <button class="buttonclass" hover-class="button-hover">
        {{ btnname }}
    </button>
</template>
<style scoped>
.buttonclass {
    width: 100px;
    height: 60px;
    background-color: black;
    color: aliceblue;
}
</style>
