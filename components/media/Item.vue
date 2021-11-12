<script setup>
import {posterBaseUrl} from '../../lib/constants'
const route = useRoute()
const mediaType = route.name === 'tv' ? 'tv' : 'movie'
const props = defineProps({
	itemData: Object,
})
const isOpen = ref(false)
</script>

<template>
	<nuxt-link :to="`/${mediaType}/${props.itemData.id}`">
		<img
			:src="`${posterBaseUrl}/${props.itemData.poster_path}`"
			:alt="props.itemData.name || props.itemData.title"
			width="500"
			height="750"
			loading="lazy"
			class="rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out h-full object-cover"
		>
	</nuxt-link>
</template>