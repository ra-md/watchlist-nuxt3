<script setup>
import api from '@/api'
import MediaList from './MediaList'

const props = defineProps({
   mediaType: String
})

const {data} = await useAsyncData(`trending/${props.mediaType}`, () => api.trending({mediaType: props.mediaType}))
</script>

<template>
   <div class="my-2">
      <h1 class="text-xl font-bold mb-2">Trending</h1>
      <MediaList :listData="data.results.slice(0, 5)" :link="`/${props.mediaType}/trending`" />
   </div>
</template>
