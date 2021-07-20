<template>
  <main class="grid boxed">
    <home-opener
      :title="featured.title"
      :slug="featured.slug"
      :category="featured.project_category.name"
      :category-slug="featured.project_category.slug"
      :image="featured.featuredImage.formats"
    />
    <home-about :title="about.designation" :content="about.content" />
    <home-recent-projects :projects="recentProjects" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      featured: {},
      about: {},
      recentProjects: [],
    }
  },
  async fetch() {
    /**
     * A collection of endpoints to fetch data from
     * @const { string[] } _endpoints
     */
    const _endpoints = [
      'projects?highlight=true&_limit=1',
      'home-about',
      'projects?highlight=false&_sort=date:DESC&_limit=3',
    ]

    /**
     * A collection of JSON responses from all of the endpoints
     * @const { Object[] } _responses
     */
    const _responses = []

    for (const _endpoint of _endpoints) {
      /**
       * API response from current endpoint
       * @const { Object|Object[] } _response
       */
      const _response = await fetch(
        `${process.env.API_BASE_URL}/${_endpoint}`
      ).then((_raw) => _raw.json())
      _responses.push(_response)
    }

    /**
     * Append responses to component state
     */
    this.featured = _responses[0][0]
    this.about = _responses[1]
    this.recentProjects = _responses[2]
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
