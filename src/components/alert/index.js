import Alert from './src/main';

Alert.install = function(Vue) {
    Vue.component(Alert.name, Alert);
};

export default Alert;
