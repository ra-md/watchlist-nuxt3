<script setup>
import WatchlistItem from './WatchlistItem'
import { EmojiSadIcon } from '@heroicons/vue/outline'

const storage = useState('watchlist')
</script>

<template>
	<div v-if="storage != null" class="h-full">
		<div
			v-if="storage.length === 0"
			class="flex justify-center items-center flex-col text-center text-gray-300 h-full"
		>
			<EmojiSadIcon class="w-20 h-20"/>
			<h1>Your watchlist is still empty</h1>
		</div>
		<div v-else class="grid gap-4">
			<WatchlistItem
				v-for="item in storage"
				:key="item.id"
				:itemData="item"
			/>
		</div>
	</div>
	<p v-else>loading...</p>
</template>