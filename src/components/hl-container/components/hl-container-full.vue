<template>
  <div class="hl-container-full">
    <div v-if="$slots.header" class="hl-container-full__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="hl-container-full__body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="hl-container-full__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "hl-container-full"
};
</script>
