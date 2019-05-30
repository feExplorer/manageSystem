export default {
  inserted(el, vDir, vNode) {
    // vDir.value 有指令的参数
    // 按键按下=>只允许输入 数字/小数点
    el.addEventListener("keypress", event => {
      let e = event || window.event;
      let inputKey = String.fromCharCode(typeof e.charCode === 'number' ? e.charCode : e.keyCode);
      let re = /\d/;
      // 定义方法,阻止输入
      function preventInput() {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
      if (!re.test(inputKey)) {
        preventInput();
      }
    });
  }
}
