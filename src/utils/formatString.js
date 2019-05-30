/**
 * 格式化字符串为纯数字
 */
export function formatPureNumberStr(textval) {
  let temp = ""
  textval = String(textval)
  for (let i = 0; i < textval.length; i++) {
    if (textval.charCodeAt(i) >= 48 && textval.charCodeAt(i) <= 57) {
      temp += textval.charAt(i)
    }
  }
  return temp
}
