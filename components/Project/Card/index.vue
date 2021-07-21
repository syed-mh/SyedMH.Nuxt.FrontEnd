<template>
  <article class="left flex">
    <figure aspect-ratio="4x3" class="rounded shadow filter">
      <img
        :src="`${$config.API_BASE_URL}/${image}`"
        :alt="title"
        :loading="loading"
      />
    </figure>
    <nuxt-link
      :to="`/projects/project_category/${categorySlug}`"
      class="category"
    >
      {{ categoryName }}
    </nuxt-link>
    <h3>
      <nuxt-link :to="`/project/${slug}`" class="flex">
        {{ title }}
        <font-awesome-icon :icon="['fas', 'folder-open']" />
      </nuxt-link>
    </h3>
  </article>
</template>
<script>
export default {
  props: {
    loading: {
      type: String,
      default: 'lazy',
    },
    image: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
