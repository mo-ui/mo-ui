import Button from './components/button/index';
import Row from './components/row/index';

const components = [
  Button,
  Row,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => {
      Vue.component(component.name, component);
  });
};

export default {
  version: '0.1.0',
  install
};
