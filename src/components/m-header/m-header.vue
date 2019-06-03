<template>
  <div class="m-header">
    <div class="center">
      <div class="icon"></div>
      <div class="text">Chicken Music</div>
    </div>
    <div class="right mine">
      <i class="icon-mine"></i>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.m-header 
  display: flex;
  height: 44px;
  align-items: center;
  color: $color-theme;
  .center 
    flex: 1;
    text-align: center;
    margin-left: 28px;
    .icon 
      display: inline-block;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      bg-image('logo');
      background-size: 30px 32px;
      vertical-align: middle;
    .text
      display: inline-block;
  .right
    padding-right: 12px;

</style>

