<script setup>
import api from '@/api'
import MediaList from './MediaList'

const props = defineProps({
   mediaType: String
})

const {data} = await useAsyncData(`now/${props.mediaType}`, () => api.now({mediaType: props.mediaType}))
</script>

<template>
   <div class="my-2">
      <h1 class="text-xl font-bold mb-2">{{mediaType === 'tv' ? 'On The Air' : 'Now Playing'}}</h1>
      <MediaList v-if="data" :listData="data.results.slice(0, 5)" :link="`/${props.mediaType}/now`"/>
   </div>
</template>
