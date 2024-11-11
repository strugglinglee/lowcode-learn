<template>
  <div class="sidebar-tabs">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('1')
const tabsList = ref([
  {
    name: '1',
    title: '1'
  },
  {
    name: '2',
    title: '2'
  },
  {
    name: '3',
    title: '3'
  }
])
</script>

<style scoped>
.sidebar-tabs {
  min-height: 250px;
}
</style>
