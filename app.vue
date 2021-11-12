<script setup>
import Watchlist from './components/watchlist/Watchlist'
import './assets/tailwind.css'
import './assets/style.css'
</script>

<template>
  <div>
    <Head>
      <Title>Watchlist</Title>
    </Head>
    <main class="md:grid grid-cols-4 bg-gray-100">
      <div class="hidden md:block h-screen py-4 px-6 sticky top-0 overflow-y-auto">
        <Watchlist />
      </div>
      <div class="bg-white md:rounded-l-xl col-span-3 md:shadow-lg">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
