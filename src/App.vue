<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import BarItem from './components/BarItem.vue';
import MusicPlayer from './components/MusicPlayer.vue';

import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia'
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})

let openMenu = ref(false)
</script>

<template>
  <div>
    <div class="
    w-[calc(100%-240px)]
    h-[60px]
    fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex
    items-center justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black
          p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="'30'" />
        </button>
        <button type="button" class="rounded-full bg-black
          p-[1px] ml-4 cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="'30'" />
        </button>
      </div>
      <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-1 mr-8 mt-0.3 cursor-pointer">
        <div class="flex items-center">
          <img class="rounded-full" width="27"
            src="https://yt3.ggpht.com/yti/ANjgQV9I9w_Peh9jMFh8TGpIUI4dTZBnJ7IY2bzFogsRx7WNEw7z=s88-c-k-c0x00ffffff-no-rj">
          <div class="text-white text-[13px] ml-1.5 font-semibold">Thy Le</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
        </div>
      </button>
      <span v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>
    <div id="SideNav" 
      class="h-[100%] p-4 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <div class="text-white text-[20px] ml-1.5 font-normal flex items-center">
          <img width="40" src="./assets/logopng.png" class="mr-2">Rewindify</div>
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <BarItem class="ml-[15px]" iconString="home" iconSize="23" pageUrl="/" name="Home" />
        </RouterLink>
        <RouterLink to="/search">
          <BarItem class="ml-[15px]" iconString="search" iconSize="24" pageUrl="/search" name="Search" />
        </RouterLink>
        <RouterLink to="/library">
          <BarItem class="ml-[16px]" iconString="library" iconSize="23" pageUrl="/library" name="Library" />
        </RouterLink>
        <div class="py-3.5"></div>
        <BarItem class="ml-[15px]" iconString="playlist" iconSize="24" pageUrl="/playlist" name="Create Playlist" />
        <BarItem class="ml-[15px]" iconString="liked" iconSize="27" pageUrl="/liked" name="Liked Songs" />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul class="ml-[15px] py-4">
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
      </ul>
    </div>
  </div>
  <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>
  <MusicPlayer v-if="currentTrack"/>
</template>