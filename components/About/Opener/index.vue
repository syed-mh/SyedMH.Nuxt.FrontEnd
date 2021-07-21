<template>
  <section class="grid">
    <div v-html="$md.render(about)" />
    <img
      :srcset="`${$config.API_BASE_URL}/${image.formats.thumbnail.url} ${image.formats.thumbnail.width}w, ${$config.API_BASE_URL}/${image.formats.small.url} ${image.formats.small.width}w, ${$config.API_BASE_URL}/${image.formats.medium.url} ${image.formats.medium.width}w, ${$config.API_BASE_URL}/${image.formats.large.url} ${image.formats.large.width}w`"
      :src="`${$config.API_BASE_URL}/${image.formats.large.url}`"
      :width="image.width"
      :height="image.height"
      alt="Syed MH"
      sizes="(min-width: 960px) 720px, 100vw"
      loading="eager"
    />
  </section>
</template>
<script>
export default {
  props: {
    about: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
