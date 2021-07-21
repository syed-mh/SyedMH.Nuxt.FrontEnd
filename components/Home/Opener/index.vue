<template lang="eng">
  <section class="grid">
    <figure aspect-ratio="16x9" class="rounded shadow filter">
      <img
        :srcset="`${$config.API_BASE_URL}/${image.thumbnail.url} ${image.thumbnail.width}w, ${$config.API_BASE_URL}/${image.small.url} ${image.small.width}w, ${$config.API_BASE_URL}/${image.medium.url} ${image.medium.width}w, ${$config.API_BASE_URL}/${image.large.url} ${image.large.width}w`"
        :src="`${$config.API_BASE_URL}/${image.large.url}`"
        :alt="title"
        sizes="(min-width: 960px) 720px, 100vw"
        loading="eager"
      />
    </figure>
    <div class="flex">
      <nuxt-link class="category" :to="`/projects/project_category/${categorySlug}`">{{ category }}::</nuxt-link>
      <nuxt-link class="title" :to="`/project/${slug}`">{{ title }}</nuxt-link>
      <nuxt-link class="primary-button" :to="`/project/${slug}`">Explore</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    categorySlug: { type: String, required: true },
    image: { type: Object, required: true },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
