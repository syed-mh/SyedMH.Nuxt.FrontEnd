<template>
  <section class="grid">
    <h2 class="section-title--extra-small">
      {{ widget.title }}
    </h2>
    <ul class="grid">
      <li v-for="item in widget.data" :key="item.name" class="flex">
        <nuxt-link
          v-if="item.projects.length"
          :to="`/projects/${widget.slug}/${item.slug}`"
          class="flex"
        >
          {{ item.name }}
          <span class="rounded">
            {{ item.projects.length }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    widget: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
