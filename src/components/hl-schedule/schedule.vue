<template>
  <div :style="styles">
    <schedule-head :styleObject="tableHeaderStyle" :columns="columns"></schedule-head>
    <schedule-body :columns="columns" :data="data" style="text-align:center"></schedule-body>
  </div>
</template>

<script>
import scheduleHead from "./schedule-head";
import scheduleBody from "./schedule-body";
export default {
  name: "schedule",
  components: {
    scheduleHead,
    scheduleBody
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    // 3.4.0
    maxHeight: {
      type: [Number, String]
    }
  },
  data() {
    return {
      tableWidth: 0
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.height) {
        const height = parseInt(this.height);
        style.height = `${height}px`;
      }
      if (this.maxHeight) {
        const maxHeight = parseInt(this.maxHeight);
        style.maxHeight = `${maxHeight}px`;
      }
      if (this.width) style.width = `${this.width}px`;
      return style;
    },
    tableHeaderStyle() {
      let style = {};
      if (this.tableWidth !== 0) {
        let width = "";
        width = this.tableWidth;
        style.width = `${width}px`;
      }
      return style;
    }
  }
};
</script>

<style>
</style>