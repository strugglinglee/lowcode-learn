import { ref } from 'vue'
import { defineStore } from 'pinia'
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useMaterialStore = defineStore('material', () => {
  const components = ref<Component[]>([
    {
      id: 1,
      type: 'TINY-UI',
      name: 'TinyButton',
      title: '按钮',
      props: {
        type: 'primary',
        text: '按钮文本',
      },
    },
    {
      id: 2,
      type: 'TINY-UI',
      name: 'TinyButtonGroup',
      title: '按钮组',
      props: {
        data: [
          { text: 'Button1', value: 'Button1' },
          { text: 'Button2', value: 'Button2' },
          { text: 'Button3', value: 'Button3' },
        ],
      },
    },
    {
      id: 3,
      type: 'TINY-UI',
      name: 'TinyDivider',
      title: '分割线',
      props: {},
    },
    {
      id: 4,
      type: 'TINY-UI',
      name: 'TinyLink',
      title: '链接',
      props: { value: '链接' },
    },
    {
      id: 5,
      type: 'TINY-UI',
      name: 'TinyActionMenu',
      title: '动作菜单',
      props: {
        options: [
          {
            label: '远程登陆',
          },
          {
            label: '开机',
          },
          {
            label: '关机',
          },
          {
            label: '重启',
            divided: true,
          },
          {
            label: '网络设置',
            children: [{ label: '更改安全组' }, { label: '切换VPC', divided: true }],
          },
        ],
      },
    },
    {
      id: 6,
      type: 'TINY-UI',
      name: 'TinyAnchor',
      title: '锚点',
      props: {
        links: [
          {
            key: 'demonstrate',
            link: '#demonstrate',
            title: '演示',
            children: [
              {
                key: 'basic-usage',
                link: '#basic-usage',
                title: '基本用法',
              },
              {
                key: 'is-affix',
                link: '#is-affix',
                title: '固定模式',
              },
              {
                key: 'set-container',
                link: '#set-container',
                title: '滚动容器',
              },
              {
                key: 'on-change',
                link: '#change',
                title: 'change 事件',
              },
            ],
          },
          {
            key: 'api',
            link: '#API',
            title: 'API',
          },
        ],
      },
    },
    {
      id: 7,
      type: 'TINY-UI',
      name: 'TinyBreadcrumb',
      title: '面包屑',
      props: {
        options: [
          {
            label: '首页',
            to: { path: '#' },
          },
          {
            label: '产品',
            to: { path: '#' },
          },
          {
            label: '软件',
            replace: true,
          },
        ],
      },
    },
    {
      id: 8,
      type: 'TINY-UI',
      name: 'TinyDropdown',
      title: '下拉菜单',
      props: {
        menuOptions: [
          {
            label: '老友粉',
            disabled: true,
          },
          {
            label: '狮子头',
            divided: true,
          },
          {
            label: '黄金糕',
            divided: true,
          },
        ],
      },
    },
  ])

  const curDragMaterial = ref<Component | null>(null)

  const setCurDragMaterial = (index: number, type: string = 'component') => {
    if (type === 'component') {
      curDragMaterial.value = components.value[index]
    }
  }

  return { components, curDragMaterial, setCurDragMaterial }
})
