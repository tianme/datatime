import Pikcer from './picker.vue';

// eslint-disable-next-line no-unused-vars
const install = (Vue, options = {}) => {
  Vue.component(Pikcer.name, Pikcer);
}

const picker = {
  install,
}

export default picker;