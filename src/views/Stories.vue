<script setup lang="ts">
import { Calendar, Sparkles } from 'lucide-vue-next'
import storiesData from '@/data/stories.json'
import StoryCard from '@/components/StoryCard.vue'

interface Story {
  id: string
  title: string
  date: string
  description: string
  images: string[]
}

const stories = storiesData as Story[]

// 按日期排序（最新的在前）
const sortedStories = [...stories].sort((a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()
)

// 格式化日期
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-cream-50 to-white pt-20">
    <!-- Header -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <Sparkles class="w-10 h-10 text-gold-400 mx-auto mb-4 animate-float" />
        <h1 class="font-serif text-4xl sm:text-5xl text-gray-800 mb-4 animate-slide-up">
          家庭趣事
        </h1>
        <p class="text-gray-500 text-lg animate-fade-in" style="animation-delay: 0.2s;">
          按时间线浏览我们家的温馨故事
        </p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-warm-200 transform md:-translate-x-1/2"></div>

          <!-- Stories -->
          <div class="space-y-12">
            <div
              v-for="(story, index) in sortedStories"
              :key="story.id"
              class="relative animate-fade-in"
              :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
            >
              <!-- Timeline dot -->
              <div class="absolute left-4 md:left-1/2 w-3 h-3 bg-warm-400 rounded-full transform -translate-x-1/2 mt-8 ring-4 ring-warm-100"></div>

              <!-- Date label -->
              <div class="flex justify-center mb-4">
                <div class="flex items-center gap-2 px-4 py-2 bg-warm-50 rounded-full text-warm-600 text-sm font-medium">
                  <Calendar class="w-4 h-4" />
                  <span>{{ formatDate(story.date) }}</span>
                </div>
              </div>

              <!-- Story card -->
              <div class="ml-12 md:ml-0">
                <StoryCard :story="story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-cream-100 mt-12">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-400 text-sm">
          每一个故事，都是我们家的珍贵记忆
        </p>
      </div>
    </footer>
  </div>
</template>