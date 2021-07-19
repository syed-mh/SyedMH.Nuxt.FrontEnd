<template>
  <section class="grid">
    <div class="grid">
      <h2 class="section-title--small">Overview</h2>
      <p>
        {{ details }}
      </p>
    </div>
    <div class="rounded grid">
      <ul class="grid">
        <li v-if="url" class="flex">
          <span>
            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
          </span>
          <span>
            <a :href="url">{{ url }}</a>
          </span>
        </li>
        <li v-if="repo" class="flex">
          <span>
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
          <span class="flex">
            <a :href="repo">{{ repo }}</a>
          </span>
        </li>
        <li class="flex">
          <span> Project Category </span>
          <span class="flex">
            <a
              :href="`/projects/project_category/${projectCategory.slug}`"
              class="secondary-button"
            >
              {{ projectCategory.name }}
            </a>
          </span>
        </li>
        <li class="flex">
          <span> Project Type </span>
          <span class="flex">
            <a
              :href="`/projects/project_type/${projectType.slug}`"
              class="secondary-button"
            >
              {{ projectType.name }}
            </a>
          </span>
        </li>
        <li class="flex">
          <span> Technologies </span>
          <span class="flex">
            <a
              v-for="technology in technologies"
              :key="technology.slug"
              :href="`/projects/technology/${technology.slug}`"
              class="secondary-button"
            >
              {{ technology.name }}
            </a>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    details: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: false,
      default: '',
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
    technologies: {
      type: Array,
      required: true,
    },
    projectCategory: {
      type: Object,
      required: true,
    },
    projectType: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
