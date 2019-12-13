<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" :width="setCellWidth(column)" />
    </colgroup>
    <tbody @click="changeday">
      <tr v-for="(row, index) in data" :key="index">
        <td
          v-for="(dataItem, index) in row"
          :key="index"
          style="cursor:pointer"
          :style="{background:dataItem.selected == true?'red':'',color:dataItem.month == 0 ? '#000000' : '#999999'}"
        >{{dataItem.day}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Mixin from "./mixin";
export default {
  name: "scheduleBody",
  mixins: [Mixin],
  props: {
    styleObject: Object,
    columns: Array,
    data: Array // rebuildData
  },
  methods:{
    changeday(e){
      console.dir(e.target.cellIndex)
      console.dir(e.target.parentNode.sectionRowIndex)
      // this.$emit()
    }
  }
};
</script>

<style>
</style>