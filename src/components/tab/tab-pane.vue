<template>
  <div v-show="active === name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'x-tab-pane',
  data () {
    return {
      active: ''
    }
  },
  inject: ['eventBus'],
  props: {
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
  mounted () {
    this.eventBus.$on('selected', active => {
      this.active = active
    })
  }
}
</script>
