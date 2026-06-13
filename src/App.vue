<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import StarEffect from './components/StarEffect.vue'
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 星星特效 -->
    <StarEffect />

    <!-- 页面内容 -->
    <RouterView v-slot="{ Component }">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>