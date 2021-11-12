<script setup>
import api from '@/api'
import MediaDetail from '@/components/media/MediaDetail'

const route = useRoute()
const mediaType = route.params.mediaType
const id = route.params.id

const {data} = await useAsyncData(`trending/${mediaType}`, () => api.detail(mediaType, id))
</script>

<template>
	<div>
		<MediaDetail :data="data" />
	</div>
</template>