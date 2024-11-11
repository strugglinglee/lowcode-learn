<template>
  <div class="list" @dragstart="handleDragStart">
    <div class="item" v-for="(item, index) in materialStore.components" draggable="true" :key="index"
      :data-index="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/material';

const materialStore = useMaterialStore()
const handleDragStart = (e: any) => {
  materialStore.setCurDragMaterial(e.target.dataset.index)
}
</script>

<style scoped>
.list {
  padding-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 100px;
  height: 36px;
  margin-top: 8px;
  border: 1px solid #ddd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border-radius: 8px;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
}
</style>
