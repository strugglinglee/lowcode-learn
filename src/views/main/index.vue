<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部 -->
    <Header class="h-[60px] flex items-center justify-center"></Header>
    <main class="flex flex-1">
      <!-- 左侧bar -->
      <Sidebar class="w-[60px] border-[#c2c2c2] border-t border-b border-l"></Sidebar>
      <div class="flex-1">
        <tiny-split class="main-split" v-model="splitConfig.left" left-top-min="300px" right-bottom-min="100px"
          trigger-simple collapse-right-bottom three-areas>
          <template #left>
            <tiny-split v-model="splitConfig.right" left-top-min="200px" right-bottom-min="100px" trigger-simple
              collapse-left-top three-areas>
              <template #left>
                <!-- 物料展示区域 -->
                <Material></Material>
              </template>
              <template #right>
                <!-- 中心区域 -->
                <Center></Center>
              </template>
            </tiny-split>
          </template>
          <template #right>
            <!-- 设置器 -->
            <Setter></Setter>
          </template>
        </tiny-split>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Setter from './components/setter/index.vue'
import Sidebar from './components/sidebar/index.vue'
import Center from './components/center/index.vue'
import Header from './components/header/index.vue'
import Material from './components/material/index.vue'
import { ref } from 'vue'

const splitConfig = ref({
  left: 0.8,
  right: 0.25,
})
</script>

<style scoped>
.main-split {
  border-radius: 0;
}
</style>
