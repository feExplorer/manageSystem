<template>
  <div class="schedule">
    <pre @click="nextMonth">下个月</pre>
      <pre @click="preMonth">上个月</pre>
    <div class="head">
      <span v-for="(item,index) in timerHeadData" :key="index">{{item}}</span>
    </div>
    <div class="body" @click="handleCellClick">
      <div v-for="(item,row) in data1" :key="row">
        <span
          v-for="(item,clum) in item"
          :key="clum"
          :style="{background:item.selected == true?'red':'',color:item.monthState == 0 ? '#000000' : '#999999'}"
          :data-day="item.full"
          :data-row="row" :data-clum="clum"
        >{{item.day}} <img width="10" src="https://mgbq.github.io/nx-admin-site/home.png" v-if="item.isSign"> </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import time from "@/utils/time";
export default {
  props: ["signData"],
  data() {
    return {
      timerHeadData: ["日", "一", "二", "三", "四", "五", "六"],
      days:[],
      signDaysArr:[],
      today: time.getCurMonth(),
    };
  },
  created() {
    this.monthDay(new Date(this.today.now));
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
              day: `${day < 9 ? '0' + day : day}`,
              month: `${month < 9 ? '0' + (month) : month}`,
              year: year,
              full: `${year}-${month < 9 ? '0' + (month + 1) : month + 1}-${day < 9 ? '0' + day : day}`,
              monthState: -1,
              is_sign:false
            }
          : day <= lastMonthDays + currentMonthDays // 上月
          ? day - lastMonthDays === Number(today)
            ? {
                selected: true,
                day: `${(day - lastMonthDays) < 9 ? '0' + (day - lastMonthDays) : (day - lastMonthDays)}` ,
                month: `${month < 9 ? '0' + (month + 1) : month + 1}`,
                year: year,
                full: `${year}-${month < 9 ? '0' + (month + 1) : month + 1}-${(day - lastMonthDays) < 9 ? '0' + (day - lastMonthDays) : (day - lastMonthDays)}`,
                monthState: -1,
                isSign:false
              }
            : {
                selected: false,
                day: `${(day - lastMonthDays) < 9 ? '0' + (day - lastMonthDays) : (day - lastMonthDays)}`,
                month: `${month < 9 ? '0' + (month + 1) : month + 1}`,
                year: year,
                full: `${year}-${month < 9 ? '0' + (month + 1) : month + 1}-${(day - lastMonthDays) < 9 ? '0' + (day - lastMonthDays) : (day - lastMonthDays)}`,
                monthState: 0,
                isSign:false
              }
            : { // 当前月 day - (lastMonthDays + currentMonthDays); // 下月
              selected: false,
              day: `${(day - (lastMonthDays + currentMonthDays)) < 9 ? '0' + (day - (lastMonthDays + currentMonthDays)) : (day - (lastMonthDays + currentMonthDays))}`,
              month: `${month + 1 < 9 ? '0' + (month + 2) : month + 2}`,
              year: year,
              full:`${year}-${month + 1 < 9 ? '0' + (month + 2) : month + 2}-${(day - (lastMonthDays + currentMonthDays)) < 9 ? '0' + (day - (lastMonthDays + currentMonthDays)) : (day - (lastMonthDays + currentMonthDays))}`,
              monthState: 1,
              isSign:false
            };
      };

      for (let i = 0; i < 7; i += 1) {
        // 上月天数 - 当月1日为星期几 + 当前是一周中的第几天 + 1
        let virtualDay = lastMonthDays - currentWeekday + i + 1;
        for (let j = 0; j < 6; j += 1) {
          daysArr[j][i] = getDay(virtualDay + j * 7);
          if(daysArr[j][i]['full'] in this.signDay){
            daysArr[j][i].isSign = true
          }
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
      this.days = daysArr;
      return daysArr
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
    handleCellClick(e) {
      this.days[this.currentDayData.row][this.currentDayData.colum].selected = false
      const target = e.target;
      const day = target.dataset.day;
      const row = target.dataset.row;
      const colum = target.dataset.clum;
      const cellData = {
        day: day,
        row: row,
        colum: colum
      }
      this.days[row][colum].selected = true      
      this.$emit("checkIn", cellData);
    }
  },
  computed:{
    data1(){
      // 帅选打卡日期
      return this.monthDay()
    },
    signDay(){
      let obj = {}
      for(let i = 0; i < this.signData.length;i++){
        obj[this.signData[i].sign_day] = this.signData[i].sign_day
      }
      return obj
    }
  }
};
</script>

<style lang="less">
.schedule {
  .head{
    display: flex;
    justify-content: center;
    span {
        flex-basis: 14.25%;
        text-align: center;
      }
  }
  .body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    div {
      // width: 100%;
      display: flex;
      span {
        flex-basis: 14.25%;
        text-align: center;
        position: relative;
        img{
          position: absolute;
          left: 50%;
          transform:translateX(-50%); 
          bottom: 0;
        }
      }
    }
  }
}
</style>