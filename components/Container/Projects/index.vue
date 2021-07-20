<template>
  <div class="grid">
    <project-card
      v-for="project in projects"
      :key="project.id"
      :image="project.featuredImage.formats.small.url"
      :title="project.title"
      :slug="project.slug"
      :category-slug="project.project_category.slug"
      :category-name="project.project_category.name"
    />
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
