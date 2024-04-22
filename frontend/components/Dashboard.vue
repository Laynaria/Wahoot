<script lang="ts" setup>
import type { InjectContext } from "~/types/user.types";

const { user, disconnectUser } = inject("user") as InjectContext;
</script>

<template>
  <header class="sm:row-start-1 border-r border-black p-8 w-full bg-[#9A9AD5]">
    <nav>
      {{ user?.username || "No User" }}
      <ul class="flex flex-col gap-8 justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li v-if="user.id === 0"><NuxtLink to="/login">Login</NuxtLink></li>
        <li v-if="user.id === 0">
          <NuxtLink to="/register">Register</NuxtLink>
        </li>

        <li
          v-if="user.id !== 0"
          @click="disconnectUser"
          class="cursor-pointer fixed bottom-8"
        >
          Disconnect
        </li>
      </ul>
    </nav>
  </header>
</template>
