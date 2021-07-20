<template>
  <div>
    <figure aspect-ratio="8x3" class="rounded shadow filter">
      <img
        :srcset="`${$config.API_BASE_URL}/${image.thumbnail.url} ${image.thumbnail.width}w, ${$config.API_BASE_URL}/${image.small.url} ${image.small.width}w, ${$config.API_BASE_URL}/${image.medium.url} ${image.medium.width}w, ${$config.API_BASE_URL}/${image.large.url} ${image.large.width}w`"
        :src="`${$config.API_BASE_URL}/${image.large.url}`"
        :alt="alt"
      />
    </figure>
    <span class="rounded">
      {{ credit }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: Array,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    credit: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
