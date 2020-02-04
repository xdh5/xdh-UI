<template>
<div>
  <x-pagination :totalPage="8" :currentPage.sync="page"></x-pagination>
</div>
</template>
<script>
import Pagination from '../../../src/components/pagination'

export default {
  name: 'toast-demo-1',
  data(){
    return {
      page: 1
    }
  },
  components:{
    'x-pagination': Pagination,
  }
}
</script>