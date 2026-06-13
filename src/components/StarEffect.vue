<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// 星星颜色数组
const starColors = [
  '#FFD700', // 金色
  '#FF6B6B', // 红色
  '#4ECDC4', // 青色
  '#A855F7', // 紫色
  '#F97316', // 橙色
  '#22C55E', // 绿色
  '#3B82F6', // 蓝色
  '#EC4899', // 粉色
]

let starCount = 0
const maxStars = 50

const createStar = (x: number, y: number) => {
  if (starCount >= maxStars) return

  starCount++

  const star = document.createElement('div')
  star.className = 'magic-star'

  // 随机颜色
  const color = starColors[Math.floor(Math.random() * starColors.length)]

  // 随机大小
  const size = Math.random() * 10 + 5

  // 随机旋转角度
  const rotation = Math.random() * 360

  // 随机下落距离
  const fallDistance = Math.random() * 80 + 40

  // 随机横向偏移
  const drift = (Math.random() - 0.5) * 40

  star.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    pointer-events: none;
    z-index: 9999;
    animation: starFall 2s ease-out forwards;
    --fall-distance: ${fallDistance}px;
    --drift: ${drift}px;
    transform: rotate(${rotation}deg);
    filter: drop-shadow(0 0 3px ${color});
  `

  document.body.appendChild(star)

  // 动画结束后移除
  setTimeout(() => {
    star.remove()
    starCount--
  }, 2000)
}

let lastTime = 0
const throttleDelay = 50 // 限制生成频率

const handleMouseMove = (e: MouseEvent) => {
  const now = Date.now()
  if (now - lastTime < throttleDelay) return
  lastTime = now

  createStar(e.clientX, e.clientY)
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <!-- 星星特效通过JavaScript动态创建，不需要模板内容 -->
</template>

<style>
@keyframes starFall {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(var(--rotation, 0deg)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(var(--fall-distance, 100px)) translateX(var(--drift, 0px)) rotate(calc(var(--rotation, 0deg) + 180deg)) scale(0.3);
  }
}
</style>