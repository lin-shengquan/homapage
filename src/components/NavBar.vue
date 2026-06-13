<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Home, Users, BookOpen, Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 group" @click="closeMenu">
          <Home class="w-6 h-6 text-warm-500 group-hover:text-warm-600 transition-colors" />
          <span class="font-serif font-semibold text-lg text-gray-800 group-hover:text-warm-600 transition-colors">
            我的家
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            to="/"
            class="flex items-center gap-2 text-gray-600 hover:text-warm-500 transition-colors font-medium"
            active-class="text-warm-500"
          >
            <Home class="w-4 h-4" />
            <span>首页</span>
          </RouterLink>
          <RouterLink
            to="/family-tree"
            class="flex items-center gap-2 text-gray-600 hover:text-warm-500 transition-colors font-medium"
            active-class="text-warm-500"
          >
            <Users class="w-4 h-4" />
            <span>家谱树</span>
          </RouterLink>
          <RouterLink
            to="/stories"
            class="flex items-center gap-2 text-gray-600 hover:text-warm-500 transition-colors font-medium"
            active-class="text-warm-500"
          >
            <BookOpen class="w-4 h-4" />
            <span>家庭趣事</span>
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-warm-50 transition-colors"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="md:hidden py-4 border-t border-warm-100 animate-fade-in"
      >
        <div class="flex flex-col gap-4">
          <RouterLink
            to="/"
            class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-warm-50 hover:text-warm-500 transition-colors"
            active-class="bg-warm-50 text-warm-500"
            @click="closeMenu"
          >
            <Home class="w-5 h-5" />
            <span class="font-medium">首页</span>
          </RouterLink>
          <RouterLink
            to="/family-tree"
            class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-warm-50 hover:text-warm-500 transition-colors"
            active-class="bg-warm-50 text-warm-500"
            @click="closeMenu"
          >
            <Users class="w-5 h-5" />
            <span class="font-medium">家谱树</span>
          </RouterLink>
          <RouterLink
            to="/stories"
            class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-warm-50 hover:text-warm-500 transition-colors"
            active-class="bg-warm-50 text-warm-500"
            @click="closeMenu"
          >
            <BookOpen class="w-5 h-5" />
            <span class="font-medium">家庭趣事</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>