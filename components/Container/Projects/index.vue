<template>
  <div class="grid">
    <article v-for="project in projects" :key="project.id" class="left flex">
      <figure aspect-ratio="4x3" class="rounded shadow filter">
        <img
          :src="`${$config.API_BASE_URL}/${project.featuredImage.formats.small.url}`"
          :alt="project.title"
        />
      </figure>
      <nuxt-link
        :to="`/project-category/${project.project_category.slug}`"
        class="category"
        >{{ project.project_category.name }}</nuxt-link
      >
      <h3>
        <nuxt-link to="`/project/${project.slug}`" class="flex">
          {{ project.title }}
          <font-awesome-icon :icon="['fas', 'folder-open']" />
        </nuxt-link>
      </h3>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
