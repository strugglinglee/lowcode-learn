type ComponentType = 'TINY-UI' | 'NORMAL'
interface Component {
  /**
   * 组件唯一标识
   */
  id: number
  /**
   * 组件类型
   */
  type: ComponentType
  /**
   * 组件名称
   */
  name: string
  /**
   * 组件标题
   */
  title: string
  /**
   * 组件属性
   */
  props: any
  /**
   * 子组件
   */
  children?: Component[]
}
