import Button from './src/main.vue';

Button.install = function (Vue) {
    Vue.component(Button.name, Button);
};

export default Button;
