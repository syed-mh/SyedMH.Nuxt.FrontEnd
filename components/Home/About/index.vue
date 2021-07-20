<template>
  <section class="home-about grid">
    <h1 class="section-title">
      {{ title }}
    </h1>
    <p>
      {{ content }}
    </p>
    <nuxt-link to="/about" class="primary-button">About Me</nuxt-link>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
