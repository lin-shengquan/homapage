<script setup lang="ts">
import { Heart } from 'lucide-vue-next'

interface Story {
  id: string
  title: string
  date: string
  description: string
  images: string[]
}

defineProps<{
  story: Story
}>()
</script>

<template>
  <div class="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-warm-50 hover:border-warm-100">
    <!-- Image -->
    <div class="relative aspect-[4/3] overflow-hidden" v-if="story.images.length > 0">
      <img
        :src="story.images[0]"
        :alt="story.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="font-serif text-xl text-gray-800 mb-3 group-hover:text-warm-600 transition-colors">
        {{ story.title }}
      </h3>
      <p class="text-gray-500 leading-relaxed text-sm">
        {{ story.description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between mt-4 pt-4 border-t border-warm-50">
        <div class="flex items-center gap-2 text-warm-400">
          <Heart class="w-4 h-4" />
          <span class="text-sm">温馨回忆</span>
        </div>
      </div>
    </div>
  </div>
</template>