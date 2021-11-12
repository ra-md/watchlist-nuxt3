<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/outline'
import { posterBaseUrl } from '@/lib/constants'

const props = defineProps({
	itemData: Object
})
const expand = ref(false)
const storage = useState('watchlist')
const release = props.itemData.release_date || props.itemData.first_air_date
const title = props.itemData.title || props.itemData.name

function removeWatchList() {
	storage.value = storage.value.filter(item => item.id !== props.itemData.id)
}

</script>

<template>
	<div
		class="bg-white rounded-lg shadow-lg border border-gray-300 h-28 overflow-hidden"
		:class="{'h-auto': expand}"
	>
		<div class="flex gap-3 mb-1 p-1.5">
			<img
				:src="`${posterBaseUrl}/${props.itemData.poster_path}`"
				:alt="title"
				class="rounded-lg"
				loading="lazy"
				height="120"
				width="65"
			>
			<div class="flex justify-between items-start w-full">
				<div>
					<h1 class="text-base">{{title}}</h1>
					<span
						class="text-gray-700 block font-medium"
					>
						{{release}} • {{props.itemData.vote_average}}
					</span>
				</div>
				<button
					class="border border-gray-300 rounded-full justify-self-end text-gray-300 hover:bg-gray-300 hover:text-white"
					@click="expand = !expand"
				>
					<ChevronUpIcon v-if="expand" class="w-5 h-5"/>
					<ChevronDownIcon v-else class="w-5 h-5"/>
				</button>
			</div>
		</div>
		<p class="px-1.5 mb-1">{{props.itemData.overview}}</p>
		<button
			class="bg-gray-100 rounded-b-lg w-full p-2 font-medium text-sm"
			@click="removeWatchList"
		>
			Remove from watchlist
		</button>
	</div>
</template>