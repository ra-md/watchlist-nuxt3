<script setup>
import Item from '../media/Item'
import { ChevronRightIcon } from '@heroicons/vue/outline'

const props = defineProps({
	listData: Array,
	link: String
})
</script>

<template>
	<div class="grid gap-4 grid-cols-3 md:grid-cols-6">
		<Item
			v-for="item in listData"
			:key="item.id"
			:itemData="item"
		/>
		<div class="grid place-items-center">
			<nuxt-link :to="props.link">
				More
			</nuxt-link>
		</div>
	</div>
</template>