import hlCountup from './hl-count-up';
const components = {
  hlCountup
}
const hl = {
  ...components
}
const install = function(Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(hl).forEach(key => {
      Vue.component(key, hl[key]);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
}

export default API;