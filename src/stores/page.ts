import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => {
  const pageInfo = ref<PageJson>({
    title: '',
    type: 'page',
    body: [],
  })

  const addBodyItem = (item: any, insertIndex?: number) => {
    if (!item) return
    pageInfo.value.body = [...pageInfo.value.body, { ...item, id: new Date().getTime() }]
  }

  return { pageInfo, addBodyItem }
})
