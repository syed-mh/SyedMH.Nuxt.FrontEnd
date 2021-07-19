<template>
  <div>
    <figure aspect-ratio="8x3" class="rounded shadow filter">
      <img :src="`${$config.API_BASE_URL}/${image}`" :alt="alt" />
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
      type: String,
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
