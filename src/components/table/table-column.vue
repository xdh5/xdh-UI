<template>
  <div class="x-table-column">
  </div>
</template>

<script>
export default {
  name: 'x-table-column',
  props: {
    lable: {
      type: String,
      required: true
    },
    prop: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator (value) {
        return ['selection', 'index'].indexOf(value) >= 0
      }
    },
    width: {
      type: Number
    },
    sortable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
