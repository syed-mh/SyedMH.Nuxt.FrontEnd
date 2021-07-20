<template>
  <aside>
    <button
      ref="toggle"
      type="button"
      @click="toggleArchives"
      @keypress="toggleArchives"
    >
      Filter Projects
    </button>
    <div ref="sidebar" class="grid">
      <projects-sidebar-widget
        v-for="widget in widgets"
        :key="widget.slug"
        :widget="widget"
      />
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    widgets: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleArchives() {
      this.$refs.toggle.classList.toggle('active')
      if (
        !this.$refs.sidebar.style.height ||
        this.$refs.sidebar.style.height === '0px'
      ) {
        this.$refs.sidebar.style.height = `${this.$refs.sidebar.scrollHeight}px`
      } else {
        this.$refs.sidebar.style.height = 0
      }
    },
  },
}
</script>
<style lang="scss" scope src="./index.scss" />
