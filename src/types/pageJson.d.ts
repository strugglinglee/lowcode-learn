type JsonType = 'page' | 'tpl' | 'flex' | 'select'

interface JsonItem {
  type: JsonType
  name: string
  props: Record<string, unknown>
  style?: StylePropertyMap
  id: string
  items?: JsonItem[]
}

interface PageJson {
  type: JsonType
  title: string
  body: JsonItem[]
}
