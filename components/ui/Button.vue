<script setup>
import Spinner from '../Spinner'

const props = defineProps({ isLoading: Boolean })
</script>

<template>
	<button class="px-4 py-1 grid place-items-center text-white font-medium bg-blue-500 rounded-md">
		<Spinner v-if="props.isLoading"/>
		<slot v-else></slot>
	</button>
</template>