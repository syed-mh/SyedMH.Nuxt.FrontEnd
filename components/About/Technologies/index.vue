<template>
  <section class="grid">
    <h2 class="section-title--small">What I use</h2>
    <div class="grid">
      <figure
        v-for="technology in technologies"
        :key="technology.name"
        aspect-ratio="1x1"
      >
        <img
          :src="`${$config.API_BASE_URL}/${technology.image}`"
          :alt="technology.name"
        />
      </figure>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
