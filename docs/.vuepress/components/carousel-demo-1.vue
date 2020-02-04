<template>
  <x-carousel :autoPlay="false">
    <x-carousel-item name="a">
      <div class="demo">1</div>
    </x-carousel-item>
    <x-carousel-item name="b">
      <div class="demo">2</div>
    </x-carousel-item>
    <x-carousel-item name="c">
      <div class="demo">3</div>
    </x-carousel-item>
  </x-carousel>
</template>
<script>
import Carousel from '../../../src/components/carousel/carousel'
import CarouselItem from '../../../src/components/carousel/carousel-item'

export default {
  name: 'carousel-demo-1',
  components: {
    'x-carousel': Carousel,
    'x-carousel-item':CarouselItem
  }
}
</script>
<style lang="less" scoped>
.demo{
  width: 100%;
  height: 200px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>