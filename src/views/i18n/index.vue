<template>
  <div class="langContainer">
    <p>{{$t('test.text')}}</p>
    <button @click="change">切换语言</button>
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "zh";
      }
    }
  }
};
</script>

<style>
</style>