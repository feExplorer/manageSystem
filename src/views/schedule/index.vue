<template>
  <div class="schedule">
    <schedule :columns="columns"></schedule>
    <hl-countup :end="1000"></hl-countup>
  </div>
</template>

<script>
import schedule from "@/components/hl-schedule/index";
export default {
  data() {
    return {
      a: 1,
      columns: [
        {
          title: "渲染函数",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h(
                "hl-countup",
                { attrs: { class: "time-segment-table", end: 100 } },
                [h("span", {}, param.column.title)]
              );
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        }
      ]
    };
  },
  components: {
    schedule
  }
};
</script>

<style>
</style>