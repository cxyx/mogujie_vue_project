<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CAside'


}
</script>
<style lang="scss" scoped>
@include b(c-aside){
  overflow: auto;
  flex-shrink: 0;  // 指定了 flex 元素的收缩规则
}
</style>