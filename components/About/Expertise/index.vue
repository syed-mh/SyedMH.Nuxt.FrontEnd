<template>
  <section class="grid">
    <h2 class="section-title--small">Other Tools I'm Good At</h2>
    <ul>
      <li v-for="expertise of expertises" :key="expertise.id">
        {{ expertise.title }}
        <ul>
          <li v-for="detail of expertise.listContent" :key="detail.id">
            {{ detail.detail }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    expertises: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss" />
