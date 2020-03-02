<template>
  <div class="x-table-wrapper" ref="wrapper">
    <div v-if="loading" class="x-table-loading">
      <x-icon name="loading" />
    </div>
    <div ref="tableWrapper">
      <table class="x-table" :class="{bordered, compact, striped: striped}" ref="table">
        <thead>
          <tr>
            <th v-if="type" :style="{width: '50px'}" class="x-table-center">
              <span v-if="type === 'index'">#</span>
              <input v-else-if="type === 'selection'" type="checkbox" @change="allChecked"
                ref="allChecked" :checked="isAllchecked" />
            </th>
            <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.prop">
              <div class="x-table-header">
                {{column.lable}}
                <span v-if="column.sortable" class="x-table-sorter">
                  <x-icon id="asc" name="asc" @click="changeOrder(column.lable, 'asc')"
                    :class="{active: sortedItem.lable === column.lable && sortedItem.order === 'asc'}" />
                  <x-icon id="desc" name="desc" @click="changeOrder(column.lable, 'desc')"
                    :class="{active: sortedItem.lable === column.lable && sortedItem.order === 'desc'}" />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data" :key="index">
            <template>
              <td v-if="type" :style="{width: '50px'}" class="x-table-center">
                <input v-if="type === 'selection'" type="checkbox"
                  @change="onChangeItem(item, $event)" :checked="isSelected(item.id)" />
                <span v-else-if="type === 'index'">{{index+1}}</span>
              </td>
            </template>
            <template v-for="column in columns">
              <td :style="{width: column.width + 'px'}" :key="column.prop">
                {{item[column.prop]}}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import XIcon from '../icon'
export default {
  components: {
    XIcon
  },
  name: 'x-table',
  data() {
    return {
      columns: [], // column props

      sortedItem: { order: undefined, lable: undefined }, // 排序相关

      selectedItems: [], // 多选
      isAllchecked: false,

      type: undefined // selection, index
    }
  },
  props: {
    // 数据源
    data: {
      type: Array,
      required: true
    },
    // 斑马线
    striped: {
      type: Boolean,
      default: false
    },
    // 紧密
    compact: {
      type: Boolean,
      default: false
    },
    // 边框
    bordered: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let slots = this.$slots.default.filter(slot => {
      return slot.componentOptions
    })
    let type = slots[0].componentOptions.propsData.type
    if (type) {
      this.type = type
      slots = slots.slice(1)
    }
    this.columns = slots.map(node => {
      let { lable, prop, width, sortable } = node.componentOptions.propsData
      if (sortable === '') sortable = true
      return { lable, prop, width, sortable }
    })
  },
  watch: {
    // 控制全选按钮框样式
    selectedItems(items) {
      let id = this.data.map(value => value.id).filter(value => value)
      if (id.length < this.data.length) {
        console.warn("The key 'id' must in data when columns is sortable.")
        return
      } else if ([...new Set(id)].length < this.data.length) {
        console.warn("The key 'id' must be unique")
        return
      }
      this.$refs.allChecked.indeterminate = false
      if (items.length === 0) {
        this.isAllchecked = false
      } else if (items.length === this.data.length) {
        this.isAllchecked = true
      } else {
        this.$refs.allChecked.indeterminate = true
      }
      this.$emit('selection-change', this.selectedItems)
    }
  },
  methods: {
    // sorted 排序相关
    changeOrder(lable, order) {
      if (this.sortedItem.order === order) {
        this.sortedItem.order = undefined
      } else {
        this.sortedItem.lable = lable
        this.sortedItem.order = order
        this.$emit('sort-change', lable, order)
      }
    },
    // selection 相关
    // 全选按钮
    allChecked(e) {
      this.isAllchecked = !this.isAllchecked
      this.selectedItems = this.isAllchecked ? this.data : []
    },
    // 单个被选改变selectedItems
    onChangeItem(item, e) {
      let selected = e.target.checked
      if (selected) {
        this.selectedItems.push(item)
      } else {
        this.selectedItems = this.selectedItems.filter(i => i.id !== item.id)
      }
    },
    // 单个item是否被选
    isSelected(id) {
      return this.selectedItems.map(i => i.id).indexOf(id) >= 0
    }
  }
}
</script>

<style scoped lang="less">
.x-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
  th {
    color: #909399;
    border-top: 1px solid #aaaaaa;
  }
  &.bordered {
    border: 1px solid #aaaaaa;
    td,
    th {
      border: 1px solid #aaaaaa;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid #aaaaaa;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: #fafafa !important;
        }
      }
    }
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      fill: grey;
      &.active {
        fill: #1989fa;
      }
      &:first-child {
        position: relative;
        bottom: -1px;
      }
      &:nth-child(2) {
        position: relative;
        top: -1px;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-wrapper {
    position: relative;
    overflow: auto;
  }
  &-loading {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    svg {
      width: 50px;
      height: 50px;
      fill: #aaaaaa;
    }
  }
  &-center {
    text-align: center;
  }
}
</style>
