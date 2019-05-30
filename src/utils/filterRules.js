/*
 * @Author: honglin 
 * @Date: 2019-05-28 17:46:42 
 * @Last Modified by: honglin
 * @Last Modified time: 2019-05-29 17:43:18
 */

import {
  validUsername,
  validatePassword,
  validateMobile,
  validateCode
} from '@/utils/validate'

let install = function (Vue, options) {
  /* 保留两位小数 */
  const usernameRule = (rule, value, callback) => {
    if (value !== null && value !== "") {
      let result = validUsername(value)
      if (!result[0]) {
        callback(new Error(result[1]))
      } else {
        callback()
      }
    } else {
      callback();
    }
  }
  const passwordRule = (rule, value, callback) => {
    if (value !== null && value !== "") {
      let result = validatePassword(value)
      if (!result[0]) {
        callback(new Error(result[1]))
      } else {
        callback()
      }
    } else {
      callback();
    }
  }
  const mobileRule = (rule, value, callback) => {
    if (value !== null && value !== "") {
      let result = validateMobile(value)
      if (!result[0]) {
        callback(new Error(result[1]))
      } else {
        callback()
      }
    } else {
      callback();
    }
  }
  const codeRule = (rule, value, callback) => {
    if (value !== null && value !== "") {
      let result = validateCode(value)
      if (!result[0]) {
        callback(new Error(result[1]))
      } else {
        callback()
      }
    } else {
      callback();
    }
  }
  /**
   * 参数 item
   * required true  必填项
   * maxLength  字符串的最大长度
   * min 和 max 必须同时给 min < max  type=number
   * type 手机号 mobile
   *      邮箱   email
   *      网址   url
   *      各种自定义类型   定义在 src/utils/validate 中    持续添加中.......
   */

  Vue.prototype.filter_rules = function (item) {
    let rules = [];
    if (item.required) {
      rules.push({
        required: true,
        message: '该输入项为必填项!',
        trigger: 'blur'
      });
    }
    if (item.maxLength) {
      rules.push({
        min: 1,
        max: item.maxLength,
        message: '最多输入' + item.maxLength + '个字符!',
        trigger: ['blur', 'change']
      })
    }
    if (item.min && item.max) {
      rules.push({
        min: item.min,
        max: item.max,
        message: '字符长度在' + item.min + '至' + item.max + '之间!',
        trigger: ['blur', 'change']
      })
    }
    // 不同类型（字段）的验证
    if (item.type) {
      let type = item.type;
      switch (type) {
        case 'account':
          rules.push({
            validator: usernameRule,
            trigger: 'blur'
          });
          break;
        case 'password':
          rules.push({
            validator: passwordRule,
            trigger: ['blur', 'change']
          });
          break;
        case 'mobile':
          rules.push({
            validator: mobileRule,
            trigger: ['blur', 'change']
          });
          break;
        case 'code':
          rules.push({
            validator: codeRule,
            trigger: ['blur', 'change']
          });
          break;
        default:
          rules.push({});
          break;
      }
    }
    return rules;
  };
};

export default install
