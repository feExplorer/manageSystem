<template>
  <div class="myTable">
    <schedule-head :columns="columns" :index="1"></schedule-head>
  </div>
</template>

<script>
import scheduleHead from "./schedule-head.vue";
export default {
  components: {
    scheduleHead
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>