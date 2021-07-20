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
    this.featured = {
      id: _responses[0][0].id,
      title: _responses[0][0].title,
      slug: _responses[0][0].slug,
      project_type: {
        name: _responses[0][0].project_type.name,
        slug: _responses[0][0].project_type.slug,
      },
      project_category: {
        name: _responses[0][0].project_category.name,
        slug: _responses[0][0].project_category.slug,
      },
      featuredImage: {
        formats: {
          thumbnail: {
            width: _responses[0][0].featuredImage.formats.thumbnail.width,
            url: _responses[0][0].featuredImage.formats.thumbnail.url,
          },
          large: {
            width: _responses[0][0].featuredImage.formats.large.width,
            url: _responses[0][0].featuredImage.formats.large.url,
          },
          medium: {
            width: _responses[0][0].featuredImage.formats.medium.width,
            url: _responses[0][0].featuredImage.formats.medium.url,
          },
          small: {
            width: _responses[0][0].featuredImage.formats.small.width,
            url: _responses[0][0].featuredImage.formats.small.url,
          },
        },
      },
    }
    this.about = _responses[1]
    this.recentProjects = _responses[2].map((_project) => {
      return {
        id: _project.id,
        title: _project.title,
        slug: _project.slug,
        project_type: {
          name: _project.project_type.name,
          slug: _project.project_type.slug,
        },
        project_category: {
          name: _project.project_category.name,
          slug: _project.project_category.slug,
        },
        featuredImage: {
          formats: {
            thumbnail: {
              width: _project.featuredImage.formats.thumbnail.width,
              url: _project.featuredImage.formats.thumbnail.url,
            },
            large: {
              width: _project.featuredImage.formats.large.width,
              url: _project.featuredImage.formats.large.url,
            },
            medium: {
              width: _project.featuredImage.formats.medium.width,
              url: _project.featuredImage.formats.medium.url,
            },
            small: {
              width: _project.featuredImage.formats.small.width,
              url: _project.featuredImage.formats.small.url,
            },
          },
        },
      }
    })
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
