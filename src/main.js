import Button from './components/button/index';

const components = [
  Button
];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => {
      console.log(component);
      Vue.component(component.name, component);
  });
};

export default {
  version: '0.1.0',
  install
};
