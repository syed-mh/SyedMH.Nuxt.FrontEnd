<template>
  <main class="grid boxed">
    <home-opener
      :title="featured.title"
      :slug="featured.slug"
      :category="featured.project_category.name"
      :category-slug="featured.project_category.slug"
      :image="featured.featuredImage.formats.large.url"
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
    const _featured = await fetch(
      `${process.env.API_BASE_URL}/projects?highlight=true&_limit=1`
    ).then((_response) => _response.json())
    this.about = await fetch(`${process.env.API_BASE_URL}/home-about`).then(
      (_response) => _response.json()
    )
    const _recentProjects = await fetch(
      `${process.env.API_BASE_URL}/projects?highlight=false&_sort=published_at:DESC&_limit=3`
    ).then((_response) => _response.json())
    this.featured = _featured[0]
    this.recentProjects = _recentProjects.slice(0, 3)
  },
}
</script>
