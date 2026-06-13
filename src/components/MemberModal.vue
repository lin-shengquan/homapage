<script setup lang="ts">
import { X, Heart, Briefcase, Star } from 'lucide-vue-next'

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
  member: FamilyMember | null
  visible: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <!-- Modal backdrop -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible && member"
        class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <!-- Modal content -->
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="visible && member"
            class="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden"
          >
            <!-- Header with avatar -->
            <div class="relative bg-gradient-to-b from-warm-50 to-white pt-8 pb-6">
              <button
                @click="$emit('close')"
                class="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X class="w-5 h-5" />
              </button>

              <img
                :src="member.avatar"
                :alt="member.name"
                class="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
              />
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
              <h2 class="font-serif text-2xl text-gray-800 text-center mb-2">
                {{ member.name }}
              </h2>
              <p class="text-warm-400 text-center mb-4">
                {{ member.role }}
              </p>

              <!-- Description -->
              <p class="text-gray-500 text-sm leading-relaxed mb-6 text-center">
                {{ member.description }}
              </p>

              <!-- Info cards -->
              <div class="space-y-3">
                <!-- Occupation -->
                <div class="flex items-center gap-3 p-3 bg-warm-50 rounded-lg">
                  <Briefcase class="w-5 h-5 text-warm-400" />
                  <div>
                    <span class="text-xs text-gray-400">工作/身份</span>
                    <p class="text-gray-700 font-medium">{{ member.occupation }}</p>
                  </div>
                </div>

                <!-- Hobbies -->
                <div class="flex items-start gap-3 p-3 bg-gold-300/10 rounded-lg">
                  <Star class="w-5 h-5 text-gold-400 mt-0.5" />
                  <div>
                    <span class="text-xs text-gray-400">兴趣爱好</span>
                    <div class="flex flex-wrap gap-2 mt-1">
                      <span
                        v-for="hobby in member.hobbies"
                        :key="hobby"
                        class="px-2 py-1 bg-gold-300/20 rounded-full text-sm text-gold-600"
                      >
                        {{ hobby }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-center gap-2 mt-6 text-warm-300">
                <Heart class="w-4 h-4" />
                <span class="text-sm">我们家的温暖成员</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>