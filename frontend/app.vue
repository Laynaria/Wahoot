<script lang="ts" setup>
import Dashboard from "./components/Dashboard.vue";
import { useUserContext } from "./contexts/userContext";
import "vue3-toastify/dist/index.css";

useUserContext();
</script>

<template>
  <Dashboard />
  <main class="flex flex-col gap-2 items-center mt-8 sm:row-start-1 w-full">
    <NuxtPage />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #bdbde4;
}

#__nuxt {
  min-height: 100vh;

  @media screen and (min-width: 640px) {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
}
</style>
