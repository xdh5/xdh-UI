<template>
  <div class="x-pagination" :class="{hide: hideOnSinglePage === true && totalPage <= 1}">
    <span class="x-pagination-nav prev" :class="{ disabled: currentPage===1 }"
      @click="onClickPage(currentPage-1)">
      <x-icon name="left"></x-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="x-pagination-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="x-pagination-item">...</span>
      </template>
      <template v-else>
        <span class="x-pagination-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="x-pagination-nav next" :class="{disabled: currentPage===totalPage}"
      @click="onClickPage(currentPage+1)">
      <x-icon name="right"></x-icon>
    </span>
  </div>
</template>
<script>
import XIcon from './icon'
export default {
  name: 'x-pagination',
  components: { XIcon },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideOnSinglePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      function findPages(current, total) {
        if (current < 5) {
          return [1, 2, 3, 4, 5, total]
        } else if (current > total - 5) {
          return [1, total - 4, total - 3, total - 2, total - 1, total]
        }
        let pages = [
          1,
          total,
          current,
          current - 1,
          current - 2,
          current + 1,
          current + 2
        ]
        pages.filter(n => n >= 1 && n <= total)
        return pages.filter(n => n >= 1 && n <= total).sort((a, b) => a - b)
      }
      // 去除重复值
      function uniquePages(pages) {
        let set = new Set(pages)
        return [...set]
      }
      // 加入省略号
      function addSing(pages) {
        return pages.reduce((prev, current, index, array) => {
          prev.push(current)
          if (array[index + 1] && array[index + 1] - array[index] > 1) {
            prev.push('...')
          }
          return prev
        }, [])
      }
      return addSing(uniquePages(findPages(this.currentPage, this.totalPage)))
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    }
  }
}
</script>
<style scoped lang="less">
.x-pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  width: 20px;
  height: 20px;
  font-size: 12px;
  padding: 20px 0;
  &.hide {
    display: none;
  }
  &-separator {
    width: 50px;
    font-size: 14px;
  }
  &-item {
    min-width: 25px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    background: #f4f4f5;
    border-radius: 4px;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current {
      background: #409eff;
      color: white;
    }
    &:hover {
      color: #409eff;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #f4f4f5;
    height: 30px;
    width: 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      svg {
        fill: darken(gray, 10%);
      }
    }
  }
}
</style>
