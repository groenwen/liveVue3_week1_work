<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled : !pages.has_pre}">
          <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="emitPages(pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
      </li>
      <li class="page-item" v-for="item in pages.total_pages"
      :key="item" :class="{ active : pages.current_page === item }">
        <a class="page-link"  href="#" @click.prevent="emitPages(item)">{{ item }}</a>
      </li>
      <li class="page-item" :class="{disabled : !pages.has_next}">
          <a class="page-link" href="#" aria-label="Next"
          @click.prevent="emitPages(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    emitPages (item) {
      this.$emit('emit-pages', item)
    }
  }
}
</script>
