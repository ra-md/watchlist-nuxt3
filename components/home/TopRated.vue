<script setup>
import api from '@/api'
import MediaList from './MediaList'

const props = defineProps({
   mediaType: String
})

const {data} = await useAsyncData(`top-rated/${props.mediaType}`, () => api.topRated({mediaType: props.mediaType}))
</script>

<template>
   <div class="my-2">
      <h1 class="text-xl font-bold mb-2">Top Rated</h1>
      <MediaList v-if="data" :listData="data.results.slice(0, 5)" :link="`/${props.mediaType}/top-rated`" />
   </div>
</template>
