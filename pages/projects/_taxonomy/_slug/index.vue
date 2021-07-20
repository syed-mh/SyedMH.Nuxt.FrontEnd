<template>
  <div>
  <container-projects v-if="projects.length" :projects="projects" />
  <div v-else class="center">
    <h2 class="section-title--small">No Results Found</h2>
    <nuxt-link to="/projects" class="primary-button center">
      View all Projects
    </nuxt-link>
  </div>
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
    /**
     * Dynamic taxonomy passed in via route params
     * @const { string } _taxonomy
     */
    const _taxonomy = this.$route.params.taxonomy

    /**
     * Dynamic slug passed in via route params
     * @const { string } _slug
     */
    const _slug = this.$route.params.slug

    /**
     * Dynamic endpoint to fetch projects from
     * @var { string } _projectsEndpoint
     */
    const _projectsEndpoint = `projects?_where[0][${_taxonomy}.slug]=${_slug}&_sort=date:DESC`

    /**
     * Array of projects returned from API
     * @const { Object[] } _projects
     */
    const _projects = await fetch(
      `${process.env.API_BASE_URL}/${_projectsEndpoint}`
    ).then((_raw) => _raw.json())

    this.projects = _projects
  },
}
</script>
