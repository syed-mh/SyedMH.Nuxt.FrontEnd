<template>
  <header>
    <div class="boxed flex glowing-border--bottom">
      <logo />
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
<style lang="scss" src="./index.scss" scoped />
