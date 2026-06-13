<script setup lang="ts">
import { Heart } from 'lucide-vue-next'

interface FamilyMember {
  id: string
  name: string
  generation: number
  role: string
  occupation: string
  hobbies: string[]
  avatar: string
  parentId: string | null
  spouseId: string | null
  description: string
}

defineProps<{
  member: FamilyMember
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    class="group relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-warm-50 hover:border-warm-100 w-[140px] sm:w-[160px]"
    @click="$emit('click')"
  >
    <!-- Avatar -->
    <div class="relative mb-3">
      <img
        :src="member.avatar"
        :alt="member.name"
        class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover ring-2 ring-warm-100 group-hover:ring-warm-200 transition-all"
      />
      <div class="absolute inset-0 rounded-full bg-warm-400/0 group-hover:bg-warm-400/10 transition-colors"></div>
    </div>

    <!-- Name -->
    <h3 class="font-serif text-lg text-gray-800 text-center mb-1 group-hover:text-warm-600 transition-colors">
      {{ member.name }}
    </h3>

    <!-- Role -->
    <p class="text-sm text-gray-400 text-center">
      {{ member.role }}
    </p>

    <!-- Hover indicator -->
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <Heart class="w-4 h-4 text-warm-400 animate-pulse" />
    </div>
  </div>
</template>