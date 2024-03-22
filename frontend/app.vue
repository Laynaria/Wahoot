<template>
  <header>
    <nav>
      <ul class="flex gap-8 justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/doc">Doc</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main class="flex flex-col gap-2 items-center mt-8">
    <NuxtPage />
  </main>
</template>
