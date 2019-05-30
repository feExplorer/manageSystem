/*
 * @Author: honglin
 * @Date: 2019-05-28 10:34:02
 * @Last Modified by: honglin
 * @Last Modified time: 2019-05-30 11:05:44
 */

/**
 * 验证用户名
 * @param {*} str
 */
export function validUsername(str) {
  const validMap = ['admin', 'editor']
  return [validMap.indexOf(str.trim()) >= 0, "请输入正确的用户名"]
  // return validMap.indexOf(str.trim()) >= 0
}
/**
 * 验证密码包含6-18位至少含有一个数字和一个字母
 * @param {*} passwordVal 
 */
export function validatePassword(passwordVal) {
  let passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
  let result = [passwordRegx.test(passwordVal), "至少包含数字和字母"]
  return result
}
/**
 * 判断手机号码是否正确
 */
export function validateMobile(phone) {
  var isPhone = /1[^2]\d{9}/
  let result = []
  // 增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
  // const isMob = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[012356789][0-9]{8}|18[012356789][0-9]{8}|14[57][0-9]{8}|17[3678][0-9]{8})$/
  if (!validatenull(phone)) {
    if (phone.length === 11) {
      if (!isPhone.test(phone)) {
        result = [0, "手机号码格式不正确"]
      } else {
        result = [1]
      }
    } else {
      result = [0, "手机号码长度不为11位"]
    }
  } else {
    result = [0, "手机号码不能为空"]
  }
  return result
}
/**
 * 判断手机验证码是否正确
 */
export function validateCode(code) {
  var isCode = /\d{4}/
  let result = []
  if (!validatenull(code)) {
    if (code.length === 4) {
      if (!isCode.test(code)) {
        result = [0, "验证码是纯数字"]
      } else {
        result = [1]
      }
    } else {
      result = [0, "验证码长度应为4位"]
    }
  } else {
    result = [0, "验证码不能为空"]
  }
  return result
}

/* 合法uri */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}
