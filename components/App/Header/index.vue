<template>
  <header>
    <div class="boxed flex glowing-border--bottom">
      <app-logo />
      <button
        ref="button"
        type="button"
        class="menu-opener"
        @click="handleMenuToggle"
        @keypress="handleMenuToggle"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <ul
        ref="menu"
        class="flex"
        @click="handleMenuToggle"
        @keypress="handleMenuToggle"
      >
        <li v-for="menuItem in menuItems" :key="menuItem.name">
          <nuxt-link
            :to="menuItem.to"
            :exact="menuItem.exact"
            @click="handleMenuToggle"
            >{{ menuItem.name }}</nuxt-link
          >
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
          exact: true,
        },
        {
          to: '/projects',
          name: 'Projects',
          exact: false,
        },
        {
          to: '/about',
          name: 'About',
          exact: false,
        },
      ],
    }
  },
  methods: {
    handleMenuToggle(event) {
      if (event.type !== 'click') return false
      event.target.blur()
      this.$refs.button.classList.toggle('active')
      this.$refs.menu.classList.toggle('active')
    },
  },
}
</script>
<style lang="scss" src="./index.scss" scoped />
