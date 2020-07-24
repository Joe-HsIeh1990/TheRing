<template>
  <nav class="dropdown">
    <button
      id="dropdownMenuButton"
      class="btn bg-black dropdown-toggle text-white"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      頁面
    </button>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
    >
      <a
        v-for=" page in pages.total_pages"
        :key="page"
        class="dropdown-item"
        :pages="page"
        :class="{ active : pages.current_page === page }"
        href="#"
        @click.prevent="getPages(page)"
      >{{ page }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PaginationPhone',
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getPages(page) {
      this.$store.dispatch("productsmodules/GetProducts", page);
    }
  }
};
</script>

<style>
</style>