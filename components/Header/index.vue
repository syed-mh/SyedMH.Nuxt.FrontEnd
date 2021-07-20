<template>
  <header>
    <div class="boxed flex glowing-border--bottom">
      <logo />
      <button type="button" class="menu-opener" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'bars']" />
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <ul class="flex">
        <li>
          <nuxt-link to="/" exact>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toggleMenu(event) {
      event.target.classList.toggle('active')
      event.target.nextElementSibling.classList.toggle('active')
    },
  },
}
</script>
<style lang="scss" src="./index.scss" scoped />
