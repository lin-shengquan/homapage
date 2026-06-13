<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Users, BookOpen, Heart, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-cream-50 to-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-warm-100 rounded-full opacity-50 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-300/20 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <!-- Title -->
        <div class="animate-slide-up">
          <Sparkles class="w-12 h-12 text-gold-400 mx-auto mb-6 animate-float" />
          <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl text-gray-800 mb-4">
            我的家
          </h1>
          <p class="text-xl sm:text-2xl text-gray-500 font-light mb-2">
            温馨的家庭展示网站
          </p>
          <p class="text-lg text-warm-400">
            记录每一个温暖的瞬间，珍藏每一份珍贵的回忆
          </p>
        </div>

        <!-- Decorative heart -->
        <div class="mt-12 animate-fade-in" style="animation-delay: 0.3s;">
          <Heart class="w-8 h-8 text-warm-300 mx-auto animate-float" style="animation-delay: 0.5s;" />
        </div>
      </div>
    </section>

    <!-- Quick Entry Cards -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Family Tree Card -->
          <RouterLink
            to="/family-tree"
            class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-warm-100 hover:border-warm-200 overflow-hidden"
          >
            <!-- Card background decoration -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-warm-50 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div class="relative">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 rounded-xl bg-warm-100 flex items-center justify-center group-hover:bg-warm-200 transition-colors">
                  <Users class="w-7 h-7 text-warm-500" />
                </div>
                <h2 class="font-serif text-2xl text-gray-800 group-hover:text-warm-600 transition-colors">
                  家谱树
                </h2>
              </div>
              <p class="text-gray-500 leading-relaxed">
                以树状结构展示我们家族的三代成员，了解每个人的故事和爱好。
              </p>
              <div class="mt-6 flex items-center gap-2 text-warm-400 group-hover:text-warm-500 transition-colors">
                <span class="text-sm font-medium">点击探索</span>
                <Sparkles class="w-4 h-4" />
              </div>
            </div>
          </RouterLink>

          <!-- Stories Card -->
          <RouterLink
            to="/stories"
            class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-warm-100 hover:border-warm-200 overflow-hidden"
          >
            <!-- Card background decoration -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gold-300/10 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>

            <div class="relative">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 rounded-xl bg-gold-300/20 flex items-center justify-center group-hover:bg-gold-300/30 transition-colors">
                  <BookOpen class="w-7 h-7 text-gold-500" />
                </div>
                <h2 class="font-serif text-2xl text-gray-800 group-hover:text-gold-500 transition-colors">
                  家庭趣事
                </h2>
              </div>
              <p class="text-gray-500 leading-relaxed">
                按时间线浏览我们家的温馨故事，重温那些美好的家庭时光。
              </p>
              <div class="mt-6 flex items-center gap-2 text-gold-400 group-hover:text-gold-500 transition-colors">
                <span class="text-sm font-medium">点击阅读</span>
                <Sparkles class="w-4 h-4" />
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-cream-100">
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-gray-400 text-sm">
          用爱与温暖编织的家庭故事
        </p>
        <p class="text-warm-300 text-xs mt-2">
          © 2024 我的家 · 家庭展示网站
        </p>
      </div>
    </footer>
  </div>
</template>