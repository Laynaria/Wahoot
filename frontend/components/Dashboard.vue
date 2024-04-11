<script lang="ts" setup>
import type { userContext } from "~/types/user.types";

const user = inject("user") as Ref<userContext>;
</script>

<template>
  <header class="sm:row-start-1 border-r border-black p-8 w-full">
    <nav>
      {{ user?.username || "No User" }}
      <ul class="flex flex-col gap-8 justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/doc">Doc</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
