<template>
  <div class="cascaderItem" :style="{height: height + 'px'}">
    <div class="left">
      <div class="label" v-for="item in options" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
        </span>
      </div>
    </div>
    <div class="right" v-if="nextOption">
      <x-cascader-items ref="right" :options="nextOption" :height="height"
        :level="level+1" :selected="selected"
        @update:selected="onUpdateSelected"></x-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'x-cascader-items',
  components: { Icon },
  props: {
    // 下拉框选项
    options: {
      type: Array
    },
    // 下拉框的高度
    height: {
      type: [String, Number]
    },
    // 被选中的值
    selected: {
      type: Array,
      default: () => []
    },
    // 第几层 children
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // 下一层下拉框选项, 判断本层是否还有children
    // eslint-disable-next-line vue/return-in-computed-property
    nextOption() {
      if (this.selected[this.level]) {
        // 被选中的本层选项
        let selected = this.options.filter(
          item => item.name === this.selected[this.level].name
        )
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children
        }
      }
    }
  },
  methods: {
    // 箭头是否可见
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children
    },
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style scoped lang="less">
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid #eeeeee;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: #eeeeee;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.5);
      }
    }
  }
}
</style>