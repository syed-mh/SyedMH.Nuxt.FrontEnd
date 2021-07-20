<template>
  <div class="app-content">
    <app-header />
    <main class="grid boxed">
      <page-title title="Projects" />
      <div class="grid">
        <projects-sidebar :widgets="widgets" />
        <nuxt />
      </div>
    </main>
    <app-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      widgets: {
        projectTypes: {
          title: 'Project Types',
          slug: 'project_type',
          data: [],
        },
        projectCategories: {
          title: 'Project Categories',
          slug: 'project_category',
          data: [],
        },
        technologies: {
          title: 'Technologies',
          slug: 'technologies',
          data: [],
        },
      },
      // projects: [],
    }
  },
  async fetch() {
    /**
     * Collection of endpoints to fetch data from for this layout
     * @const { string[] } _staticEndpoints
     */
    const _staticEndpoints = [
      'technologies',
      'project-types',
      'project-categories',
    ]

    /**
     * @param { Object[] } RESOURCE
     * @return { Object[] } Sorted resource array by date
     */
    const _sortTaxonomiesByCount = (RESOURCE) => {
      return RESOURCE.sort((_current, _next) => {
        if (_current.projects.length === _next.projects.length) return 0
        return _current.projects.length > _next.projects.length ? -1 : 1
      })
    }

    /**
     * Collection of resources from static endpoints
     * @const { Object[] } _responses
     */
    const _responses = []

    // /**
    //  * Dynamic taxonomy passed in via route params
    //  * @const { string } _taxonomy
    //  */
    // const _taxonomy = this.$route.params.taxonomy

    // /**
    //  * Dynamic slug passed in via route params
    //  * @const { string } _slug
    //  */
    // const _slug = this.$route.params.slug

    // /**
    //  * Dynamic endpoint to fetch projects from
    //  * @var { string } _projectsEndpoint
    //  */
    // const _projectsEndpoint =
    //   _taxonomy && _slug ? `${_taxonomy}?slug=${_slug}` : '/projects'

    // /**
    //  * Array of projects returned from API
    //  * @const { Object[] } _projectsResponse
    //  */
    // const _projectsResponse = await fetch(
    //   `${process.env.API_BASE_URL}/${_projectsEndpoint}`
    // ).then((_raw) => _raw.json())

    for (const _endpoint of _staticEndpoints) {
      /**
       * JSON response from current endpoint
       * @const { Object } _response
       */
      const _response = await fetch(
        `${process.env.API_BASE_URL}/${_endpoint}`
      ).then((_raw) => _raw.json())
      _responses.push(_sortTaxonomiesByCount(_response))
    }

    // /**
    //  * Collection of projects to display on this page
    //  * @const { Object[] } _projects
    //  */
    // const _projects =
    //   _taxonomy && _slug ? _projectsResponse[0].projects : _projectsResponse

    // /**
    //  * Assign the appropriate resource to the project based on its resource ID
    //  * @param { number } ID
    //  * @param { Object[] } RESOURCES
    //  */
    // const _findResourceDetailsById = (ID, RESOURCES) => {
    //   return RESOURCES.find((_resource) => _resource.id === ID)
    // }

    // if (_taxonomy && _slug) {
    //   for (const _project of _projects) {
    //     _project.project_category = _findResourceDetailsById(
    //       _project.project_category,
    //       _responses[2]
    //     )
    //   }
    // }

    /**
     * Assign data fetched from the API to the component's state
     */
    // this.projects = _projects
    this.widgets.technologies.data = _responses[0]
    this.widgets.projectTypes.data = _responses[1]
    this.widgets.projectCategories.data = _responses[2]
  },
}
</script>
<style lang="scss" scoped src="./project-archive.scss" />
