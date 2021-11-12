<script setup>
import api from "@/api"
import Item from './Item'
import Button from '../ui/Button'

const props = defineProps({ type: String })
const route = useRoute()
const mediaData = ref([])
const page = ref(1)
const isLoading = ref(true)
const mediaType = route.params.mediaType
const fetchMedia = await useAsyncData(`${mediaType}/${props.type}/${page}`, () => {
	return api[props.type]({
		mediaType: mediaType,
		page: page.value
	})
})

watchEffect(() => {
	mediaData.value = [...mediaData.value, ...fetchMedia.data.value.results]
	isLoading.value = false
})

watch(page, fetchMedia.refresh)

function loadMore() {
	isLoading.value = true
	page.value += 1
}
</script>

<template>
	<div class="p-4">
		<div class="grid md:grid-cols-6 grid-cols-3 gap-4">
			<Item v-for="item in mediaData" :key="item.id" :itemData="item" />
		</div>
		<div
			v-if="props.type !== 'trending' || page <= fetchMedia.data.total_pages"
			class="grid place-items-center mt-4"
		>
			<Button
				class="px-4 py-1 text-white font-medium bg-blue-500 rounded-md w-36"
				@click="loadMore"
				:isLoading="isLoading"
			>
				load more
			</Button>
		</div>
	</div>
</template>
