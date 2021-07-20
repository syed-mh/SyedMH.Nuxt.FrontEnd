<template>
  <header>
    <div class="boxed flex glowing-border--bottom">
      <logo />
      <button
        ref="button"
        type="button"
        class="menu-opener"
        @click="handleMenuToggle"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <ul ref="menu" class="flex" @click="handleMenuToggle">
        <li v-for="menuItem in menuItems" :key="menuItem.name">
          <nuxt-link :to="menuItem.to" @click="handleMenuToggle">{{
            menuItem.name
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          to: '/',
          name: 'Home',
        },
        {
          to: '/projects',
          name: 'Projects',
        },
        {
          to: '/about',
          name: 'About',
        },
      ],
    }
  },
  methods: {
    handleMenuToggle() {
      this.$refs.button.classList.toggle('active')
      this.$refs.menu.classList.toggle('active')
    },
  },
}
</script>
<style lang="scss" src="./index.scss" scoped />
