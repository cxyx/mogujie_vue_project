<template>
  <main class="c-main">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'CMain'
}
</script>
<style lang="scss" scoped>
@include b(c-main) {
  overflow: auto;
  flex: 1;  // 将剩下空间占满
}
</style>