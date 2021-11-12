<script setup>
import {XIcon} from '@heroicons/vue/outline'

const props = defineProps({
	isOpen: Boolean
})
const emit = defineEmits(['close'])
</script>

<template>
	<div v-if="props.isOpen" class="md:hidden fixed z-10 inset-0 bg-white overflow-auto">
		<div class="p-4">
	  	<Watchlist/>
		</div>
  	<button class="bg-blue-500 rounded-full fixed bottom-4 right-4 p-3 shadow-lg" @click="emit('close')">
    	<XIcon class="text-white w-8 h-8"/>
  	</button>
  </div>
</template>