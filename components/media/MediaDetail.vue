<script setup>
import {posterBaseUrl} from '@/lib/constants'
import {ArrowLeftIcon} from '@heroicons/vue/outline'

const props = defineProps({
	data: Object
})
const storage = useState('watchlist')
const route = useRoute()
const title = props.data.title || props.data.name
const release = props.data.release_date || props.data.first_air_date
const link = route.params.mediaType === 'tv' ? '/tv' : '/'

function addToWatchList() {
	if(storage.value.find(item => item.id === props.data.id) == undefined) {
		storage.value = [...storage.value, props.data]
	}
}

</script>

<template>
	<Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
	<div class="bg-white rounded-tl-md mx-6 my-4 flex justify-between">
		<nuxt-link :to="link" class="block text-blue-500">
			<ArrowLeftIcon class="w-6 h-6 text-black"/>
		</nuxt-link>
		<button @click="addToWatchList" class="text-blue-500">save to watchlist</button>
	</div>
	<div class="relative">
		<div class="bg-black bg-opacity-50 absolute inset-0 z-10"></div>
		<img class="w-full h-48 md:h-72 object-cover" :src="`${posterBaseUrl}/${props.data.backdrop_path}`" alt="">		
	</div>
	<div class="relative px-6 -top-24 z-20">
		<div class="flex gap-4 mb-4">
			<img
				class="max-h-52 rounded-md"
				:src="`${posterBaseUrl}/${props.data.poster_path}`"
				:alt="title"
			>
			<div class="transform translate-y-28">
				<h1>{{title}}</h1>
				<span
					class="mt-1 text-gray-700 block font-medium"
				>
					{{release}} • {{props.data.vote_average}}
				</span>
			</div>
		</div>
		<p>{{props.data.overview}}</p>
	</div>
</template>