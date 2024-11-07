<template>
  <div class="min-h-screen flex flex-col">
    <header class="h-[60px] flex items-center justify-center">头部</header>
    <main class="flex flex-1">
      <div class="w-[80px] border-t">左侧边栏</div>
      <div class="flex-1">
        <tiny-split class="main-split" v-model="split1" trigger-simple collapse-right-bottom three-areas>
          <template #left>
            <tiny-split v-model="split2" trigger-simple collapse-left-top three-areas>
              <template #left>
                <div class="split-content">内容A区</div>
              </template>
              <template #right>
                <div class="split-content">内容B区</div>
              </template>
            </tiny-split>
          </template>
          <template #right>
            <div class="split-content">内容C区</div>
          </template>
        </tiny-split>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const split1 = ref(0.8)
const split2 = ref(0.25)
</script>

<style scoped>
.main-split {
  border-radius: 0;
}

.split-content {
  height: 100%;
  width: 100%;
}
</style>
