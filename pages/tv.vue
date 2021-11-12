<script setup>
import Header from '../components/home/Header'
import Trending from '../components/home/Trending'
import TopRated from '../components/home/TopRated'
import Now from '../components/home/Now'

const mediaType = "tv"
</script>

<template>
   <div class="py-4 px-6">
      <Header/>
      <Trending :mediaType="mediaType"/>
      <TopRated :mediaType="mediaType"/>
      <Now :mediaType="mediaType"/>
   </div>
</template>