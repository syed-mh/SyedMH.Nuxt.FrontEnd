<template>
  <footer>
    <div class="boxed glowing-border--top flex">
      <span class="flex"> © SyedMH | {{ new Date().getFullYear() }} </span>
      <div class="footer-links">
        <a href="https://github.com/syed-mh/" title="Github">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" src="./index.scss" scoped />
