<template lang="eng">
  <section class="grid">
    <figure aspect-ratio="16x9" class="rounded shadow filter">
      <img :src="`${$config.API_BASE_URL}/${image}`" :alt="title" width="16" height="9" />
    </figure>
    <div class="flex">
      <nuxt-link class="category" :to="`/project-category/${categorySlug}`">{{ category }}::</nuxt-link>
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
    image: { type: String, required: true },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
