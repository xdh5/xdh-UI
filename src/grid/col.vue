<template>
  <div
    class="x-col"
    :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value)
  keys.forEach(key => {
    if (!['span', 'offset'].indexOf(key) >= 0) {
      return false
    }
  })
  return true
}
export default {
  name: 'x-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: { type: Object, validator },
    sm: { type: Object, validator },
    md: { type: Object, validator },
    lg: { type: Object, validator },
    xl: { type: Object, validator }
  },
  methods: {
    createClasses (obj, str = '') {
      if (!obj) {
        return []
      }
      let array = []
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`)
      }
      return array
    }
  },
  computed: {
    gutter () {
      return this.$parent.gutter || 0
    },
    colClass () {
      let { span, offset, xs, sm, md, lg, xl } = this
      let createClasses = this.createClasses
      return [
        ...createClasses({ span, offset }),
        ...createClasses(xs, 'xs-'),
        ...createClasses(sm, 'sm-'),
        ...createClasses(md, 'md-'),
        ...createClasses(lg, 'lg-'),
        ...createClasses(xl, 'xl-')
      ]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>
<style scoped lang="less">
// 576 - 768 - 992 - 1200
// xs - sm - md - lg - xl
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));
  &.@{col-prefix}-@{counter}{
    width: (@counter / 24) * 100%;
  }
  &.offset-@{counter}{
    margin-left: (@counter / 24) * 100%;
  }
}
.x-col {
  @col-prefix: col;
  @offset-prefix: offset;
  .loop(24);
  @media (max-width: 575px) {
    @col-prefix: col-xs;
    @offset-prefix: offset-xs;
    .loop(24);
  }
  @media (min-width: 576px) {
    @col-prefix: col-sm;
    @offset-prefix: offset-sm;
    .loop(24);
  }
  @media (min-width: 768px) {
    @col-prefix: col-md;
    @offset-prefix: offset-md;
    .loop(24);
  }
  @media (min-width: 992px) {
    @col-prefix: col-lg;
    @offset-prefix: offset-lg;
    .loop(24);
  }
  @media (min-width: 1200px) {
    @col-prefix: col-xl;
    @offset-prefix: offset-xl;
    .loop(24);
  }
}
</style>
