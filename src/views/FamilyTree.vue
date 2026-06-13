<script setup lang="ts">
import { ref } from 'vue'
import familyData from '@/data/family.json'
import FamilyMember from '@/components/FamilyMember.vue'
import MemberModal from '@/components/MemberModal.vue'

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

const members = familyData as FamilyMember[]
const selectedMember = ref<FamilyMember | null>(null)
const showModal = ref(false)

const openModal = (member: FamilyMember) => {
  selectedMember.value = member
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedMember.value = null
}

// 按辈分分组
const generation1 = members.filter(m => m.generation === 1)
const generation2 = members.filter(m => m.generation === 2)
const generation3 = members.filter(m => m.generation === 3)

// 获取辈分标签
const getGenerationLabel = (gen: number) => {
  switch (gen) {
    case 1: return '第一代'
    case 2: return '第二代'
    case 3: return '第三代'
    default: return ''
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-cream-50 to-white pt-20">
    <!-- Header -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="font-serif text-4xl sm:text-5xl text-gray-800 mb-4 animate-slide-up">
          家谱树
        </h1>
        <p class="text-gray-500 text-lg animate-fade-in" style="animation-delay: 0.2s;">
          点击成员卡片查看详细信息
        </p>
      </div>
    </section>

    <!-- Family Tree -->
    <section class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Generation 1 -->
        <div class="mb-12 animate-fade-in" style="animation-delay: 0.3s;">
          <div class="text-center mb-6">
            <span class="inline-block px-4 py-2 bg-warm-100 rounded-full text-warm-600 font-medium">
              {{ getGenerationLabel(1) }}
            </span>
          </div>
          <div class="flex justify-center">
            <div class="flex gap-8">
              <FamilyMember
                v-for="member in generation1"
                :key="member.id"
                :member="member"
                @click="openModal(member)"
              />
            </div>
          </div>
        </div>

        <!-- Connection Line -->
        <div class="flex justify-center mb-8">
          <div class="w-px h-12 bg-warm-200"></div>
        </div>

        <!-- Generation 2 -->
        <div class="mb-12 animate-fade-in" style="animation-delay: 0.4s;">
          <div class="text-center mb-6">
            <span class="inline-block px-4 py-2 bg-warm-100 rounded-full text-warm-600 font-medium">
              {{ getGenerationLabel(2) }}
            </span>
          </div>
          <div class="flex justify-center flex-wrap gap-6 md:gap-8">
            <FamilyMember
              v-for="member in generation2"
              :key="member.id"
              :member="member"
              @click="openModal(member)"
            />
          </div>
        </div>

        <!-- Connection Line -->
        <div class="flex justify-center mb-8">
          <div class="w-px h-12 bg-warm-200"></div>
        </div>

        <!-- Generation 3 -->
        <div class="animate-fade-in" style="animation-delay: 0.5s;">
          <div class="text-center mb-6">
            <span class="inline-block px-4 py-2 bg-gold-300/20 rounded-full text-gold-500 font-medium">
              {{ getGenerationLabel(3) }}
            </span>
          </div>
          <div class="flex justify-center gap-8">
            <FamilyMember
              v-for="member in generation3"
              :key="member.id"
              :member="member"
              @click="openModal(member)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-cream-100 mt-12">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-400 text-sm">
          我们的家，三代人的温暖故事
        </p>
      </div>
    </footer>

    <!-- Member Modal -->
    <MemberModal
      :member="selectedMember"
      :visible="showModal"
      @close="closeModal"
    />
  </div>
</template>