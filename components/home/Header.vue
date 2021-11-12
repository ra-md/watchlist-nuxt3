<script setup>
import Watchlist from '../watchlist/Watchlist'
import WatchlistMobile from '../watchlist/WatchlistMobile'

const isOpen = ref(false)
</script>

<template>
	<div class="py-2 flex justify-between">
		<div>
			<nuxt-link to="/">
				<span
					class="text-lg font-medium hover:scale-105 transform"
					:class="{'text-blue-500': $route.fullPath === '/'}"
				>
					Movies
				</span>
	    </nuxt-link>
	    <nuxt-link to="/tv">
				<span
					class="`text-lg font-medium ml-4 hover:scale-105 transform"
					:class="{'text-blue-500': $route.path === '/tv'}"
				>
					TV Series
				</span>
	    </nuxt-link>
		</div>
    <button class="md:hidden font-medium" @click="isOpen = true">My Watchlist</button>
	</div>
	<WatchlistMobile :isOpen="isOpen" @close="isOpen = false"/>
</template>