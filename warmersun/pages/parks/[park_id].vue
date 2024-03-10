<template>
    <div>
        <h1>Park</h1>
    </div>
</template>

<script setup>
const route = useRoute()
let parkId = route.params.park_id

console.log(parkId)

</script>

<style>

</style>