<template>
<div class="x-tab-item"
    @click="handleClick"
    :class="classes"
    :data-name="name">
  {{lable}}
  <div class="line"></div>
</div>
</template>
<script>
export default {
  name: 'x-tab-item',
  props: {
    active: {
      type: String
    },
    lable: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active === this.name,
        disabled: this.disabled
      }
    }
  },
  methods: {
    // 通知父组件改变
    handleClick () {
      if (this.disabled) {
        return
      }
      this.$emit('selected', this.name)
    }
  }
}
</script>
<style lang="less" scoped>
@blue:#409eff;
.x-tab-item{
  padding: 0 20px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  &:hover{
    color: @blue
  }
  &.active {
    color: @blue;
    font-weight: bold;
    .line{
      height: 2px;
      width: 100%;
      background-color: @blue;
      left: 0;
      top: 30px;
      position: absolute;
    }
  }
  &.disabled {
    color: gray;
    cursor: not-allowed;
  }
}
</style>
