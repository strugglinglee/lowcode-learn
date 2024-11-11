<template>
  <div class="content" @drop="handleDrop" @dragover="handleDragOver">
    <component v-for="component in pageStore.pageInfo.body" :is="getComponent(component)" v-bind="component.props">
    </component>
  </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/material';
import { usePageStore } from '@/stores/page';
import { onMounted, defineAsyncComponent } from 'vue';

const materialStore = useMaterialStore()
const pageStore = usePageStore()

const getComponent = (component: any) => {
  if (component.type === 'TINY-UI') {
    return defineAsyncComponent(() => import('@opentiny/vue').then(module => module[component.name as keyof typeof module]))
  }
  return null
}
onMounted(() => {
})
const handleDrop = (e: any) => {
  e.preventDefault()
  e.stopPropagation()
  pageStore.addBodyItem(materialStore.curDragMaterial)
}
// 这个事件使得元素能被复制到此区域 激活ondrop
const handleDragOver = (e: any) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}
</script>

<style scoped>
.content {
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}
</style>
