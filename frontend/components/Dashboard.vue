<script lang="ts" setup>
const { user, disconnectUser } = inject("user");
</script>

<template>
  <header class="sm:row-start-1 border-r border-black p-8 w-full bg-[#9A9AD5]">
    <nav>
      {{ user?.username || "No User" }}
      <ul class="flex flex-col gap-8 justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/doc">Doc</NuxtLink></li>
        <li @click="disconnectUser" class="cursor-pointer fixed bottom-8">
          Disconnect
        </li>
      </ul>
    </nav>
  </header>
</template>
