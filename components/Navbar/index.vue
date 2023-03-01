<template>
    <div class="flex flex-col sm:flex-row justify-between px-4 py-2 sm:items-center align-middle">
        <NuxtLink class="text-blue-500 dark:text-white font-bold text-lg" to="#">Todos App</NuxtLink>
        <li class="flex gap-10 px-4">
            <NuxtLink class="text-gray-300 dark:text-white" to="/">Home</NuxtLink>
            <NuxtLink class="text-gray-300 dark:text-white" to="/todos">Todos</NuxtLink>
        </li>
        <NuxtLink class="text-gray-300 dark:text-white" to="/">Theme</NuxtLink>
    </div>
</template>