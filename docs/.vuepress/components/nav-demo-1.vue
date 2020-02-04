<template>
  <x-nav v-model="active">
    <x-nav-item name="a">选项1</x-nav-item>
    <x-nav-item name="b">选项2</x-nav-item>
    <x-sub-nav name="c">
      <template slot="title">选项3</template>
      <x-nav-item name="d">选项3.1</x-nav-item>
      <x-sub-nav name="e">
        <template slot="title">选项3.2</template>
        <x-nav-item name="f">选项3.2.1</x-nav-item>
      </x-sub-nav>
    </x-sub-nav>
  </x-nav>
</template>
<script>
import Nav from '../../../src/components/nav/nav'
import NavItem from '../../../src/components/nav/nav-item'
import SubNav from '../../../src/components/nav/sub-nav'
export default {
  name: 'cascader-demo-1',
  components: {
    'x-nav': Nav,
    'x-nav-item': NavItem,
    'x-sub-nav': SubNav
  },
  data() {
    return {
      active: 'a'
    }
  }
}
</script>