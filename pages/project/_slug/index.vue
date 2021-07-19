<template>
  <main class="grid boxed">
    <page-title :title="project.title" />
    <project-opener
      :image="project.featuredImage.formats.large.url"
      :credit="project.photoCredit"
      :alt="project.title"
    />
    <project-overview
      :details="project.details"
      :repo="project.repo"
      :url="project.url"
      :technologies="project.technologies"
      :project-category="project.project_category"
      :project-type="project.project_type"
    />
  </main>
</template>
<script>
export default {
  data() {
    return {
      project: {},
    }
  },
  async fetch() {
    const _project = await fetch(
      `${process.env.API_BASE_URL}/projects?slug=${this.$route.params.slug}`
    ).then((_response) => _response.json())
    this.project = _project[0]
  },
}
</script>
<style lang=""></style>
