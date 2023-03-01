<script setup>

</script>

<template>
    <div>
        <h2 v-if="$route.params.id != ''" class="text-white">{{ $route.params.id }}</h2>
        <h1 v-else class="text-white">Data Not Found</h1>
    </div>
</template>