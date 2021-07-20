<template>
  <container-projects :projects="projects" />
</template>
<script>
export default {
  layout: 'project-archive',
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    const _projects = await fetch(
      `${process.env.API_BASE_URL}/projects?_sort=published_at:DESC`
    ).then((_response) => _response.json())

    this.projects = _projects
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
