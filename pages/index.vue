<template>
  <main class="grid boxed">
    <home-page-opener
      :title="featured.title"
      :slug="featured.slug"
      :category="featured.project_category.name"
      :category-slug="featured.project_category.slug"
      :image="featured.featuredImage.formats.large.url"
    />
    <home-about :title="about.designation" :content="about.content" />
    <lazy-home-recent-projects :projects="recentProjects" />
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
    const _featured = await fetch(
      'https://strapi.syedmh.com/projects?highlight=true&_limit=1'
    ).then((_response) => _response.json())
    this.about = await fetch('https://strapi.syedmh.com/home-about').then(
      (_response) => _response.json()
    )
    const _recentProjects = await fetch(
      'https://strapi.syedmh.com/projects?highlight=false'
    ).then((_response) => _response.json())
    this.featured = _featured[0]
    this.recentProjects = _recentProjects.slice(0, 3)
  },
}
</script>
