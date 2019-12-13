<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styles">
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" :width="setCellWidth(column)" />
    </colgroup>
    <thead>
      <tr v-for="(cols, rowIndex) in headRows" :key="rowIndex">
        <th v-for="(column, index) in cols" :key="index">
          <div>
            <template>
              <span v-if="!column.renderHeader">{{ column.title || '' }}</span>
              <render-header v-else :render="column.render" :column="column" :index="1"></render-header>
            </template>
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
import Mixin from "./mixin";
import renderHeader from "./header.js";
export default {
  name: "scheduleHead",
  mixins: [Mixin],
  components: {
    renderHeader
  },
  props: {
    styleObject: Object,
    columns: Array
  },
  computed: {
    styles() {
      const style = Object.assign({}, this.styleObject);
      const width = parseInt(this.styleObject.width);
      style.width = `${width}px`;
      return style;
    },
    headRows() {
      return [this.columns];
    }
  }
};
</script>

<style>
</style>