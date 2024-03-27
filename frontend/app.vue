<template>
  <header>
    <nav>
      <ul class="flex gap-8 justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/register">Register</NuxtLink></li>
        <li><NuxtLink to="/doc">Doc</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main class="flex flex-col gap-2 items-center mt-8">
    <NuxtPage />
  </main>
</template>

<style>
body {
  background-color: rgb(189, 189, 228);
}
</style>
