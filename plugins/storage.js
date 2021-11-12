import { defineNuxtPlugin, useState } from '#app'

const KEY = 'watchlist'

export default defineNuxtPlugin((nuxt) => {
  const storage = useState('watchlist', () => null)

  if(process.client) {
    const watchlist = window.localStorage.getItem(KEY)

    if(watchlist == null) {
      storage.value = []
    } else {
      storage.value = JSON.parse(watchlist)
    }
  }

  watch(storage, () => {
    window.localStorage.setItem(KEY, JSON.stringify(storage.value))
  })
})