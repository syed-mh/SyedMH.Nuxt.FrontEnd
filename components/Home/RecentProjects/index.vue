<template>
  <section class="grid center">
    <h2 class="section-title">Recent Projects</h2>
    <container-projects :projects="projects" />
    <nuxt-link class="primary-button center" to="/projects">View All</nuxt-link>
  </section>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" src="./index.scss" scoped />
