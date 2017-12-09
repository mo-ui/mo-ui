import Col from './src/main';

Col.install = function (Vue) {
    Vue.component(Col.name, Col);
};

export default Col;
