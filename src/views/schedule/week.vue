<template>
  <div class="week">
    <div class="change-week">
      <pre @click="nextMonth">下个月</pre>
      <pre @click="preMonth">上个月</pre>
      {{today.now}}
    </div>
    <schedule :columns="columns" :width="300" :data="days"></schedule>
    <demo @checkIn="handleCheckIn" :signData="demoData"></demo>
  </div>
</template>

<script>
import moment from "moment";
import time from "@/utils/time";
import schedule from "@/components/hl-schedule/schedule";
import demo from "./demo";
export default {
  data() {
    return {
      days: [],
      currentDayData:{},
      today: time.getCurMonth(),
      columns: [
        {
          title: "日",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h(
                "div",
                {
                  attrs: {},
                  on: {
                    click: () => {
                      console.log(param.column);
                    }
                  }
                },
                [
                  h(
                    "span",
                    {
                      attrs: {}
                    },
                    param.column.title
                  )
                ]
              );
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "一",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h(
                "div",
                {
                  attrs: { class: "time-segment-table" },
                  on: {
                    click: () => {
                      console.log(param.column);
                    }
                  }
                },
                [h("span", {}, param.column.title)]
              );
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "二",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h("div", { attrs: { class: "time-segment-table" } }, [
                h("span", {}, param.column.title)
              ]);
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "三",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h("div", { attrs: { class: "time-segment-table" } }, [
                h("span", {}, param.column.title)
              ]);
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "四",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h("div", { attrs: { class: "time-segment-table" } }, [
                h("span", {}, param.column.title)
              ]);
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "五",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h("div", { attrs: { class: "time-segment-table" } }, [
                h("span", {}, param.column.title)
              ]);
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        },
        {
          title: "六",
          width: "200px",
          render: function(h, param) {
            if (param.column.title) {
              return h("div", { attrs: { class: "time-segment-table" } }, [
                h("span", {}, param.column.title)
              ]);
            }
            return h("div", { attrs: { class: "time-segment-table" } }, [
              h("span", {}, 1)
            ]);
          }
        }
      ],
      demoData:[
        {
          sign_day:'2019-09-21'
        },
        {
          sign_day:'2019-09-22'
        },
        {
          sign_day:'2019-09-26'
        },
        {
          sign_day:'2019-10-06'
        }
      ]
    };
  },
  created() {
    this.monthDay(new Date(this.today.now));
  },
  components: {
    schedule,
    demo
  },
  methods: {
    monthDay(date) {
      const daysArr = [[], [], [], [], [], []]; // 6*7的日历数组
      const currentWeekday = moment(date)
        .date(1)
        .weekday(); // 获取当月1日为星期几
      const today = new Date(this.today.now).getDate();
      const month = new Date(this.today.now).getMonth();
      const year = new Date(this.today.now).getFullYear();
      const lastMonthDays = moment(date)
        .subtract(1, "month")
        .daysInMonth(); // 获取上月天数
      const currentMonthDays = moment(date).daysInMonth(); // 获取当月天数
      const getDay = day => {
        return day <= lastMonthDays
          ? {
              selected: false,
              day: day,
              month: month,
              year: year,
              monthState: -1,
              is_sign:false
            }
          : day <= lastMonthDays + currentMonthDays // 上月
          ? day - lastMonthDays === Number(today)
            ? {
                selected: true,
                day: day - lastMonthDays,
                month: month - 1,
                year: year,
                monthState: -1,
                isSign:false
              }
            : {
                selected: false,
                day: day - lastMonthDays,
                month: month,
                year: year,
                monthState: 0,
                isSign:false
              }
            : { // 当前月 day - (lastMonthDays + currentMonthDays); // 下月
              selected: false,
              day: day - (lastMonthDays + currentMonthDays),
              month: month + 1,
              year: year,
              monthState: 1,
              isSign:false
            };
      };

      for (let i = 0; i < 7; i += 1) {
        // 上月天数 - 当月1日为星期几 + 当前是一周中的第几天 + 1
        let virtualDay = lastMonthDays - currentWeekday + i + 1;
        for (let j = 0; j < 6; j += 1) {
          daysArr[j][i] = getDay(virtualDay + j * 7);
          // 判断是不是在签到返回表里
          if(daysArr[j][i].selected){
            let currentDay = daysArr[j][i]
            this.currentDayData = {
              row: j,
              colum: i
            }
          }
        }
      }

      // demo 
      this.days = daysArr;
      // 还要过滤一下是不是签到了
    },
    preMonth() {
      this.today = time.getLastMonth(this.today.now);
      this.monthDay(new Date(this.today.now));
    },
    nextMonth() {
      this.today = time.getNextMonth(this.today.now);
      this.monthDay(new Date(this.today.now));
    },
    handleCheckIn(clickDay) {
      // 获得点击的是哪一天
      console.log(clickDay)
      let {row,colum} = this.currentDayData
      // this.days[row][colum].selected = false
      // this.currentDayData = clickDay
      // this.days[clickDay.row][clickDay.colum].selected = true

    }
  }
};
</script>

<style lang="scss" scoped>
.week {
  width: 700px;
  margin: 50px auto;
  .change-week {
    height: 50px;
    pre {
      float: right;
      margin-right: 20px;
    }
  }
  table {
    text-align: center;
    border-collapse: collapse;
    td {
      width: 100px;
      border: 1px solid #000;
    }
  }
}
</style>